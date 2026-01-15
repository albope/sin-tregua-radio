"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Componente de placeholder para imágenes (usado cuando no hay imagen real)
function ImagePlaceholder({ description, step }: { description: string; step: number }) {
  return (
    <div className="relative aspect-[9/16] max-w-xs mx-auto bg-neutral-light border-2 border-dashed border-neutral-muted rounded-2xl overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="text-5xl mb-3">📸</div>
        <p className="text-sm font-semibold text-neutral-dark mb-2">
          Imagen del paso {step}
        </p>
        <p className="text-xs text-neutral-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

// Componente para mostrar imagen real
function StepImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[9/16] max-w-xs mx-auto rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 320px"
      />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-levante-azul to-levante-azul-deep min-h-[40vh] flex items-center overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-levante-granate/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">
            Progressive Web App
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Instala Sin Tregua <br className="hidden sm:block" />en tu móvil
          </h1>
          <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto mb-12">
            Accede más rápido a tu radio granota favorita desde la pantalla de inicio de tu móvil
          </p>

          {/* Beneficios */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <p className="text-white text-sm font-semibold">Acceso directo</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <p className="text-white text-sm font-semibold">Carga rápida</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🔔</div>
              <p className="text-white text-sm font-semibold">Notificaciones<br />(próximamente)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">✈️</div>
              <p className="text-white text-sm font-semibold">Funciona offline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Tabs Section con instrucciones
function TabsSection() {
  const [activeTab, setActiveTab] = useState<"android" | "ios">("android");

  const androidSteps = [
    {
      title: "Abre Chrome",
      description: "Inicia el navegador Chrome en tu móvil",
      imageDesc: "Icono de Chrome en Android",
      imageSrc: "/images/instalar-app/android-paso-1-chrome.png",
    },
    {
      title: "Entra en sintregua.es",
      description: "Escribe la dirección en la barra del navegador",
      imageDesc: "Barra de direcciones con sintregua.es",
      imageSrc: "/images/instalar-app/android-paso-2-url.png",
    },
    {
      title: "Abre el menú",
      description: "Toca los tres puntos verticales (⋮) arriba a la derecha",
      imageDesc: "Menú de Chrome desplegado",
      imageSrc: "/images/instalar-app/android-paso-3-menu.png",
    },
    {
      title: "Selecciona \"Añadir a pantalla de inicio\"",
      description: "Aparecerá en el menú desplegable",
      imageDesc: "Opción 'Añadir a pantalla de inicio' resaltada",
      imageSrc: "/images/instalar-app/android-paso-4-añadir.png",
    },
    {
      title: "Confirma la instalación",
      description: "Toca \"Añadir\" en el mensaje que aparece",
      imageDesc: "Diálogo de confirmación",
      imageSrc: "/images/instalar-app/android-paso-5-confirmar.png",
    },
    {
      title: "¡Listo!",
      description: "Verás el icono de Sin Tregua en tu pantalla de inicio",
      imageDesc: "Icono en la pantalla de inicio de Android",
      imageSrc: "/images/instalar-app/android-paso-6-listo.png",
    },
  ];

  const iosSteps = [
    {
      title: "Abre Safari",
      description: "Usa el navegador Safari (el de la brújula azul)",
      imageDesc: "Icono de Safari en iOS",
      imageSrc: "/images/instalar-app/ios-paso-1-safari.png",
    },
    {
      title: "Entra en sintregua.es",
      description: "Escribe la dirección en la barra superior",
      imageDesc: "Safari con sintregua.es cargado",
      imageSrc: "/images/instalar-app/ios-paso-2-url.png",
    },
    {
      title: "Toca el botón Compartir",
      description: "Es el cuadrado con una flecha hacia arriba (↑)",
      imageDesc: "Botón de compartir en Safari iOS",
      imageSrc: "/images/instalar-app/ios-paso-3-compartir.png",
    },
    {
      title: "Busca \"Añadir a pantalla de inicio\"",
      description: "Desplázate hacia abajo en el menú",
      imageDesc: "Menú de compartir con la opción visible",
      imageSrc: "/images/instalar-app/ios-paso-4-menu.png",
    },
    {
      title: "Toca \"Añadir a pantalla de inicio\"",
      description: "Aparece un icono con un símbolo +",
      imageDesc: "Opción resaltada",
      imageSrc: "/images/instalar-app/ios-paso-5-añadir.png",
    },
    {
      title: "Confirma el nombre",
      description: "Puedes dejarlo como \"Sin Tregua\" o cambiarlo",
      imageDesc: "Diálogo de confirmación en iOS",
      imageSrc: "/images/instalar-app/ios-paso-6-nombre.png",
    },
    {
      title: "Toca \"Añadir\"",
      description: "El botón azul arriba a la derecha",
      imageDesc: "Botón Añadir destacado",
      imageSrc: "/images/instalar-app/ios-paso-7-boton.png",
    },
    {
      title: "¡Listo!",
      description: "El icono aparecerá en tu pantalla de inicio",
      imageDesc: "Icono en pantalla de inicio iOS",
      imageSrc: "/images/instalar-app/ios-paso-8-listo.png",
    },
  ];

  const steps = activeTab === "android" ? androidSteps : iosSteps;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab("android")}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-bold text-lg transition-all duration-300 ${
              activeTab === "android"
                ? "bg-levante-azul text-white shadow-lg"
                : "bg-neutral-light text-neutral-muted hover:bg-neutral-light/80"
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.43 11.43 0 00-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C2.92 12.3 1.11 16.91 1 22h22c-.11-5.09-1.92-9.7-5.4-12.52zM7 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
            </svg>
            Android
          </button>
          <button
            onClick={() => setActiveTab("ios")}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-bold text-lg transition-all duration-300 ${
              activeTab === "ios"
                ? "bg-levante-azul text-white shadow-lg"
                : "bg-neutral-light text-neutral-muted hover:bg-neutral-light/80"
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            iPhone
          </button>
        </div>

        {/* Advertencia para iOS */}
        {activeTab === "ios" && (
          <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚠️</div>
              <div>
                <p className="font-display font-bold text-yellow-800 mb-1">Importante</p>
                <p className="text-yellow-700 text-sm">
                  En iPhone debes usar Safari. Chrome no permite instalar aplicaciones web.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              {/* Número */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-levante-azul text-white font-display font-bold text-xl flex items-center justify-center">
                  {index + 1}
                </div>
              </div>

              {/* Contenido */}
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl text-neutral-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-muted mb-6 leading-relaxed">
                  {step.description}
                </p>
                {step.imageSrc ? (
                  <StepImage src={step.imageSrc} alt={step.imageDesc} />
                ) : (
                  <ImagePlaceholder description={step.imageDesc} step={index + 1} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Verification Section
function VerificationSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-levante-azul/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-3xl lg:text-4xl text-neutral-dark mb-4">
            ¿Cómo sé que está bien instalada?
          </h2>
          <p className="text-neutral-muted text-lg">
            Verifica que todo funcione correctamente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
            <div className="text-4xl mb-4">✅</div>
            <p className="text-neutral-dark font-semibold leading-relaxed">
              Ves el icono de Sin Tregua en tu pantalla de inicio
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
            <div className="text-4xl mb-4">✅</div>
            <p className="text-neutral-dark font-semibold leading-relaxed">
              Al abrir la app, se ve a pantalla completa (sin la barra del navegador)
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
            <div className="text-4xl mb-4">✅</div>
            <p className="text-neutral-dark font-semibold leading-relaxed">
              La app aparece en tu lista de aplicaciones recientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "No veo la opción de instalar en Android",
      answer: "Asegúrate de estar usando Chrome y de haber entrado en sintregua.es. Algunos navegadores alternativos no soportan esta función.",
    },
    {
      question: "En iPhone no me aparece \"Añadir a pantalla de inicio\"",
      answer: "Verifica que estés usando Safari, no Chrome. Solo Safari permite instalar apps web en iOS.",
    },
    {
      question: "Instalé la app pero no aparece el icono",
      answer: "Revisa todas las pantallas de inicio. A veces se añade en una nueva pantalla automáticamente.",
    },
    {
      question: "¿Ocupa mucho espacio en mi móvil?",
      answer: "Muy poco, solo unos pocos MB. Mucho menos que una app tradicional.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-levante-azul/10 text-levante-azul text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="font-display font-black text-3xl lg:text-4xl text-neutral-dark">
            ¿Tienes dudas?
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-neutral-cream p-8 rounded-2xl">
              <h3 className="font-display font-bold text-lg text-neutral-dark mb-3">
                {faq.question}
              </h3>
              <p className="text-neutral-muted leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Página principal
export default function InstalarAppPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TabsSection />
      <VerificationSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
