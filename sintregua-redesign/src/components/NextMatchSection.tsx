"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface MatchData {
  homeTeam: {
    name: string;
    shortName: string;
    logo: string;
  };
  awayTeam: {
    name: string;
    shortName: string;
    logo: string;
  };
  competition: string;
  matchday: string;
  date: string;
  time: string;
  venue: string;
  isHome: boolean;
}

// Datos de ejemplo
const nextMatch: MatchData = {
  homeTeam: {
    name: "Levante UD",
    shortName: "LEV",
    logo: "/images/levante-escudo.png",
  },
  awayTeam: {
    name: "Athletic Club",
    shortName: "ATH",
    logo: "/images/athletic-escudo.png",
  },
  competition: "La Liga",
  matchday: "Jornada 20",
  date: "2026-01-12",
  time: "21:00",
  venue: "Ciutat de València",
  isHome: true,
};

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-3 sm:gap-4">
      {[
        { value: timeLeft.days, label: "Días" },
        { value: timeLeft.hours, label: "Horas" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Seg" },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="relative">
            <div className="w-14 sm:w-18 h-16 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
              <span className="font-display font-black text-2xl sm:text-3xl text-white">
                {String(item.value).padStart(2, "0")}
              </span>
            </div>
            {/* Efecto de brillo */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          </div>
          <span className="text-white/50 text-[10px] sm:text-xs uppercase tracking-wider mt-2 block">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function NextMatchSection() {
  const matchDateTime = `${nextMatch.date}T${nextMatch.time}:00`;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Fondo con gradiente azulgrana */}
      <div className="absolute inset-0 bg-gradient-to-br from-levante-azul-deep via-levante-azul to-levante-granate-deep" />

      {/* Textura de estadio/césped sutil */}
      <div className="absolute inset-0 bg-granota-pattern opacity-20" />

      {/* Patrón geométrico decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute -left-20 -top-20 w-96 h-96 text-white/5"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
        <svg
          className="absolute -right-20 -bottom-20 w-96 h-96 text-white/5"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-levante-dorado/20 border border-levante-dorado/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-levante-dorado rounded-full animate-pulse" />
            <span className="text-levante-dorado text-xs font-bold uppercase tracking-wider">
              Próximo partido
            </span>
          </span>
          <h2 className="font-display font-black text-hero-md text-white mb-2">
            El Ciutat espera
          </h2>
          <p className="text-white/60">
            {nextMatch.competition} • {nextMatch.matchday}
          </p>
        </div>

        {/* Match Card */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10">
          {/* Equipos */}
          <div className="flex items-center justify-between gap-4 lg:gap-8 mb-10">
            {/* Home Team */}
            <div className="flex-1 flex flex-col items-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 mb-4">
                <div className="absolute inset-0 bg-white/10 rounded-2xl" />
                <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  {/* Placeholder escudo */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-levante-azul to-levante-granate rounded-lg flex items-center justify-center">
                    <span className="font-display font-black text-white text-lg sm:text-xl">
                      {nextMatch.homeTeam.shortName}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white text-center">
                {nextMatch.homeTeam.name}
              </h3>
              {nextMatch.isHome && (
                <span className="text-levante-dorado text-xs uppercase tracking-wider mt-1">
                  Local
                </span>
              )}
            </div>

            {/* VS */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-display font-black text-xl sm:text-2xl text-white/80">
                    VS
                  </span>
                </div>
                {/* Hora del partido */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="font-display font-bold text-lg text-levante-dorado">
                    {nextMatch.time}h
                  </span>
                </div>
              </div>
            </div>

            {/* Away Team */}
            <div className="flex-1 flex flex-col items-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 mb-4">
                <div className="absolute inset-0 bg-white/10 rounded-2xl" />
                <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  {/* Placeholder escudo */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                    <span className="font-display font-black text-white text-lg sm:text-xl">
                      {nextMatch.awayTeam.shortName}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white text-center">
                {nextMatch.awayTeam.name}
              </h3>
              {!nextMatch.isHome && (
                <span className="text-levante-dorado text-xs uppercase tracking-wider mt-1">
                  Visitante
                </span>
              )}
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-10 mt-12">
            <p className="text-center text-white/40 text-sm uppercase tracking-wider mb-4">
              Faltan para el pitido inicial
            </p>
            <CountdownTimer targetDate={matchDateTime} />
          </div>

          {/* Info del estadio */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/60">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">{nextMatch.venue}</span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />

            <div className="flex items-center gap-2 text-white/60">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">
                {new Date(nextMatch.date).toLocaleDateString("es-ES", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="/entradas"
              className="inline-flex items-center gap-2 px-6 py-3 bg-levante-dorado text-neutral-dark font-display font-bold rounded-full hover:bg-levante-dorado-light transition-all duration-300 hover:shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
              Comprar entradas
            </a>
            <a
              href="/previa"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-display font-medium rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Ver previa del partido
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Efecto de brillo en esquinas */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-levante-dorado/20 to-transparent rounded-tl-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-levante-granate/20 to-transparent rounded-br-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
