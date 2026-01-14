"use client";

import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-levante-azul-deep via-levante-azul to-levante-granate flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center shadow-2xl">
        <div className="mb-6 relative w-24 h-24 mx-auto">
          <Image
            src={IMAGES.logo}
            alt="Sin Tregua Radio"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        <h1 className="text-3xl font-display font-bold text-white mb-4">
          Sin conexión
        </h1>

        <p className="text-white/80 mb-6">
          Parece que no tienes conexión a internet. Algunas funciones pueden no estar disponibles.
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full py-3 px-6 bg-levante-azul hover:bg-levante-azul-light text-white font-semibold rounded-lg transition-colors"
          >
            Volver al inicio
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="block w-full py-3 px-6 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors"
          >
            Reintentar
          </button>
        </div>

        <p className="text-xs text-white/60 mt-6">
          Esta aplicación requiere conexión para reproducir la radio en directo
        </p>
      </div>
    </div>
  );
}
