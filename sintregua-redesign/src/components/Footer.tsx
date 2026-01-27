"use client";

import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, SOCIAL_LINKS, FOOTER_LINKS, IMAGES } from "@/lib/constants";

const socialLinks = [
  {
    name: "X (Twitter)",
    href: SOCIAL_LINKS.twitter,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: SOCIAL_LINKS.tiktok,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: SOCIAL_LINKS.facebook,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Patreon",
    href: SOCIAL_LINKS.patreon,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-dark relative overflow-hidden">
      {/* Textura sutil */}
      <div className="absolute inset-0 bg-granota-pattern opacity-5" />

      {/* Línea dorada superior */}
      <div className="h-1 bg-gold-accent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-2xl tracking-tight text-white group-hover:text-levante-dorado transition-colors duration-300">
                  Sin Tregua
                </span>
                <span className="font-display font-black text-2xl tracking-tight text-white/70 group-hover:text-levante-dorado-light transition-colors duration-300">
                  Radio
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-base leading-relaxed mb-6 max-w-md">
              {COMPANY_INFO.tagline}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-levante-azul/50 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links - Navegación */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.principal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-levante-dorado text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4 mt-8">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("mailto:") ? (
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-levante-dorado text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-levante-dorado text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces externos y Radio */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Escúchanos
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.externos.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-levante-dorado text-sm transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Radio */}
            <div className="mt-8">
              <a
                href={SOCIAL_LINKS.radioStream}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-levante-granate text-white text-sm font-semibold rounded-full hover:bg-levante-granate-deep transition-all duration-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                Radio en directo
              </a>
            </div>

            {/* Contacto */}
            <div className="mt-8">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-3">
                Contacto
              </h4>
              <a
                href={`mailto:${COMPANY_INFO.adminEmail}`}
                className="text-levante-dorado hover:text-levante-dorado-light text-sm transition-colors"
              >
                {COMPANY_INFO.adminEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Hecho con <span className="text-levante-azul">💙</span><span className="text-levante-granate">❤️</span> por granotas para granotas
          </p>
        </div>
      </div>

      {/* Botón volver arriba - siempre visible en el footer */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className="absolute top-8 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/20 shadow-lg flex items-center justify-center text-white/70 hover:text-white hover:border-levante-dorado hover:bg-white/10 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
