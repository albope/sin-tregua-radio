"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePWAInstall } from "@/hooks/usePWAInstall";

const SHOW_DELAY_MS = 20000; // 20 segundos

export default function PWAInstallBanner() {
  const {
    shouldShowBanner,
    canInstall,
    promptInstall,
    dismissBanner,
    isIOS,
  } = usePWAInstall();

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Timer para mostrar el banner después de 20 segundos
  useEffect(() => {
    if (!shouldShowBanner) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, [shouldShowBanner]);

  const handleInstall = async () => {
    const success = await promptInstall();
    if (success) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      dismissBanner();
    }, 300);
  };

  // No renderizar si no debe mostrarse o no es visible
  if (!shouldShowBanner || !isVisible) return null;

  return (
    <div
      className={`fixed bottom-[72px] left-0 right-0 z-[90] px-4 transition-all duration-300 ease-out ${
        isAnimatingOut
          ? "opacity-0 translate-y-4"
          : "opacity-100 translate-y-0 animate-fade-in-up"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-levante-azul-deep/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/10">
          {/* Línea dorada superior */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-levante-dorado via-levante-dorado-light to-levante-dorado" />

          <div className="p-4 pt-5">
            <div className="flex items-start gap-4">
              {/* Icono */}
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-levante-dorado"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11V7m0 0l-2 2m2-2l2 2"
                  />
                </svg>
              </div>

              {/* Contenido */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-white text-base mb-1">
                  ¡Instala Sin Tregua en tu móvil!
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Acceso directo desde tu pantalla de inicio
                </p>
              </div>

              {/* Botón cerrar */}
              <button
                onClick={handleClose}
                className="flex-shrink-0 p-2 -mr-2 -mt-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Cerrar"
              >
                <svg
                  className="w-5 h-5 text-white/50 hover:text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Botones */}
            <div className="flex gap-3 mt-4">
              {canInstall && !isIOS ? (
                <button
                  onClick={handleInstall}
                  className="flex-1 py-2.5 px-4 bg-levante-granate text-white font-display font-bold text-sm rounded-xl hover:bg-levante-granate-deep transition-colors shadow-lg hover:shadow-glow-granate"
                >
                  Instalar ahora
                </button>
              ) : (
                <Link
                  href="/instalar-app"
                  onClick={handleClose}
                  className="flex-1 py-2.5 px-4 bg-levante-granate text-white font-display font-bold text-sm rounded-xl hover:bg-levante-granate-deep transition-colors shadow-lg hover:shadow-glow-granate text-center"
                >
                  Instalar ahora
                </Link>
              )}

              <Link
                href="/instalar-app"
                onClick={handleClose}
                className="py-2.5 px-4 bg-white/10 text-white/80 font-medium text-sm rounded-xl hover:bg-white/20 transition-colors"
              >
                Ver instrucciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
