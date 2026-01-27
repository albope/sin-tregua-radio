"use client";

import { useState } from "react";
import { useRadioPlayer, AUDIO_DELAY_OPTIONS, RADIO_STREAM_URL } from "@/contexts/RadioPlayerContext";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function RadioPlayer() {
  const {
    isPlaying,
    volume,
    audioDelay,
    isLoading,
    togglePlay,
    setVolume,
    setAudioDelay,
    audioRef,
  } = useRadioPlayer();

  const [showDelayMenu, setShowDelayMenu] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <>
      {/* Player fijo en la parte inferior */}
      <section className="fixed bottom-0 left-0 right-0 z-[100] bg-neutral-dark border-t-2 border-levante-dorado shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">

            {/* Icono de Radio/Antena */}
            <div className={`relative flex items-center justify-center w-12 h-12 rounded-full shrink-0 transition-colors duration-300 ${isPlaying ? 'bg-levante-granate shadow-glow-granate' : 'bg-neutral-dark border-2 border-white/20'}`}>
              {/* Ondas animadas (solo cuando reproduce) */}
              <span className={`absolute inline-flex h-full w-full rounded-full bg-levante-granate transition-opacity duration-300 ${isPlaying ? 'animate-ping opacity-50' : 'opacity-0'}`} />

              {/* Icono de antena con ondas */}
              <svg className="relative w-6 h-6" viewBox="0 0 24 24" fill="none">
                {/* Punto central (antena) */}
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  className={`transition-colors duration-300 ${isPlaying ? 'fill-white' : 'fill-white/50'}`}
                />

                {/* Onda interior */}
                <path
                  d="M8.11 15.89a5.99 5.99 0 0 1 0-7.78M15.89 8.11a5.99 5.99 0 0 1 0 7.78"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className={`transition-all duration-300 ${isPlaying ? 'stroke-white animate-pulse' : 'stroke-white/30'}`}
                />

                {/* Onda exterior */}
                <path
                  d="M5.64 18.36a9.97 9.97 0 0 1 0-12.72M18.36 5.64a9.97 9.97 0 0 1 0 12.72"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className={`transition-all duration-300 ${isPlaying ? 'stroke-white/80 animate-pulse' : 'stroke-white/20'}`}
                  style={isPlaying ? { animationDelay: '0.15s' } : {}}
                />
              </svg>
            </div>

            {/* Botón Play/Pause */}
            <button
              onClick={togglePlay}
              disabled={isLoading}
              aria-label={isPlaying ? "Pausar radio" : "Reproducir radio"}
              className="flex items-center justify-center w-14 h-14 bg-levante-azul hover:bg-levante-azul-light rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              {isLoading ? (
                <svg className="w-6 h-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : isPlaying ? (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Info */}
            <div className="flex-1 min-w-0 hidden sm:block">
              <p className="text-white font-display font-bold text-sm truncate">Sin Tregua Radio</p>
              <p className="text-white/70 text-xs truncate">
                {isPlaying ? "Emisión en directo" : "Haz clic para escuchar"}
              </p>
            </div>

            {/* Control de Retardo */}
            <div className="relative">
              <button
                onClick={() => setShowDelayMenu(!showDelayMenu)}
                className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Configurar retardo de audio"
                title="Sincronizar con TV"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm font-medium hidden sm:inline">
                  {audioDelay === 0 ? "Sin retardo" : `${audioDelay}s`}
                </span>
              </button>

              {/* Menu desplegable de retardo */}
              {showDelayMenu && (
                <>
                  {/* Overlay para cerrar al hacer clic fuera */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowDelayMenu(false)}
                  />
                  <div className="absolute bottom-full mb-2 right-0 bg-neutral-dark border border-white/20 rounded-lg shadow-xl overflow-hidden min-w-[200px] z-50">
                    <div className="p-2 border-b border-white/10">
                      <p className="text-white text-xs font-semibold">Retardo de audio</p>
                      <p className="text-white/60 text-xs">Para sincronizar con TV</p>
                    </div>
                    {AUDIO_DELAY_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setAudioDelay(option.value);
                          setShowDelayMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
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

            {/* Control de Volumen Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setVolume(volume === 0 ? 0.8 : 0)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label={volume === 0 ? "Activar sonido" : "Silenciar"}
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  {volume === 0 ? (
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  ) : (
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  )}
                </svg>
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                aria-label="Control de volumen"
                className="w-24 h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-levante-azul"
              />
              <span className="text-white text-sm font-medium w-10 text-right">
                {Math.round(volume * 100)}%
              </span>
            </div>

            {/* Control de Volumen Móvil */}
            <div className="md:hidden relative">
              <button
                onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Controlar volumen"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  {volume === 0 ? (
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  ) : (
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                  )}
                </svg>
              </button>

              {showVolumeSlider && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowVolumeSlider(false)}
                  />
                  <div className="absolute bottom-full mb-2 right-0 bg-neutral-dark border border-white/20 rounded-lg shadow-xl p-4 z-50">
                    <p className="text-white text-xs font-semibold mb-2">Volumen</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-32 h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-levante-azul"
                      />
                      <span className="text-white text-sm font-medium w-10">
                        {Math.round(volume * 100)}%
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Link a Zeno.fm */}
            <a
              href={SOCIAL_LINKS.radioStream}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              title="Abrir en Zeno.fm"
              aria-label="Abrir radio en Zeno.fm"
            >
              <span className="absolute inset-0 rounded bg-levante-dorado/30 blur-md group-hover:bg-levante-dorado/50 transition-all duration-300" />
              <span className="relative px-2.5 py-1 text-xs font-bold bg-neutral-dark border border-levante-dorado/60 text-levante-dorado rounded group-hover:border-levante-dorado group-hover:text-white group-hover:bg-levante-dorado/20 transition-all duration-300">
                ZENO
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* Elemento de audio (oculto) */}
      <audio
        ref={audioRef}
        src={RADIO_STREAM_URL}
        preload="none"
        crossOrigin="anonymous"
      />
    </>
  );
}
