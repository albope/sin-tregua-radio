"use client";

import { useEffect, useState } from "react";
import { PatreonApiResponse } from "@/lib/types/patreon";
import { formatPatreonNumber } from "@/lib/utils/patreon-scraper";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function PatreonStatsCard() {
  const [data, setData] = useState<PatreonApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/patreon-stats");
        const json: PatreonApiResponse = await response.json();
        setData(json);
      } catch (error) {
        console.error("[PatreonStatsCard] Error al obtener datos:", error);
        setData({ success: false, data: null, error: "Error de red" });
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <section className="py-16 lg:py-20 bg-neutral-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="p-8 lg:p-12 bg-gradient-to-br from-levante-dorado to-levante-dorado-dark rounded-2xl">
            <div className="animate-pulse">
              <div className="h-8 bg-white/20 rounded-lg mb-8 w-64"></div>
              <div className="grid grid-cols-2 gap-6 lg:gap-8 mb-8">
                <div>
                  <div className="h-16 bg-white/20 rounded-lg mb-2"></div>
                  <div className="h-6 bg-white/10 rounded w-32 mx-auto"></div>
                </div>
                <div>
                  <div className="h-16 bg-white/20 rounded-lg mb-2"></div>
                  <div className="h-6 bg-white/10 rounded w-32 mx-auto"></div>
                </div>
              </div>
              <div className="h-12 bg-white/20 rounded-full w-56"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state o datos no disponibles - mostrar mensaje claro
  if (!data?.success || !data?.data) {
    return (
      <section className="py-16 lg:py-20 bg-neutral-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="p-8 lg:p-12 bg-gradient-to-br from-levante-dorado to-levante-dorado-dark rounded-2xl text-white text-center">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.003 3.95c-1.423-.298-2.88-.45-4.407-.45C4.757 3.5.5 9.73.5 17.118c0 2.054.485 3.957 1.31 5.537l1.078-1.056c-.684-1.376-1.057-2.972-1.057-4.73 0-6.413 3.666-12.001 8.765-12.001 1.383 0 2.748.136 4.077.403v-.82c-.03-.002-.06-.002-.09-.002a4.23 4.23 0 00-.58.05zm1.49 1.376v-.006c0-.028-.007-.055-.01-.083a2.73 2.73 0 00-2.64-2.237c-1.516 0-2.747 1.23-2.747 2.747s1.23 2.747 2.747 2.747a2.73 2.73 0 002.64-2.237c.003-.028.01-.055.01-.083v-.006-2.842zm1.167 15.424c0-4.068-2.867-7.4-6.617-7.4-3.75 0-6.617 3.332-6.617 7.4 0 4.068 2.867 7.4 6.617 7.4 3.75 0 6.617-3.332 6.617-7.4z" />
              </svg>
              <h2 className="font-display font-bold text-2xl">
                Nuestra Comunidad Granota
              </h2>
            </div>

            {/* Mensaje claro cuando no hay datos */}
            <div className="mb-8 space-y-3">
              <p className="text-lg font-medium">
                En este momento no podemos mostrar las estadísticas de nuestra comunidad
              </p>
              <p className="text-white/70 text-sm">
                Pero puedes ver todos los detalles directamente en nuestro Patreon
              </p>
            </div>

            {/* CTA Button */}
            <a
              href={SOCIAL_LINKS.patreon}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-display font-bold rounded-full border border-white/20 hover:bg-white hover:text-levante-dorado-dark transition-all duration-300 hover:scale-105"
            >
              Ver Patreon
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Success state - mostrar estadísticas
  const { totalMembers, paidMembers } = data.data;

  return (
    <section className="py-16 lg:py-20 bg-neutral-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="p-8 lg:p-12 bg-gradient-to-br from-levante-dorado to-levante-dorado-dark rounded-2xl text-white hover:shadow-glow-granate transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.003 3.95c-1.423-.298-2.88-.45-4.407-.45C4.757 3.5.5 9.73.5 17.118c0 2.054.485 3.957 1.31 5.537l1.078-1.056c-.684-1.376-1.057-2.972-1.057-4.73 0-6.413 3.666-12.001 8.765-12.001 1.383 0 2.748.136 4.077.403v-.82c-.03-.002-.06-.002-.09-.002a4.23 4.23 0 00-.58.05zm1.49 1.376v-.006c0-.028-.007-.055-.01-.083a2.73 2.73 0 00-2.64-2.237c-1.516 0-2.747 1.23-2.747 2.747s1.23 2.747 2.747 2.747a2.73 2.73 0 002.64-2.237c.003-.028.01-.055.01-.083v-.006-2.842zm1.167 15.424c0-4.068-2.867-7.4-6.617-7.4-3.75 0-6.617 3.332-6.617 7.4 0 4.068 2.867 7.4 6.617 7.4 3.75 0 6.617-3.332 6.617-7.4z" />
            </svg>
            <h2 className="font-display font-bold text-2xl">
              Nuestra Comunidad Granota
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 lg:gap-8 mb-8">
            <div className="text-center">
              <div className="font-display font-black text-4xl lg:text-5xl mb-2 animate-fade-in">
                {formatPatreonNumber(totalMembers)}
              </div>
              <div className="text-white/70 text-sm uppercase tracking-wide">
                Miembros Totales
              </div>
            </div>

            <div className="text-center">
              <div className="font-display font-black text-4xl lg:text-5xl mb-2 animate-fade-in">
                {formatPatreonNumber(paidMembers)}
              </div>
              <div className="text-white/70 text-sm uppercase tracking-wide">
                Miembros de Pago
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href={SOCIAL_LINKS.patreon}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-display font-bold rounded-full border border-white/20 hover:bg-white hover:text-levante-dorado-dark transition-all duration-300 hover:scale-105"
            >
              Apóyanos en Patreon
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          {/* Indicador sutil de caché (opcional, solo visible en dev) */}
          {data.cached && process.env.NODE_ENV === "development" && (
            <div className="mt-4 text-center text-xs text-white/40">
              Datos en caché
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
