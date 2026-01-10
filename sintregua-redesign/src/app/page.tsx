import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import Image from "next/image";
import Link from "next/link";
import { IMAGES, SOCIAL_LINKS, GALLERY_IMAGES } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navbar sticky transparente */}
      <Navbar />

      {/* Hero Section con mensaje de bienvenida */}
      <HeroSection />

      {/* Sección Radio Player */}
      <RadioSection />

      {/* Sección Acerca de */}
      <AboutSection />

      {/* Sección Galería Preview */}
      <GalleryPreview />

      {/* Footer */}
      <Footer />

      {/* Floating Radio Player */}
      <RadioPlayer variant="floating" />
    </main>
  );
}

// Sección de Radio
function RadioSection() {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Decoraciones */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-levante-azul/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-levante-granate/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-levante-granate/10 text-levante-granate text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Escúchanos
          </span>
          <h2 className="font-display font-black text-headline text-neutral-dark">
            Radio en <span className="text-levante-granate">directo</span>
          </h2>
        </div>

        <RadioPlayer variant="full" />
      </div>
    </section>
  );
}

// Sección "Acerca de" como en el sitio original
function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-levante-azul/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-levante-granate/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-levante-azul/10 text-levante-azul text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Acerca de
          </span>
          <h2 className="font-display font-black text-hero-md text-neutral-dark mb-6">
            El programa con más <span className="text-levante-granate">sentimiento</span>
          </h2>
          <p className="text-neutral-muted text-lg leading-relaxed max-w-3xl mx-auto">
            Sin Tregua Radio es el programa de radiodifusión dedicado al Levante UD con más pasión y sentimiento. Cubrimos todas las noticias, análisis y actualidad del decano del fútbol valenciano.
          </p>
        </div>

        {/* Features/Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Radio en directo */}
          <a
            href={SOCIAL_LINKS.radioStream}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-gradient-to-br from-levante-azul to-levante-azul-deep rounded-2xl text-white hover:shadow-glow-azul transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl mb-3">Radio en Directo</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Escucha nuestra emisión en directo con los mejores contenidos sobre el Levante UD.
            </p>
            <span className="inline-flex items-center gap-2 text-levante-dorado font-medium text-sm">
              Escuchar ahora
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          {/* Galería */}
          <Link
            href="/galeria"
            className="group p-8 bg-neutral-offwhite rounded-2xl hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-neutral-light"
          >
            <div className="w-14 h-14 bg-levante-granate/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-levante-granate/20 transition-colors">
              <svg className="w-7 h-7 text-levante-granate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-neutral-dark mb-3">Galería Histórica</h3>
            <p className="text-neutral-muted text-sm leading-relaxed mb-4">
              Un paseo por la historia del Levante UD a través de imágenes inolvidables.
            </p>
            <span className="inline-flex items-center gap-2 text-levante-azul font-medium text-sm">
              Ver galería
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>

          {/* Patreon */}
          <a
            href={SOCIAL_LINKS.patreon}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-gradient-to-br from-levante-granate to-levante-granate-deep rounded-2xl text-white hover:shadow-glow-granate transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl mb-3">Apóyanos</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Ayúdanos a seguir creando contenido de calidad para la afición granota.
            </p>
            <span className="inline-flex items-center gap-2 text-levante-dorado font-medium text-sm">
              Ir a Patreon
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Preview de la galería
function GalleryPreview() {
  // Tomar 6 fotos aleatorias de la galería para el preview
  const previewImages = [
    GALLERY_IMAGES[1],  // Historica_2
    GALLERY_IMAGES[7],  // Historica_7
    GALLERY_IMAGES[11], // Historica_14
    GALLERY_IMAGES[19], // Historica_21
    GALLERY_IMAGES[12], // Historica_15
    GALLERY_IMAGES[17], // Historica_19
  ];

  return (
    <section className="py-20 lg:py-28 bg-neutral-cream relative overflow-hidden">
      {/* Textura de fondo sutil */}
      <div className="absolute inset-0 bg-grass-texture opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-3 py-1 bg-levante-granate/10 text-levante-granate text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Galería
            </span>
            <h2 className="font-display font-black text-headline text-neutral-dark">
              Un paseo histórico
            </h2>
            <p className="text-neutral-muted mt-2 max-w-md">
              Momentos inolvidables del Levante UD capturados para la eternidad.
            </p>
          </div>

          <Link
            href="/galeria"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-levante-azul text-white font-display font-bold rounded-full hover:bg-levante-azul-deep transition-all duration-300"
          >
            Ver galería completa
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <Link
              key={index}
              href="/galeria"
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-[4/3]" : "aspect-square"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-levante-azul-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Banner de galería */}
        <div className="mt-12">
          <Link href="/galeria" className="block">
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src={IMAGES.bannerGaleria}
                alt="Banner Galería Sin Tregua"
                width={866}
                height={250}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-levante-azul/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
