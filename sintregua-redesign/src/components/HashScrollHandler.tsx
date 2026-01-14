"use client";

import { useEffect } from "react";

export default function HashScrollHandler() {
  useEffect(() => {
    if (window.location.hash === '#radio-player') {
      // Pequeño delay para asegurar que el DOM está completamente cargado
      setTimeout(() => {
        document.getElementById('radio-player')?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  }, []);

  return null;
}
