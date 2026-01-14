"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IMAGES, SOCIAL_LINKS, COMPANY_INFO } from "@/lib/constants";
import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="group relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel con overlay */}
      <div className="absolute inset-0">
        {/* Placeholder gradient mientras carga */}
        <div className="absolute inset-0 bg-gradient-to-br from-levante-azul via-levante-azul-deep to-levante-granate" />

        {/* Carrusel de imágenes del equipo */}
        <HeroCarousel className="opacity-60" />

        {/* Textura sutil de granota */}
        <div className="absolute inset-0 bg-granota-pattern opacity-30 pointer-events-none" />

        {/* Efecto de viñeta */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.5)] pointer-events-none" />
      </div>

      {/* Línea dorada decorativa */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-accent opacity-80" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full text-center py-32">
        {/* Título principal */}
        <h1
          className={`font-display font-black text-hero-lg lg:text-hero-xl text-white mb-6 transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Bienvenido a la página web del programa con más sentimiento de la radiodifusión mundial.
        </h1>

        {/* Tagline */}
        <p
          className={`text-xl lg:text-2xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto font-body transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {COMPANY_INFO.tagline}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Escuchar en directo - CTA principal */}
          <a
            href="#radio-player"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('radio-player')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-levante-granate text-white font-display font-bold text-lg rounded-full hover:bg-levante-granate-deep transition-all duration-300 hover:shadow-glow-granate"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
            </span>
            ¡Escúchanos en directo!
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>

          {/* Patreon */}
          <a
            href={SOCIAL_LINKS.patreon}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-display font-bold text-lg rounded-full border border-white/20 hover:bg-levante-dorado hover:text-neutral-dark hover:border-levante-dorado transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z" />
            </svg>
            Apóyanos en Patreon
          </a>
        </div>

        {/* Redes sociales */}
        <div
          className={`mt-12 flex items-center justify-center gap-4 transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-white/50 text-sm">Síguenos:</span>
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-levante-azul flex items-center justify-center text-white transition-all duration-300"
            aria-label="X (Twitter)"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-levante-azul flex items-center justify-center text-white transition-all duration-300"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
