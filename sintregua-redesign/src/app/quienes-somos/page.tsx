"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ABOUT_TEXT, IMAGES, SOCIAL_LINKS, COMPANY_INFO, TEAM_MEMBERS } from "@/lib/constants";

export default function QuienesSomosPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-offwhite">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-levante-azul via-levante-azul-deep to-levante-granate" />
          <Image
            src={IMAGES.heroAlt}
            alt="Equipo Sin Tregua"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/50 to-transparent" />
          <div className="absolute inset-0 bg-granota-pattern opacity-20" />
        </div>

        {/* Línea dorada */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold-accent" />

        {/* Contenido */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-32">
          <span
            className={`inline-block px-4 py-2 bg-levante-dorado/20 text-levante-dorado text-xs font-bold uppercase tracking-wider rounded-full mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Quiénes Somos
          </span>

          <h1
            className={`font-display font-black text-hero-lg lg:text-hero-xl text-white mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {ABOUT_TEXT.title}
          </h1>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Decoraciones */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-levante-azul/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-levante-granate/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          {/* Historia */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-levante-azul/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-levante-azul" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-2xl text-neutral-dark">Nuestra Historia</h2>
            </div>
            <p className="text-lg text-neutral-muted leading-relaxed pl-16 text-justify whitespace-pre-line">
              {ABOUT_TEXT.history}
            </p>
          </div>

          {/* Nuestro Equipo */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-levante-granate/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-levante-granate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-2xl text-neutral-dark">Nuestro Equipo</h2>
            </div>

            <div className="pl-0 lg:pl-16 space-y-6">
              {TEAM_MEMBERS.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-6 bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 border-l-4 border-levante-azul"
                >
                  {/* Foto del miembro */}
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-lg ring-2 ring-levante-azul/20">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Información del miembro */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg text-neutral-dark">
                      {member.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
                      <span className="text-sm text-neutral-muted">({member.birthInfo})</span>
                    </div>
                    <p className="text-base text-neutral-muted leading-relaxed text-justify">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen del equipo */}
          <div className="relative rounded-3xl overflow-hidden shadow-card-hover mb-16">
            <Image
              src={IMAGES.heroMain}
              alt="Equipo Sin Tregua Radio"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/80 text-sm">
                El equipo de Sin Tregua Radio en el Ciutat de València
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-levante-azul to-levante-azul-deep rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="font-display font-black text-2xl lg:text-3xl mb-4">
              ¿Quieres ser parte de Sin Tregua?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              De lunes a jueves, la mejor información del Levante UD. Escúchanos en directo o apóyanos en Patreon.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SOCIAL_LINKS.radioStream}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-levante-granate text-white font-display font-bold rounded-full hover:bg-levante-granate-deep transition-all duration-300 hover:shadow-glow-granate"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                </span>
                Escuchar en Directo
              </a>
              <a
                href={SOCIAL_LINKS.patreon}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-display font-bold rounded-full border border-white/20 hover:bg-levante-dorado hover:text-neutral-dark hover:border-levante-dorado transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z" />
                </svg>
                Apóyanos en Patreon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16 bg-neutral-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-grass-texture opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-display font-bold text-xl text-neutral-dark mb-6">Contacto</h3>
          <a
            href={`mailto:${COMPANY_INFO.adminEmail}`}
            className="inline-flex items-center gap-2 text-levante-azul hover:text-levante-azul-deep transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {COMPANY_INFO.adminEmail}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
