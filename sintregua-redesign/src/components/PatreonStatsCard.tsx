"use client";

import { useEffect, useState } from "react";
import { PatreonApiResponse } from "@/lib/types/patreon";
import { formatPatreonNumber } from "@/lib/utils/patreon-scraper";
import { SOCIAL_LINKS } from "@/lib/constants";

// Componente helper para animación count-up
const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 segundos
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <>{formatPatreonNumber(count)}</>;
};

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

  // Loading state - skeleton mejorado
  if (isLoading) {
    return (
      <section className="py-20 lg:py-24 bg-neutral-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative p-10 lg:p-14 bg-gradient-to-br from-levante-dorado via-levante-dorado to-levante-dorado-dark rounded-3xl shadow-elevated">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-granota-pattern opacity-5 rounded-3xl" />

            <div className="relative z-10 animate-pulse">
              {/* Header skeleton */}
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="w-10 h-10 bg-white/20 rounded-full" />
                <div className="h-8 bg-white/20 rounded-lg w-72" />
              </div>

              {/* Stats skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 mb-10">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="p-6 lg:p-8 bg-white/10 rounded-2xl border border-white/20"
                  >
                    <div className="h-20 bg-white/20 rounded-lg mb-3" />
                    <div className="h-5 bg-white/10 rounded w-40 mx-auto" />
                  </div>
                ))}
              </div>

              {/* Button skeleton */}
              <div className="flex justify-center">
                <div className="h-14 bg-white/20 rounded-2xl w-64" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state o datos no disponibles
  if (!data?.success || !data?.data) {
    return (
      <section className="py-20 lg:py-24 bg-neutral-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative p-10 lg:p-14 bg-gradient-to-br from-levante-dorado via-levante-dorado to-levante-dorado-dark rounded-3xl text-white text-center shadow-elevated">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-granota-pattern opacity-5 rounded-3xl" />

            <div className="relative z-10">
              {/* Header con icono de comunidad */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                  />
                </svg>
                <h2 className="font-display font-bold text-2xl lg:text-3xl">
                  Nuestra Comunidad Granota
                </h2>
              </div>

              {/* Mensaje cuando no hay datos */}
              <div className="mb-8 space-y-3">
                <p className="text-lg font-medium">
                  En este momento no podemos mostrar las estadísticas de nuestra
                  comunidad
                </p>
                <p className="text-white/70 text-sm">
                  Pero puedes ver todos los detalles directamente en nuestro
                  Patreon
                </p>
              </div>

              {/* CTA Button mejorado */}
              <a
                href={SOCIAL_LINKS.patreon}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-levante-dorado-dark font-display font-bold text-base rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Ver Patreon</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Success state - mostrar estadísticas con diseño premium
  const { totalMembers, paidMembers } = data.data;

  return (
    <section className="py-20 lg:py-24 bg-neutral-cream relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative p-10 lg:p-14 bg-gradient-to-br from-levante-dorado via-levante-dorado to-levante-dorado-dark rounded-3xl text-white shadow-elevated hover:shadow-glow-granate transition-all duration-500 group">
          {/* Background pattern sutil */}
          <div className="absolute inset-0 bg-granota-pattern opacity-5 rounded-3xl" />

          {/* Contenido */}
          <div className="relative z-10">
            {/* Header con icono de comunidad */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                />
              </svg>
              <h2 className="font-display font-bold text-2xl lg:text-3xl">
                Nuestra Comunidad Granota
              </h2>
            </div>

            {/* Stats Grid con cards individuales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 mb-10">
              {/* Card: Miembros Totales */}
              <div className="group/stat relative p-6 lg:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105">
                {/* Badge decorativo */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />

                {/* Número con animación count-up */}
                <div className="font-display font-black text-5xl sm:text-6xl lg:text-7xl mb-3 tracking-tighter text-center">
                  <AnimatedNumber value={totalMembers} />
                </div>

                {/* Label */}
                <div className="text-white/80 text-sm lg:text-base uppercase tracking-wider font-medium text-center">
                  Miembros Totales
                </div>
              </div>

              {/* Card: Miembros de Pago */}
              <div className="group/stat relative p-6 lg:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105">
                {/* Badge decorativo */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-levante-dorado-light animate-pulse-soft" />

                {/* Número con animación count-up */}
                <div className="font-display font-black text-5xl sm:text-6xl lg:text-7xl mb-3 tracking-tighter text-center">
                  <AnimatedNumber value={paidMembers} />
                </div>

                {/* Label */}
                <div className="text-white/80 text-sm lg:text-base uppercase tracking-wider font-medium text-center">
                  Miembros de Pago
                </div>
              </div>
            </div>

            {/* CTA Button mejorado */}
            <div className="text-center">
              <a
                href={SOCIAL_LINKS.patreon}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-levante-dorado-dark font-display font-bold text-base rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Apóyanos en Patreon</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
