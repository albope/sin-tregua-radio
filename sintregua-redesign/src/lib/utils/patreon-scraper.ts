import { PatreonStats, PatreonBootstrapData } from "@/lib/types/patreon";

/**
 * Extrae las estadísticas de Patreon del HTML de la página pública
 * @param html - HTML de la página de Patreon
 * @returns PatreonStats o null si falla la extracción
 */
export function extractPatreonStats(html: string): PatreonStats | null {
  try {
    // Patreon usa Next.js y los datos están en __NEXT_DATA__
    // Buscar el script tag con id="__NEXT_DATA__"
    const scriptRegex = /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/;
    const scriptMatch = html.match(scriptRegex);

    if (!scriptMatch || !scriptMatch[1]) {
      console.error("[Patreon] No se encontró __NEXT_DATA__ en el HTML");
      return null;
    }

    const nextData = JSON.parse(scriptMatch[1]);

    // Los datos están en props.pageProps.bootstrapEnvelope.bootstrap.campaign
    const campaign = nextData?.props?.pageProps?.bootstrapEnvelope?.bootstrap?.campaign;

    if (!campaign) {
      console.error("[Patreon] No se encontró campaign en __NEXT_DATA__");
      return null;
    }

    const totalMembers = campaign?.data?.attributes?.patron_count;
    const paidMembers = campaign?.data?.attributes?.paid_member_count;

    if (!validatePatreonStats({ totalMembers, paidMembers })) {
      console.error("[Patreon] Datos inválidos:", { totalMembers, paidMembers });
      return null;
    }

    return {
      totalMembers,
      paidMembers,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error("[Patreon] Error al parsear datos:", error);
    return null;
  }
}

/**
 * Valida que los datos de Patreon sean coherentes
 * @param data - Datos a validar
 * @returns true si los datos son válidos
 */
export function validatePatreonStats(data: any): boolean {
  const { totalMembers, paidMembers } = data;

  // Verificar que sean números
  if (typeof totalMembers !== "number" || typeof paidMembers !== "number") {
    return false;
  }

  // Verificar que sean positivos
  if (totalMembers < 0 || paidMembers < 0) {
    return false;
  }

  // Verificar coherencia: miembros de pago <= miembros totales
  if (paidMembers > totalMembers) {
    return false;
  }

  // Sanity check: números razonables (menos de 1 millón)
  if (totalMembers > 1000000 || paidMembers > 1000000) {
    return false;
  }

  return true;
}

/**
 * Formatea un número con separador de miles
 * @param num - Número a formatear
 * @returns String formateado (ej: 1,534)
 */
export function formatPatreonNumber(num: number): string {
  return num.toLocaleString("es-ES");
}
