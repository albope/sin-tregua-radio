"use client";

import { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";

export type LoadingState = 'idle' | 'connecting' | 'buffering' | 'ready' | 'error';

interface RadioPlayerContextType {
  isPlaying: boolean;
  volume: number;
  audioDelay: number;
  isLoading: boolean;
  loadingState: LoadingState;
  togglePlay: () => Promise<void>;
  setVolume: (volume: number) => void;
  setAudioDelay: (delay: number) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  analyserRef: React.RefObject<AnalyserNode | null>;
}

const RadioPlayerContext = createContext<RadioPlayerContextType | undefined>(undefined);

export const AUDIO_DELAY_OPTIONS = [
  { label: "Sin retardo", value: 0 },
  { label: "0.5 segundos", value: 0.5 },
  { label: "1 segundo", value: 1 },
  { label: "1.5 segundos", value: 1.5 },
  { label: "2 segundos", value: 2 },
  { label: "2.5 segundos", value: 2.5 },
  { label: "3 segundos", value: 3 },
  { label: "3.5 segundos", value: 3.5 },
  { label: "5 segundos", value: 5 },
];

export const RADIO_STREAM_URL = SOCIAL_LINKS.radioStreamDirect;

export function RadioPlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.8);
  const [audioDelay, setAudioDelayState] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');

  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const delayNodeRef = useRef<DelayNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  // Refs para mantener valores actuales accesibles en callbacks (evita closures desactualizados)
  const currentVolumeRef = useRef(volume);
  const currentDelayRef = useRef(audioDelay);

  // Mantener refs sincronizados con el estado
  useEffect(() => {
    currentVolumeRef.current = volume;
  }, [volume]);

  useEffect(() => {
    currentDelayRef.current = audioDelay;
  }, [audioDelay]);

  // Cargar preferencias del localStorage al montar
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedVolume = localStorage.getItem("radio-volume");
    const savedDelay = localStorage.getItem("radio-delay");

    if (savedVolume) {
      setVolumeState(parseFloat(savedVolume));
    }
    if (savedDelay) {
      setAudioDelayState(parseFloat(savedDelay));
    }
  }, []);

  // Función para inicializar AudioContext - DEBE llamarse desde interacción de usuario para iOS
  const initializeAudioContext = useCallback(() => {
    if (!audioRef.current || audioContextRef.current) return;

    try {
      // Crear AudioContext (webkitAudioContext para Safari/iOS)
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      audioContextRef.current = new AudioContextClass();

      // Crear nodos
      sourceNodeRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
      delayNodeRef.current = audioContextRef.current.createDelay(10); // Máximo 10 segundos
      gainNodeRef.current = audioContextRef.current.createGain();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 64; // 32 barras de frecuencia
      analyserRef.current.smoothingTimeConstant = 0.8;

      // Conectar: source -> delay -> analyser -> gain -> destination
      sourceNodeRef.current.connect(delayNodeRef.current);
      delayNodeRef.current.connect(analyserRef.current);
      analyserRef.current.connect(gainNodeRef.current);
      gainNodeRef.current.connect(audioContextRef.current.destination);

      // Aplicar valores guardados usando setValueAtTime para mejor compatibilidad con iOS
      gainNodeRef.current.gain.setValueAtTime(
        currentVolumeRef.current,
        audioContextRef.current.currentTime
      );
      delayNodeRef.current.delayTime.setValueAtTime(
        currentDelayRef.current,
        audioContextRef.current.currentTime
      );
    } catch (error) {
      console.error("Error inicializando Web Audio API:", error);
      // Fallback: el audio element funcionará sin Web Audio API
    }
  }, []);

  // Sincronizar volumen
  useEffect(() => {
    if (gainNodeRef.current && audioContextRef.current) {
      // Solo modificar si el AudioContext está corriendo (iOS requiere esto)
      if (audioContextRef.current.state === 'running') {
        gainNodeRef.current.gain.setValueAtTime(
          volume,
          audioContextRef.current.currentTime
        );
      }
    } else if (audioRef.current) {
      // Fallback si no hay Web Audio API
      audioRef.current.volume = volume;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("radio-volume", volume.toString());
    }
  }, [volume]);

  // Sincronizar delay
  useEffect(() => {
    if (delayNodeRef.current && audioContextRef.current) {
      // Solo modificar si el AudioContext está corriendo (iOS requiere esto)
      if (audioContextRef.current.state === 'running') {
        delayNodeRef.current.delayTime.setValueAtTime(
          audioDelay,
          audioContextRef.current.currentTime
        );
      }
      // Si está suspendido, el valor se aplicará en el próximo resume()
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("radio-delay", audioDelay.toString());
    }
  }, [audioDelay]);

  // Eventos de audio para feedback granular
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadStart = () => setLoadingState('connecting');
    const handleCanPlay = () => setLoadingState('ready');
    const handlePlaying = () => {
      setLoadingState('ready');
      setIsLoading(false);
    };
    const handleWaiting = () => setLoadingState('buffering');
    const handlePause = () => setLoadingState('idle');
    const handleError = () => {
      setLoadingState('error');
      setIsLoading(false);
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    // Inicializar AudioContext si no existe
    // CRÍTICO: Esto se ejecuta dentro del handler de click (interacción directa del usuario)
    // iOS Safari requiere que AudioContext se cree en respuesta a interacción del usuario
    if (!audioContextRef.current) {
      initializeAudioContext();
    }

    // Reanudar AudioContext si está suspendido (requerido por navegadores)
    if (audioContextRef.current && audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();

      // Re-aplicar valores después de resume para iOS
      // Esto es necesario porque iOS puede ignorar cambios mientras está suspendido
      if (delayNodeRef.current) {
        delayNodeRef.current.delayTime.setValueAtTime(
          currentDelayRef.current,
          audioContextRef.current.currentTime
        );
      }
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.setValueAtTime(
          currentVolumeRef.current,
          audioContextRef.current.currentTime
        );
      }
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error reproduciendo audio:", error);
        // No mostramos alert para mejor UX
      } finally {
        setIsLoading(false);
      }
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(Math.max(0, Math.min(1, newVolume)));
  };

  const setAudioDelay = (delay: number) => {
    setAudioDelayState(Math.max(0, Math.min(10, delay)));
  };

  return (
    <RadioPlayerContext.Provider
      value={{
        isPlaying,
        volume,
        audioDelay,
        isLoading,
        loadingState,
        togglePlay,
        setVolume,
        setAudioDelay,
        audioRef,
        analyserRef,
      }}
    >
      {children}
    </RadioPlayerContext.Provider>
  );
}

export function useRadioPlayer() {
  const context = useContext(RadioPlayerContext);
  if (!context) {
    throw new Error("useRadioPlayer debe usarse dentro de RadioPlayerProvider");
  }
  return context;
}
