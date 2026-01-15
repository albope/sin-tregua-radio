"use client";

import { useState, useEffect, useCallback } from "react";

// Extender la interfaz Window para incluir el evento beforeinstallprompt
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

interface UsePWAInstallReturn {
  // Estado
  canInstall: boolean;
  isInstalled: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  // Acciones
  promptInstall: () => Promise<boolean>;
  dismissBanner: () => void;
  dismissToast: () => void;
  // Preferencias
  shouldShowBanner: boolean;
  shouldShowToast: boolean;
}

const BANNER_DISMISS_KEY = "pwa-banner-dismissed";
const TOAST_DISMISS_KEY = "pwa-toast-dismissed";
const BANNER_DISMISS_DAYS = 7;
const TOAST_DISMISS_DAYS = 14;

function getDaysSinceDismissed(key: string): number {
  if (typeof window === "undefined") return Infinity;

  const dismissed = localStorage.getItem(key);
  if (!dismissed) return Infinity;

  const dismissedDate = new Date(dismissed);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - dismissedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;

  // Verificar diferentes modos de standalone
  const isStandaloneMode = window.matchMedia("(display-mode: standalone)").matches;
  const isIOSStandalone = (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

  return isStandaloneMode || isIOSStandalone;
}

function detectPlatform(): { isIOS: boolean; isAndroid: boolean } {
  if (typeof window === "undefined") {
    return { isIOS: false, isAndroid: false };
  }

  const userAgent = window.navigator.userAgent.toLowerCase();

  const isIOS = /iphone|ipad|ipod/.test(userAgent) ||
    (userAgent.includes("mac") && "ontouchend" in document);

  const isAndroid = /android/.test(userAgent);

  return { isIOS, isAndroid };
}

export function usePWAInstall(): UsePWAInstallReturn {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [platform, setPlatform] = useState({ isIOS: false, isAndroid: false });
  const [bannerDismissed, setBannerDismissed] = useState(true);
  const [toastDismissed, setToastDismissed] = useState(true);

  // Detectar plataforma y estado de instalación al montar
  useEffect(() => {
    setPlatform(detectPlatform());
    setIsInstalled(isStandalone());

    // Verificar si el banner/toast fueron descartados recientemente
    const bannerDays = getDaysSinceDismissed(BANNER_DISMISS_KEY);
    const toastDays = getDaysSinceDismissed(TOAST_DISMISS_KEY);

    setBannerDismissed(bannerDays < BANNER_DISMISS_DAYS);
    setToastDismissed(toastDays < TOAST_DISMISS_DAYS);
  }, []);

  // Escuchar el evento beforeinstallprompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      // Prevenir que Chrome muestre el mini-infobar por defecto
      e.preventDefault();
      // Guardar el evento para usarlo después
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  // Función para activar el prompt de instalación nativo
  const promptInstall = useCallback(async (): Promise<boolean> => {
    if (!deferredPrompt) return false;

    try {
      // Mostrar el prompt de instalación
      await deferredPrompt.prompt();

      // Esperar la respuesta del usuario
      const { outcome } = await deferredPrompt.userChoice;

      // Limpiar el prompt usado
      setDeferredPrompt(null);

      if (outcome === "accepted") {
        setIsInstalled(true);
        return true;
      }

      return false;
    } catch (error) {
      console.error("Error al mostrar prompt de instalación:", error);
      return false;
    }
  }, [deferredPrompt]);

  // Función para descartar el banner
  const dismissBanner = useCallback(() => {
    localStorage.setItem(BANNER_DISMISS_KEY, new Date().toISOString());
    setBannerDismissed(true);
  }, []);

  // Función para descartar el toast
  const dismissToast = useCallback(() => {
    localStorage.setItem(TOAST_DISMISS_KEY, new Date().toISOString());
    setToastDismissed(true);
  }, []);

  // Determinar si se puede instalar (tiene el prompt disponible)
  const canInstall = deferredPrompt !== null;

  // Determinar si mostrar el banner (Android/Chrome con prompt disponible)
  const shouldShowBanner = canInstall && !isInstalled && !bannerDismissed;

  // Determinar si mostrar el toast (iOS sin prompt nativo)
  const shouldShowToast = platform.isIOS && !isInstalled && !toastDismissed && !canInstall;

  return {
    canInstall,
    isInstalled,
    isIOS: platform.isIOS,
    isAndroid: platform.isAndroid,
    promptInstall,
    dismissBanner,
    dismissToast,
    shouldShowBanner,
    shouldShowToast,
  };
}
