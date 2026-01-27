"use client";

import { useState, useEffect } from "react";
import { useRadioPlayer, AUDIO_DELAY_OPTIONS } from "@/contexts/RadioPlayerContext";
import { SOCIAL_LINKS } from "@/lib/constants";
import AudioVisualizer from "./AudioVisualizer";

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

  // Cerrar el panel cuando se hace scroll
  useEffect(() => {
    if (!showDelayMenu) return;

    const handleScroll = () => setShowDelayMenu(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showDelayMenu]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <section id="radio-player" className="py-20 lg:py-28 bg-white relative">
      {/* Contenedor de decoración con overflow-hidden para evitar scroll horizontal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-levante-azul/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-levante-granate/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      </div>

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

            {/* Link a Zeno.fm */}
            <a
              href={SOCIAL_LINKS.radioStream}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto relative group"
              title="Abrir en Zeno.fm"
              aria-label="Abrir radio en Zeno.fm"
            >
              <span className="absolute inset-0 rounded-lg bg-levante-dorado/20 blur-md group-hover:bg-levante-dorado/40 transition-all duration-300" />
              <span className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-white/5 border border-levante-dorado/40 text-levante-dorado rounded-lg group-hover:border-levante-dorado group-hover:bg-levante-dorado/10 transition-all duration-300">
                ZENO
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          </div>

          {/* Player Controls */}
          <div className="flex items-center gap-6">
            {/* Botón Play con Visualizador */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <button
                onClick={togglePlay}
                disabled={isLoading}
                aria-label={isPlaying ? "Pausar radio" : "Reproducir radio"}
                className="w-16 h-16 bg-levante-granate hover:bg-levante-granate-deep rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105"
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

              {/* Visualizador de audio - 5 barras en móvil, 8 en desktop */}
              <AudioVisualizer barCount={5} className="flex sm:hidden" />
              <AudioVisualizer barCount={8} className="hidden sm:flex" />
            </div>

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
                  className="text-white/60 hover:text-white transition-colors shrink-0"
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

                {/* Slider de volumen con barra de progreso visual */}
                <div className="flex-1 min-w-[100px] max-w-xs relative">
                  {/* Barra de fondo */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-2 bg-white/20 rounded-full" />
                  {/* Barra de progreso */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 left-0 h-2 bg-levante-dorado rounded-full transition-all"
                    style={{ width: `${volume * 100}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    aria-label="Control de volumen"
                    className="relative w-full h-6 bg-transparent appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-levante-dorado [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-levante-dorado/50 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-levante-dorado [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-lg"
                  />
                </div>

                <span className="text-white text-sm font-medium w-10 text-right shrink-0">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            </div>

            {/* Control de Retardo - Sync Slider */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setShowDelayMenu(!showDelayMenu)}
                className="flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors border border-white/10 hover:border-levante-dorado/30"
                aria-label="Configurar retardo de audio"
                title="Sincronizar con TV"
              >
                <svg className="w-5 h-5 text-levante-dorado" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left hidden lg:block">
                  <p className="text-white text-xs font-semibold leading-tight">Sincronizar</p>
                  <p className="text-levante-dorado text-xs font-bold leading-tight">
                    {audioDelay === 0 ? "0s" : `+${audioDelay}s`}
                  </p>
                </div>
              </button>

              {/* Panel Slider de retardo */}
              {showDelayMenu && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowDelayMenu(false)}
                  />
                  <div className="absolute bottom-full mb-3 right-0 bg-gradient-to-br from-levante-azul to-levante-azul-deep border border-white/20 rounded-2xl shadow-2xl overflow-hidden min-w-[280px] lg:min-w-[320px] z-50">
                    {/* Header */}
                    <div className="p-4 border-b border-white/20 bg-white/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-levante-dorado/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-levante-dorado" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white text-sm font-bold">Retardo de audio</p>
                            <p className="text-white/50 text-xs">Sincroniza la radio con tu TV</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowDelayMenu(false)}
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Display central del valor con iconos */}
                    <div className="px-6 pt-5 pb-3">
                      <div className="flex items-center justify-center gap-4">
                        {/* Icono Radio */}
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-levante-azul/20 flex items-center justify-center mb-1">
                            <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20 6H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm-8 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                            </svg>
                          </div>
                          <span className="text-white/40 text-[10px] uppercase tracking-wider">Radio</span>
                        </div>

                        {/* Valor del retardo */}
                        <div className="bg-gradient-to-br from-levante-dorado/20 to-levante-dorado/5 rounded-2xl px-6 py-3 border border-levante-dorado/30">
                          <div className="text-center">
                            <span className="text-levante-dorado text-3xl font-display font-black">
                              {audioDelay === 0 ? "0" : `+${audioDelay}`}
                            </span>
                            <span className="text-levante-dorado/70 text-lg font-semibold ml-1">s</span>
                          </div>
                          <p className="text-white/40 text-[10px] text-center uppercase tracking-wider mt-0.5">
                            {audioDelay === 0 ? "Sin retardo" : "Retardo"}
                          </p>
                        </div>

                        {/* Icono TV */}
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-levante-granate/20 flex items-center justify-center mb-1">
                            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="text-white/40 text-[10px] uppercase tracking-wider">TV</span>
                        </div>
                      </div>
                    </div>

                    {/* Slider con marcadores */}
                    <div className="px-6 pb-6">
                      <div className="relative pt-2">
                        {/* Linea de fondo del slider */}
                        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-white/10 rounded-full -translate-y-1/2" />

                        {/* Linea de progreso */}
                        <div
                          className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-levante-dorado to-levante-dorado rounded-full -translate-y-1/2 transition-all duration-200"
                          style={{ width: `${(audioDelay / 5) * 100}%` }}
                        />

                        {/* Marcadores clicables */}
                        <div className="relative flex justify-between items-center h-8">
                          {AUDIO_DELAY_OPTIONS.map((option) => {
                            const isSelected = audioDelay === option.value;
                            const isPassed = option.value <= audioDelay;
                            const position = (option.value / 5) * 100;
                            return (
                              <button
                                key={option.value}
                                onClick={() => setAudioDelay(option.value)}
                                className="absolute group"
                                style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                                title={option.label}
                              >
                                {/* Marcador */}
                                <div className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                  isSelected
                                    ? 'bg-levante-dorado scale-150 shadow-lg shadow-levante-dorado/50'
                                    : isPassed
                                      ? 'bg-levante-dorado/60 hover:bg-levante-dorado hover:scale-125'
                                      : 'bg-white/30 hover:bg-white/50 hover:scale-125'
                                }`} />

                                {/* Tooltip en hover */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                  <span className="text-white/60 text-[10px] whitespace-nowrap">
                                    {option.value}s
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* Botones - y + con labels */}
                        <div className="flex justify-between items-center mt-4">
                          <button
                            onClick={() => {
                              const currentIndex = AUDIO_DELAY_OPTIONS.findIndex(o => o.value === audioDelay);
                              if (currentIndex > 0) {
                                setAudioDelay(AUDIO_DELAY_OPTIONS[currentIndex - 1].value);
                              }
                            }}
                            disabled={audioDelay === 0}
                            className="flex flex-col items-center gap-1 group"
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                              audioDelay === 0
                                ? 'bg-white/5 text-white/20 cursor-not-allowed'
                                : 'bg-white/10 text-white/60 hover:bg-levante-granate hover:text-white'
                            }`}>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                              </svg>
                            </div>
                            <span className="text-white/40 text-[10px]">0s</span>
                          </button>

                          <button
                            onClick={() => {
                              const currentIndex = AUDIO_DELAY_OPTIONS.findIndex(o => o.value === audioDelay);
                              if (currentIndex < AUDIO_DELAY_OPTIONS.length - 1) {
                                setAudioDelay(AUDIO_DELAY_OPTIONS[currentIndex + 1].value);
                              }
                            }}
                            disabled={audioDelay === 5}
                            className="flex flex-col items-center gap-1 group"
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                              audioDelay === 5
                                ? 'bg-white/5 text-white/20 cursor-not-allowed'
                                : 'bg-white/10 text-white/60 hover:bg-levante-dorado hover:text-neutral-dark'
                            }`}>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                              </svg>
                            </div>
                            <span className="text-white/40 text-[10px]">0,5s</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Footer con tip */}
                    <div className="px-4 py-3 bg-black/20 border-t border-white/10">
                      <p className="text-white/40 text-[10px] text-center flex items-center justify-center gap-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Ajusta el retardo si la radio va adelantada respecto a tu TV
                      </p>
                    </div>
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
