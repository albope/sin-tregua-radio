"use client";

import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  excerpt?: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
  variant?: "featured" | "standard" | "compact" | "horizontal";
  className?: string;
}

export default function NewsCard({
  title,
  excerpt,
  category,
  date,
  imageUrl,
  slug,
  variant = "standard",
  className = "",
}: NewsCardProps) {
  const baseClasses =
    "group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 ease-out-expo";

  const variants = {
    featured: "row-span-2 col-span-2",
    standard: "",
    compact: "",
    horizontal: "flex flex-row",
  };

  if (variant === "featured") {
    return (
      <Link
        href={`/noticias/${slug}`}
        className={`${baseClasses} ${variants.featured} ${className} hover:shadow-card-hover`}
      >
        {/* Imagen de fondo completa */}
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
        </div>

        {/* Contenido */}
        <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-levante-granate text-white text-xs font-bold uppercase tracking-wider rounded-full">
              {category}
            </span>
            <span className="text-white/60 text-sm">{date}</span>
          </div>

          {/* Título */}
          <h3 className="font-display font-bold text-hero-md text-white mb-3 group-hover:text-levante-dorado-light transition-colors duration-300">
            {title}
          </h3>

          {/* Extracto */}
          {excerpt && (
            <p className="text-white/70 text-base leading-relaxed max-w-xl line-clamp-2">
              {excerpt}
            </p>
          )}

          {/* CTA */}
          <div className="flex items-center gap-2 mt-6 text-levante-dorado font-medium">
            <span>Leer más</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
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
          </div>
        </div>

        {/* Borde dorado en hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-levante-dorado/0 group-hover:border-levante-dorado/30 transition-all duration-300" />
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link
        href={`/noticias/${slug}`}
        className={`${baseClasses} ${variants.horizontal} ${className} hover:shadow-card-hover border border-neutral-light`}
      >
        {/* Imagen */}
        <div className="relative w-32 sm:w-40 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Contenido */}
        <div className="flex-1 p-4 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-levante-granate text-xs font-bold uppercase tracking-wider">
              {category}
            </span>
            <span className="text-neutral-muted text-xs">•</span>
            <span className="text-neutral-muted text-xs">{date}</span>
          </div>
          <h3 className="font-display font-semibold text-sm text-neutral-dark group-hover:text-levante-azul transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/noticias/${slug}`}
        className={`${baseClasses} ${className} hover:shadow-card-hover border border-neutral-light`}
      >
        {/* Imagen */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-levante-azul/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded">
              {category}
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-4">
          <p className="text-neutral-muted text-xs mb-2">{date}</p>
          <h3 className="font-display font-semibold text-sm text-neutral-dark group-hover:text-levante-azul transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>
    );
  }

  // Standard variant
  return (
    <Link
      href={`/noticias/${slug}`}
      className={`${baseClasses} ${className} hover:shadow-card-hover border border-neutral-light`}
    >
      {/* Imagen */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-levante-granate text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
            {category}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <p className="text-neutral-muted text-sm mb-3">{date}</p>
        <h3 className="font-display font-bold text-lg text-neutral-dark group-hover:text-levante-azul transition-colors duration-300 line-clamp-2 mb-2">
          {title}
        </h3>
        {excerpt && (
          <p className="text-neutral-muted text-sm line-clamp-2">{excerpt}</p>
        )}

        {/* Read more */}
        <div className="flex items-center gap-1 mt-4 text-levante-azul text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span>Leer artículo</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Borde inferior decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-levante-azul to-levante-granate scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Link>
  );
}
