"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleRadioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById('radio-player')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      router.push('/#radio-player');
    }
  };

  const handleRadioClickMobile = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (pathname === "/") {
      setTimeout(() => {
        document.getElementById('radio-player')?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 300);
    } else {
      router.push('/#radio-player');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "bg-levante-azul-deep/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo texto de Sin Tregua */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className={`font-display font-black text-2xl tracking-tight transition-all duration-300 ${
                scrolled
                  ? "text-white"
                  : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              }`}>
                Sin Tregua
              </span>
              <span className={`font-display font-black text-2xl tracking-tight transition-all duration-300 ${
                scrolled
                  ? "text-white"
                  : "text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              }`}>
                Radio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  scrolled
                    ? "text-white hover:text-levante-dorado"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                {/* Underline animado */}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    scrolled ? "bg-levante-dorado" : "bg-levante-dorado"
                  }`}
                />
              </Link>
            ))}
            {/* Patreon link */}
            <a
              href={SOCIAL_LINKS.patreon}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                scrolled
                  ? "text-white hover:text-levante-dorado"
                  : "text-levante-dorado-light hover:text-levante-dorado"
              }`}
            >
              Patreon
              <span
                className={`absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 bg-levante-dorado`}
              />
            </a>
          </div>

          {/* CTA & Social */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "hover:bg-white/20 text-white"
                    : "hover:bg-white/10 text-white"
                }`}
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "hover:bg-white/20 text-white"
                    : "hover:bg-white/10 text-white"
                }`}
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "hover:bg-white/20 text-white"
                    : "hover:bg-white/10 text-white"
                }`}
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Live Badge - Radio en directo */}
            <a
              href="/#radio-player"
              onClick={handleRadioClick}
              className="flex items-center gap-2 px-4 py-2 bg-levante-granate text-white text-sm font-semibold rounded-full hover:bg-levante-granate-deep transition-all duration-300 hover:shadow-glow-granate"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
              EN DIRECTO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-white hover:bg-white/20"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out-expo ${
            mobileMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`rounded-2xl p-4 ${
              scrolled ? "bg-levante-azul-deep/90" : "bg-levante-azul-deep/95 backdrop-blur-lg"
            }`}
          >
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-menu-link"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}

            {/* Patreon en móvil */}
            <a
              href={SOCIAL_LINKS.patreon}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu-link"
            >
              ⭐ Apóyanos en Patreon
            </a>

            {/* Instalar App en móvil */}
            <Link
              href="/instalar-app"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-menu-link flex items-center justify-between bg-levante-azul/20 mt-2"
            >
              <span className="flex items-center gap-2">
                <span>📱</span>
                Instalar App
              </span>
              <span className="text-xs px-2 py-0.5 bg-levante-dorado text-neutral-dark rounded-full font-bold">
                NUEVO
              </span>
            </Link>

            {/* Social links móvil */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/20">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            <div className="mt-4">
              <a
                href="/#radio-player"
                onClick={handleRadioClickMobile}
                className="flex items-center justify-center gap-2 py-3 bg-levante-granate text-white font-semibold rounded-xl hover:bg-levante-granate-deep transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
                ESCUCHAR EN DIRECTO
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
