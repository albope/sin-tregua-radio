"use client";

import { useEffect, useRef } from "react";
import { useRadioPlayer } from "@/contexts/RadioPlayerContext";

interface AudioVisualizerProps {
  barCount?: number;
  className?: string;
}

export default function AudioVisualizer({
  barCount = 12,
  className = "",
}: AudioVisualizerProps) {
  const { isPlaying, analyserRef } = useRadioPlayer();
  const barsRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  useEffect(() => {
    if (!isPlaying || !analyserRef.current || !barsRef.current) {
      // Resetear barras cuando no está reproduciendo
      if (barsRef.current) {
        const bars = barsRef.current.children;
        for (let i = 0; i < bars.length; i++) {
          (bars[i] as HTMLElement).style.height = "20%";
        }
      }
      return;
    }

    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;

    if (!dataArrayRef.current || dataArrayRef.current.length !== bufferLength) {
      dataArrayRef.current = new Uint8Array(bufferLength);
    }

    const updateBars = () => {
      if (!analyser || !barsRef.current || !dataArrayRef.current) return;

      analyser.getByteFrequencyData(dataArrayRef.current);

      const bars = barsRef.current.children;
      const step = Math.floor(bufferLength / barCount);

      for (let i = 0; i < bars.length; i++) {
        // Tomar muestras distribuidas del espectro
        const index = Math.min(i * step, bufferLength - 1);
        const value = dataArrayRef.current[index];
        // Convertir 0-255 a porcentaje (mínimo 20%, máximo 100%)
        const percent = 20 + (value / 255) * 80;
        (bars[i] as HTMLElement).style.height = `${percent}%`;
      }

      animationRef.current = requestAnimationFrame(updateBars);
    };

    updateBars();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, analyserRef, barCount]);

  return (
    <div
      ref={barsRef}
      className={`flex items-end justify-center gap-[2px] h-8 ${className}`}
    >
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className="w-1 bg-gradient-to-t from-levante-dorado to-levante-dorado/60 rounded-full transition-[height] duration-75"
          style={{
            height: "20%",
            animationDelay: `${i * 50}ms`,
          }}
        />
      ))}
    </div>
  );
}
