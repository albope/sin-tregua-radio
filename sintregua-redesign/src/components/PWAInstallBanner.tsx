"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePWAInstall } from "@/hooks/usePWAInstall";

const SHOW_DELAY_MS = 5000; // 5 segundos

export default function PWAInstallBanner() {
  const {
    isInstalled,
    promptInstall,
    isIOS,
    isAndroid,
  } = usePWAInstall();

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || isIOS || isAndroid;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isIOS, isAndroid]);

  // Mostrar en móviles, si no está instalada y no se ha cerrado en esta sesión
  const shouldShowBanner = isMobile && !isInstalled && !dismissed;

  // Timer para mostrar el banner después de 5 segundos
  useEffect(() => {
    if (!shouldShowBanner) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, [shouldShowBanner]);

  const router = useRouter();

  // Intenta instalar, si no hay prompt disponible navega a instrucciones
  const handleInstallClick = async () => {
    const success = await promptInstall();
    if (success) {
      handleClose();
    } else {
      // No hay prompt disponible, ir a instrucciones
      handleClose();
      router.push(`/instalar-app?plataforma=${isIOS ? "ios" : "android"}#instrucciones`);
    }
  };

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      setDismissed(true); // Solo oculta en esta sesión, volverá a aparecer en la próxima visita
    }, 300);
  };

  // No renderizar si no debe mostrarse o no es visible
  if (!shouldShowBanner || !isVisible) return null;

  return (
    <div
      className={`fixed bottom-[90px] left-0 right-0 z-[90] px-4 transition-all duration-300 ease-out ${
        isAnimatingOut
          ? "opacity-0 translate-y-4"
          : "opacity-100 translate-y-0 animate-fade-in-up"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-levante-azul-deep/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-levante-dorado/30 animate-pulse-glow-gold">
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
                className="flex-shrink-0 p-2 -mr-2 -mt-1 rounded-full bg-levante-dorado/20 hover:bg-levante-dorado/40 border border-levante-dorado/50 hover:border-levante-dorado transition-all duration-200"
                aria-label="Cerrar"
              >
                <svg
                  className="w-4 h-4 text-levante-dorado"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Botones */}
            <div className="flex gap-3 mt-4">
              {/* Botón principal: intenta instalar, si no puede va a instrucciones */}
              <button
                onClick={handleInstallClick}
                className="flex-1 py-2.5 px-4 bg-levante-granate text-white font-display font-bold text-sm rounded-xl hover:bg-levante-granate-deep transition-colors shadow-lg animate-border-glow-blue"
              >
                Instalar ahora
              </button>

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
