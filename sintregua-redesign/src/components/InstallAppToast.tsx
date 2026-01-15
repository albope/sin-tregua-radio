"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePWAInstall } from "@/hooks/usePWAInstall";

const SHOW_DELAY_MS = 60000; // 60 segundos
const AUTO_DISMISS_MS = 10000; // 10 segundos

export default function InstallAppToast() {
  const { shouldShowToast, dismissToast } = usePWAInstall();

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [progress, setProgress] = useState(100);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoDismissRef = useRef<NodeJS.Timeout | null>(null);

  const handleClose = useCallback(() => {
    // Limpiar timers
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    if (autoDismissRef.current) {
      clearTimeout(autoDismissRef.current);
    }

    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      dismissToast();
    }, 300);
  }, [dismissToast]);

  const handleLinkClick = () => {
    handleClose();
  };

  // Timer para mostrar el toast después de 60 segundos
  useEffect(() => {
    if (!shouldShowToast) return;

    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, SHOW_DELAY_MS);

    return () => clearTimeout(showTimer);
  }, [shouldShowToast]);

  // Progress bar y auto-dismiss
  useEffect(() => {
    if (!isVisible || isAnimatingOut) return;

    // Iniciar la barra de progreso
    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / AUTO_DISMISS_MS) * 100);
      setProgress(remaining);
    }, 50);

    // Auto-dismiss después de 10 segundos
    autoDismissRef.current = setTimeout(() => {
      handleClose();
    }, AUTO_DISMISS_MS);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (autoDismissRef.current) {
        clearTimeout(autoDismissRef.current);
      }
    };
  }, [isVisible, isAnimatingOut, handleClose]);

  // No renderizar si no debe mostrarse o no es visible
  if (!shouldShowToast || !isVisible) return null;

  return (
    <div
      className={`fixed bottom-[80px] right-4 left-4 sm:left-auto sm:max-w-sm z-[90] transition-all duration-300 ease-out ${
        isAnimatingOut
          ? "opacity-0 translate-y-2 scale-95"
          : "opacity-100 translate-y-0 scale-100 animate-fade-in-up"
      }`}
    >
      <div className="bg-neutral-dark/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 overflow-hidden">
        <div className="p-4">
          <div className="flex items-start gap-3">
            {/* Icono */}
            <div className="flex-shrink-0 w-10 h-10 bg-levante-azul/20 rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-levante-dorado"
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
              </svg>
            </div>

            {/* Contenido */}
            <div className="flex-1 min-w-0">
              <h4 className="font-display font-bold text-white text-sm mb-0.5">
                ¡Instala Sin Tregua!
              </h4>
              <p className="text-white/60 text-xs leading-relaxed">
                Accede más rápido desde tu pantalla de inicio
              </p>
            </div>

            {/* Botón cerrar */}
            <button
              onClick={handleClose}
              className="flex-shrink-0 p-1.5 -mr-1 -mt-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Cerrar"
            >
              <svg
                className="w-4 h-4 text-white/40 hover:text-white/70"
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
          <div className="flex gap-2 mt-3">
            <Link
              href="/instalar-app"
              onClick={handleLinkClick}
              className="flex-1 py-2 bg-levante-granate text-white font-bold text-xs rounded-xl hover:bg-levante-granate-deep transition-colors text-center"
            >
              Ver cómo
            </Link>
            <button
              onClick={handleClose}
              className="px-3 py-2 bg-white/10 text-white/70 text-xs font-medium rounded-xl hover:bg-white/20 transition-colors"
            >
              Ahora no
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-white/5">
          <div
            className="h-full bg-levante-dorado transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
