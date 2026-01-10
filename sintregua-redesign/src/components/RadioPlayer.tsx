"use client";

import { useState, useRef, useEffect } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";

interface RadioPlayerProps {
  variant?: "full" | "mini" | "floating";
  className?: string;
}

export default function RadioPlayer({ variant = "full", className = "" }: RadioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error playing audio:", err);
          setIsLoading(false);
        });
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  if (variant === "mini") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <audio
          ref={audioRef}
          src={SOCIAL_LINKS.radioStreamDirect}
          preload="none"
        />
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-levante-granate text-white text-sm font-semibold rounded-full hover:bg-levante-granate-deep transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
            </>
          )}
          {isPlaying ? "Pausar" : "EN DIRECTO"}
        </button>
      </div>
    );
  }

  if (variant === "floating") {
    return (
      <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
        <audio
          ref={audioRef}
          src={SOCIAL_LINKS.radioStreamDirect}
          preload="none"
        />
        <div className="bg-neutral-dark/95 backdrop-blur-md rounded-2xl shadow-elevated p-4 flex items-center gap-4 border border-white/10">
          {/* Indicador en vivo */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className={`absolute inline-flex h-full w-full rounded-full ${isPlaying ? "bg-levante-granate animate-ping" : "bg-neutral-muted"} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isPlaying ? "bg-levante-granate" : "bg-neutral-muted"}`} />
            </span>
            <span className="text-white text-xs font-medium uppercase tracking-wider">
              {isPlaying ? "En directo" : "Radio"}
            </span>
          </div>

          {/* Control de reproducción */}
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="w-12 h-12 rounded-full bg-levante-granate hover:bg-levante-granate-deep flex items-center justify-center text-white transition-all duration-300 hover:shadow-glow-granate disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Control de volumen */}
          <div className="relative">
            <button
              onClick={() => setShowVolumeSlider(!showVolumeSlider)}
              className="p-2 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                {volume === 0 ? (
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                ) : volume < 0.5 ? (
                  <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
                ) : (
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                )}
              </svg>
            </button>
            {showVolumeSlider && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-neutral-dark rounded-lg p-3 shadow-elevated">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-24 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-levante-dorado [&::-webkit-slider-thumb]:rounded-full"
                />
              </div>
            )}
          </div>

          {/* Link externo */}
          <a
            href={SOCIAL_LINKS.radioStream}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white/60 hover:text-levante-dorado transition-colors"
            title="Abrir en Zeno.fm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  // Variant: full
  return (
    <div className={`bg-gradient-to-br from-levante-azul to-levante-azul-deep rounded-2xl p-6 lg:p-8 ${className}`}>
      <audio
        ref={audioRef}
        src={SOCIAL_LINKS.radioStreamDirect}
        preload="none"
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className={`absolute inline-flex h-full w-full rounded-full ${isPlaying ? "bg-levante-granate animate-ping" : "bg-white/30"} opacity-75`} />
            <span className={`relative inline-flex rounded-full h-3 w-3 ${isPlaying ? "bg-levante-granate" : "bg-white/30"}`} />
          </span>
          <span className="text-white font-display font-bold text-sm uppercase tracking-wider">
            {isPlaying ? "En directo" : "Radio Sin Tregua"}
          </span>
        </div>
        <a
          href={SOCIAL_LINKS.radioStream}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-levante-dorado transition-colors text-xs flex items-center gap-1"
        >
          Abrir en Zeno.fm
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Player */}
      <div className="flex items-center gap-6">
        {/* Play button */}
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="w-16 h-16 rounded-full bg-levante-granate hover:bg-levante-granate-deep flex items-center justify-center text-white transition-all duration-300 hover:shadow-glow-granate hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Info y volumen */}
        <div className="flex-1">
          <h3 className="text-white font-display font-bold text-lg mb-1">Sin Tregua FM</h3>
          <p className="text-white/60 text-sm mb-3">
            {isPlaying ? "Reproduciendo en directo..." : "Haz clic para escuchar"}
          </p>

          {/* Barra de volumen */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleVolumeChange(volume === 0 ? 0.8 : 0)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
              step="0.1"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-levante-dorado [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform"
            />
            <span className="text-white/40 text-xs w-8">{Math.round(volume * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Visualizer simulado */}
      {isPlaying && (
        <div className="mt-6 flex items-end justify-center gap-1 h-8">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-levante-dorado/60 rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 100}%`,
                animationDelay: `${i * 50}ms`,
                animationDuration: `${300 + Math.random() * 200}ms`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
