import { PatreonStats, PatreonBootstrapData } from "@/lib/types/patreon";

/**
 * Extrae las estadísticas de Patreon del HTML de la página pública
 * @param html - HTML de la página de Patreon
 * @returns PatreonStats o null si falla la extracción
 */
export function extractPatreonStats(html: string): PatreonStats | null {
  try {
    // Estrategia 1: Buscar en __NEXT_DATA__ (estructura de Next.js de Patreon)
    const scriptRegex = /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/;
    const scriptMatch = html.match(scriptRegex);

    if (scriptMatch && scriptMatch[1]) {
      const nextData = JSON.parse(scriptMatch[1]);

      // Ruta correcta: props.pageProps.bootstrapEnvelope.pageBootstrap.campaign
      const campaign = nextData?.props?.pageProps?.bootstrapEnvelope?.pageBootstrap?.campaign;

      if (campaign) {
        const totalMembers = campaign?.data?.attributes?.patron_count;
        const paidMembers = campaign?.data?.attributes?.paid_member_count;

        if (validatePatreonStats({ totalMembers, paidMembers })) {
          console.log("[Patreon] Datos extraídos exitosamente de __NEXT_DATA__");
          return {
            totalMembers,
            paidMembers,
            lastUpdated: new Date().toISOString(),
          };
        }
      }
    }

    // Estrategia 2: Buscar patron_count y paid_member_count en el HTML con regex
    // Esto es un fallback si la estructura de Next.js cambia
    console.warn("[Patreon] Intentando estrategia de fallback con regex...");

    const patronCountMatch = html.match(/"patron_count"\s*:\s*(\d+)/);
    const paidMemberCountMatch = html.match(/"paid_member_count"\s*:\s*(\d+)/);

    if (patronCountMatch && paidMemberCountMatch) {
      const totalMembers = parseInt(patronCountMatch[1], 10);
      const paidMembers = parseInt(paidMemberCountMatch[1], 10);

      if (validatePatreonStats({ totalMembers, paidMembers })) {
        console.log("[Patreon] Datos extraídos con estrategia de fallback");
        return {
          totalMembers,
          paidMembers,
          lastUpdated: new Date().toISOString(),
        };
      }
    }

    console.error("[Patreon] No se pudieron extraer datos con ninguna estrategia");
    return null;
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
