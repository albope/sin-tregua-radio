import { NextResponse } from "next/server";
import { extractPatreonStats } from "@/lib/utils/patreon-scraper";
import { PatreonStats, PatreonApiResponse } from "@/lib/types/patreon";

// Configuración
const PATREON_URL = "https://www.patreon.com/c/sintregua/about";
const CACHE_TTL = 10 * 60 * 1000; // 10 minutos
const FETCH_TIMEOUT = 10000; // 10 segundos

// Caché en memoria
interface CacheEntry {
  data: PatreonStats;
  timestamp: number;
  expiresAt: number;
}

let cache: CacheEntry | null = null;

/**
 * Obtiene las estadísticas de Patreon desde la caché o haciendo fetch
 */
async function getPatreonStats(forceRefresh = false): Promise<PatreonStats | null> {
  // Si hay caché válida y no se fuerza refresh, devolverla
  if (cache && Date.now() < cache.expiresAt && !forceRefresh) {
    console.log("[Patreon] Devolviendo datos desde caché");
    return cache.data;
  }

  // Fetch de datos frescos
  try {
    console.log("[Patreon] Haciendo fetch de datos frescos...");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

    const response = await fetch(PATREON_URL, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`[Patreon] Error HTTP: ${response.status}`);
      // Si hay caché antigua, usarla aunque esté expirada
      if (cache) {
        console.warn("[Patreon] Usando caché expirada debido a error HTTP");
        return cache.data;
      }
      return null;
    }

    const html = await response.text();
    const stats = extractPatreonStats(html);

    if (stats) {
      // Actualizar caché
      cache = {
        data: stats,
        timestamp: Date.now(),
        expiresAt: Date.now() + CACHE_TTL,
      };
      console.log("[Patreon] Datos actualizados:", stats);
      return stats;
    } else {
      console.error("[Patreon] No se pudieron extraer los datos del HTML");
      // Si hay caché antigua, usarla
      if (cache) {
        console.warn("[Patreon] Usando caché expirada debido a error de parsing");
        return cache.data;
      }
      return null;
    }
  } catch (error: any) {
    if (error.name === "AbortError") {
      console.error("[Patreon] Timeout al hacer fetch");
    } else {
      console.error("[Patreon] Error al hacer fetch:", error.message);
    }

    // Si hay caché, usarla aunque esté expirada
    if (cache) {
      console.warn("[Patreon] Usando caché expirada debido a error de red");
      return cache.data;
    }

    return null;
  }
}

/**
 * GET /api/patreon-stats
 * Devuelve las estadísticas de miembros de Patreon
 */
export async function GET(request: Request) {
  try {
    // Verificar si se solicita forzar refresh
    const { searchParams } = new URL(request.url);
    const forceRefresh = searchParams.get("force") === "true";

    const stats = await getPatreonStats(forceRefresh);

    if (stats) {
      const response: PatreonApiResponse = {
        success: true,
        data: stats,
        cached: cache !== null && Date.now() < cache.expiresAt,
      };

      return NextResponse.json(response);
    } else {
      const response: PatreonApiResponse = {
        success: false,
        data: null,
        error: "No se pudieron obtener las estadísticas de Patreon",
      };

      return NextResponse.json(response, { status: 503 });
    }
  } catch (error: any) {
    console.error("[Patreon] Error inesperado en API route:", error);

    const response: PatreonApiResponse = {
      success: false,
      data: null,
      error: "Error interno del servidor",
    };

    return NextResponse.json(response, { status: 500 });
  }
}
