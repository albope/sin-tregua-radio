"use client";

import { useState } from "react";
import { useRadioPlayer, AUDIO_DELAY_OPTIONS } from "@/contexts/RadioPlayerContext";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function RadioSection() {
  const {
    isPlaying,
    volume,
    audioDelay,
    isLoading,
    togglePlay,
    setVolume,
    setAudioDelay,
  } = useRadioPlayer();

  const [showDelayMenu, setShowDelayMenu] = useState(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <section id="radio-player" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-levante-azul/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-levante-granate/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2 bg-pink-100 text-pink-600 text-xs font-bold uppercase tracking-wider rounded-full">
            Escúchanos
          </span>
        </div>

        {/* Título */}
        <h2 className="font-display font-black text-4xl lg:text-5xl text-center mb-12">
          Radio en <span className="text-levante-granate">directo</span>
        </h2>

        {/* Player Card */}
        <div className="bg-gradient-to-br from-levante-azul to-levante-azul-deep rounded-3xl p-8 lg:p-10 shadow-glow-azul">
          <div className="flex items-center gap-4 mb-6">
            {/* Indicador de emisión */}
            <div className="relative flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className={`absolute inline-flex h-full w-full rounded-full bg-levante-granate ${isPlaying ? 'animate-ping' : 'opacity-0'}`} />
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isPlaying ? 'bg-levante-granate' : 'bg-white/40'}`} />
              </span>
              <span className={`text-white font-bold text-sm uppercase tracking-wider transition-opacity duration-300 ${isPlaying ? 'animate-pulse' : ''}`}>
                Radio Sin Tregua
              </span>
            </div>

            {/* Link externo */}
            <a
              href={SOCIAL_LINKS.radioStream}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto p-2 text-white/60 hover:text-white transition-colors"
              title="Abrir en Zeno.fm"
              aria-label="Abrir radio en Zeno.fm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Player Controls */}
          <div className="flex items-center gap-6">
            {/* Botón Play */}
            <button
              onClick={togglePlay}
              disabled={isLoading}
              aria-label={isPlaying ? "Pausar radio" : "Reproducir radio"}
              className="flex-shrink-0 w-16 h-16 bg-levante-granate hover:bg-levante-granate-deep rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105"
            >
              {isLoading ? (
                <svg className="w-8 h-8 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : isPlaying ? (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Info y Controles */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-display font-bold text-lg mb-1">Sin Tregua FM</h3>
              <p className="text-white/70 text-sm mb-4">
                {isPlaying ? "Emisión en directo" : "Haz clic para escuchar"}
              </p>

              {/* Control de volumen */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setVolume(volume === 0 ? 0.8 : 0)}
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label={volume === 0 ? "Activar sonido" : "Silenciar"}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {volume === 0 ? (
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    ) : (
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    )}
                  </svg>
                </button>

                {/* Slider de volumen */}
                <div className="flex-1 max-w-xs">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    aria-label="Control de volumen"
                    className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-levante-dorado [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-levante-dorado [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  />
                </div>

                <span className="text-white text-sm font-medium w-12 text-right">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            </div>

            {/* Control de Retardo */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setShowDelayMenu(!showDelayMenu)}
                className="flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                aria-label="Configurar retardo de audio"
                title="Sincronizar con TV"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left hidden lg:block">
                  <p className="text-white text-xs font-semibold leading-tight">Retardo</p>
                  <p className="text-white/70 text-xs leading-tight">
                    {audioDelay === 0 ? "Sin retardo" : `${audioDelay}s`}
                  </p>
                </div>
              </button>

              {/* Menu desplegable de retardo */}
              {showDelayMenu && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowDelayMenu(false)}
                  />
                  <div className="absolute bottom-full mb-2 right-0 bg-neutral-dark border border-white/20 rounded-lg shadow-xl overflow-hidden min-w-[220px] z-50">
                    <div className="p-3 border-b border-white/10">
                      <p className="text-white text-sm font-semibold">Retardo de audio</p>
                      <p className="text-white/60 text-xs">Sincronizar con TV</p>
                    </div>
                    {AUDIO_DELAY_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setAudioDelay(option.value);
                          setShowDelayMenu(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                          audioDelay === option.value
                            ? "bg-levante-azul text-white font-semibold"
                            : "text-white/80 hover:bg-white/10"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
