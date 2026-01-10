"use client";

import NewsCard from "./NewsCard";

interface Article {
  id: string;
  title: string;
  excerpt?: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
}

// Datos de ejemplo
const articles: Article[] = [
  {
    id: "1",
    title: "Pepelu brilla en su regreso al Ciutat de València",
    excerpt:
      "El centrocampista valenciano demostró por qué es uno de los jugadores más cotizados de la liga con una actuación magistral.",
    category: "Crónica",
    date: "8 Ene 2026",
    imageUrl: "/images/news-1.jpg",
    slug: "pepelu-brilla-regreso-ciutat",
  },
  {
    id: "2",
    title: "Roger Martí alcanza los 100 goles como granota",
    excerpt:
      "El delantero de Riba-roja entra en la historia del club con un hito legendario.",
    category: "Plantilla",
    date: "7 Ene 2026",
    imageUrl: "/images/news-2.jpg",
    slug: "roger-marti-100-goles",
  },
  {
    id: "3",
    title: "La cantera granota, el futuro es hoy",
    category: "Cantera",
    date: "6 Ene 2026",
    imageUrl: "/images/news-3.jpg",
    slug: "cantera-granota-futuro",
  },
  {
    id: "4",
    title: "Análisis táctico: El 4-3-3 de Mehdi Nafti",
    category: "Análisis",
    date: "5 Ene 2026",
    imageUrl: "/images/news-4.jpg",
    slug: "analisis-tactico-nafti",
  },
  {
    id: "5",
    title: "El Levante femenino sigue imparable en liga",
    category: "Femenino",
    date: "5 Ene 2026",
    imageUrl: "/images/news-5.jpg",
    slug: "levante-femenino-imparable",
  },
  {
    id: "6",
    title: "Mercado invernal: Los nombres que suenan",
    category: "Fichajes",
    date: "4 Ene 2026",
    imageUrl: "/images/news-6.jpg",
    slug: "mercado-invernal-nombres",
  },
];

export default function BentoNewsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-cream relative overflow-hidden">
      {/* Textura de fondo sutil */}
      <div className="absolute inset-0 bg-grass-texture opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header de sección */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-3 py-1 bg-levante-azul/10 text-levante-azul text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Actualidad
            </span>
            <h2 className="font-display font-black text-headline text-neutral-dark">
              Últimas noticias
            </h2>
            <p className="text-neutral-muted mt-2 max-w-md">
              Todo lo que necesitas saber sobre el Levante UD, actualizado al
              minuto.
            </p>
          </div>

          <a
            href="/noticias"
            className="group inline-flex items-center gap-2 text-levante-azul font-medium hover:text-levante-azul-deep transition-colors"
          >
            Ver todas las noticias
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
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Artículo destacado - ocupa 2x2 */}
          <NewsCard
            {...articles[0]}
            variant="featured"
            className="md:col-span-2 md:row-span-2 min-h-[400px] lg:min-h-[500px]"
          />

          {/* Artículos estándar */}
          <NewsCard {...articles[1]} variant="standard" />
          <NewsCard {...articles[2]} variant="compact" />
          <NewsCard {...articles[3]} variant="compact" />
          <NewsCard {...articles[4]} variant="standard" />
        </div>

        {/* Segunda fila - layout horizontal */}
        <div className="mt-12 pt-12 border-t border-neutral-light">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h3 className="font-display font-bold text-xl text-neutral-dark flex items-center gap-3">
              <span className="w-8 h-1 bg-levante-granate rounded-full" />
              Más leídas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...articles.slice(0, 3), ...articles.slice(3, 6)].map(
              (article, index) => (
                <div key={article.id} className="flex items-start gap-4 group">
                  <span className="font-display font-black text-4xl text-levante-azul/20 group-hover:text-levante-azul/40 transition-colors min-w-[3rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 pt-1">
                    <span className="text-levante-granate text-xs font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <a
                      href={`/noticias/${article.slug}`}
                      className="block mt-1 font-display font-semibold text-neutral-dark hover:text-levante-azul transition-colors line-clamp-2"
                    >
                      {article.title}
                    </a>
                    <p className="text-neutral-muted text-sm mt-1">
                      {article.date}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Decoración - línea dorada */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-levante-dorado/30 rounded-full" />
      </div>
    </section>
  );
}
