"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { GALLERY_IMAGES, IMAGES } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IMAGES_PER_PAGE = 12;

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(GALLERY_IMAGES.length / IMAGES_PER_PAGE);

  const currentImages = useMemo(() => {
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    return GALLERY_IMAGES.slice(startIndex, startIndex + IMAGES_PER_PAGE);
  }, [currentPage]);

  const openLightbox = (image: { src: string; alt: string }, index: number) => {
    const globalIndex = (currentPage - 1) * IMAGES_PER_PAGE + index;
    setSelectedImage(image);
    setSelectedIndex(globalIndex);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => {
      const newIndex = (prev + 1) % GALLERY_IMAGES.length;
      setSelectedImage(GALLERY_IMAGES[newIndex]);
      return newIndex;
    });
  }, []);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => {
      const newIndex = (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
      setSelectedImage(GALLERY_IMAGES[newIndex]);
      return newIndex;
    });
  }, []);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!selectedImage) return;

    switch (e.key) {
      case "ArrowLeft":
        prevImage();
        break;
      case "ArrowRight":
        nextImage();
        break;
      case "Escape":
        closeLightbox();
        break;
    }
  }, [selectedImage, prevImage, nextImage, closeLightbox]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className="min-h-screen bg-neutral-cream">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-levante-azul-deep via-levante-azul to-levante-granate relative overflow-hidden">
        <div className="absolute inset-0 bg-granota-pattern opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold-accent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-levante-dorado/20 text-levante-dorado text-xs font-bold uppercase tracking-wider rounded-full mb-6">
            Galería Histórica
          </span>
          <h1 className="font-display font-black text-hero-lg lg:text-hero-xl text-white mb-4">
            Un paseo histórico
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Revive los momentos más memorables de la historia del Levante UD a través de nuestra colección de {GALLERY_IMAGES.length} imágenes históricas.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="font-display font-black text-4xl text-levante-dorado">{GALLERY_IMAGES.length}</div>
              <div className="text-white/50 text-sm">Fotos</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="font-display font-black text-4xl text-levante-dorado">20+</div>
              <div className="text-white/50 text-sm">Años</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="font-display font-black text-4xl text-levante-dorado">&infin;</div>
              <div className="text-white/50 text-sm">Recuerdos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="relative -mt-10 mb-12 max-w-5xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          <Image
            src={IMAGES.bannerGaleria}
            alt="Banner Galería Sin Tregua"
            width={866}
            height={250}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Paginación superior */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <p className="text-neutral-muted text-sm">
            Mostrando {(currentPage - 1) * IMAGES_PER_PAGE + 1}-{Math.min(currentPage * IMAGES_PER_PAGE, GALLERY_IMAGES.length)} de {GALLERY_IMAGES.length} fotos
          </p>
          <div className="flex items-center gap-2">
            <span className="text-neutral-muted text-sm mr-2">Página {currentPage} de {totalPages}</span>
          </div>
        </div>
      </div>

      {/* Galería */}
      <section className="pb-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Grid masonry-like */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {currentImages.map((image, index) => (
              <div
                key={image.src}
                className="break-inside-avoid group cursor-pointer animate-fade-in"
                onClick={() => openLightbox(image, index)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl bg-neutral-light shadow-card hover:shadow-card-hover transition-shadow duration-300">
                  {/* Placeholder mientras carga */}
                  {!imageLoaded[image.src] && (
                    <div className="absolute inset-0 bg-gradient-to-br from-levante-azul/10 to-levante-granate/10 animate-pulse" />
                  )}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={450}
                    className={`w-full h-auto transition-all duration-500 group-hover:scale-105 ${
                      imageLoaded[image.src] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setImageLoaded((prev) => ({ ...prev, [image.src]: true }))}
                  />
                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-levante-azul-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-medium flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      Ver imagen
                    </span>
                  </div>
                  {/* Badge de número */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-neutral-dark/60 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    #{(currentPage - 1) * IMAGES_PER_PAGE + index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className="mt-16 flex flex-col items-center gap-6">
            {/* Botones de paginación */}
            <div className="flex items-center gap-2">
              {/* Botón anterior */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-neutral-light text-neutral-muted cursor-not-allowed"
                    : "bg-white text-neutral-dark hover:bg-levante-azul hover:text-white shadow-card hover:shadow-glow-azul"
                }`}
                aria-label="Página anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Números de página */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Mostrar primera, última, actual y adyacentes
                  const shouldShow =
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 1;

                  const showEllipsisBefore = page === currentPage - 1 && currentPage > 3;
                  const showEllipsisAfter = page === currentPage + 1 && currentPage < totalPages - 2;

                  if (!shouldShow && page !== 2 && page !== totalPages - 1) {
                    if (page === currentPage - 2 && currentPage > 3) {
                      return (
                        <span key={page} className="px-2 text-neutral-muted">
                          ...
                        </span>
                      );
                    }
                    if (page === currentPage + 2 && currentPage < totalPages - 2) {
                      return (
                        <span key={page} className="px-2 text-neutral-muted">
                          ...
                        </span>
                      );
                    }
                    return null;
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-11 h-11 rounded-xl font-display font-bold text-sm transition-all duration-300 ${
                        page === currentPage
                          ? "bg-levante-granate text-white shadow-glow-granate"
                          : "bg-white text-neutral-dark hover:bg-levante-azul hover:text-white shadow-card"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Botón siguiente */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-neutral-light text-neutral-muted cursor-not-allowed"
                    : "bg-white text-neutral-dark hover:bg-levante-azul hover:text-white shadow-card hover:shadow-glow-azul"
                }`}
                aria-label="Página siguiente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Quick jump */}
            <div className="flex items-center gap-4 text-sm">
              <button
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
                className="text-levante-azul hover:text-levante-azul-deep disabled:text-neutral-muted disabled:cursor-not-allowed transition-colors"
              >
                ← Primera
              </button>
              <span className="text-neutral-light">|</span>
              <button
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
                className="text-levante-azul hover:text-levante-azul-deep disabled:text-neutral-muted disabled:cursor-not-allowed transition-colors"
              >
                Última →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Lightbox mejorado */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-neutral-dark/98 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Controles */}
          <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10">
            <div className="text-white/70 text-sm">
              <span className="font-display font-bold text-white">{selectedIndex + 1}</span> / {GALLERY_IMAGES.length}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="p-3 rounded-full bg-levante-granate/80 hover:bg-levante-granate text-white transition-all duration-300 hover:scale-110 animate-pulse-soft shadow-glow-granate"
              aria-label="Cerrar"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Botón anterior */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-levante-azul text-white transition-all duration-300 z-10"
            aria-label="Imagen anterior"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Imagen */}
          <div
            className="relative max-w-6xl max-h-[85vh] w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1400}
              height={1000}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Botón siguiente */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-levante-azul text-white transition-all duration-300 z-10"
            aria-label="Imagen siguiente"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Descripción */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-dark to-transparent">
            <p className="text-white text-center">{selectedImage.alt}</p>
          </div>

          {/* Keyboard hints */}
          <div className="absolute bottom-6 right-6 text-white/40 text-xs flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white/10 rounded">←</kbd>
              <kbd className="px-2 py-1 bg-white/10 rounded">→</kbd>
              Navegar
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white/10 rounded">Esc</kbd>
              Cerrar
            </span>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
