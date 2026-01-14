const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    // Fuentes de Google
    {
      urlPattern: /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-webfonts',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 año
        },
      },
    },
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'google-fonts-stylesheets',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 1 semana
        },
      },
    },

    // Imágenes estáticas locales
    {
      urlPattern: /\.(?:jpg|jpeg|webp|png|svg|gif|ico)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-images',
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
        },
      },
    },

    // Imágenes remotas de sintregua.es
    {
      urlPattern: /^https?:\/\/www\.sintregua\.es\/wp-content\/uploads\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'remote-images',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 días
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },

    // Scripts y estilos
    {
      urlPattern: /\.(?:js|css)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-resources',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60, // 1 día
        },
      },
    },

    // API de Patreon
    {
      urlPattern: /\/api\/patreon-stats/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-patreon',
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 5,
          maxAgeSeconds: 10 * 60, // 10 minutos
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },

    // CRÍTICO: Excluir stream de audio del cache
    {
      urlPattern: /stream\.zeno\.fm/i,
      handler: 'NetworkOnly',
    },

    // Páginas HTML
    {
      urlPattern: /^https?:\/\/(?:www\.)?sintregua\.es\/.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'pages',
        networkTimeoutSeconds: 3,
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // 1 día
        },
      },
    },
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sintregua.es",
      },
      {
        protocol: "http",
        hostname: "www.sintregua.es",
      },
      {
        protocol: "https",
        hostname: "sintregua.es",
      },
      {
        protocol: "http",
        hostname: "sintregua.es",
      },
      {
        protocol: "https",
        hostname: "stream.zeno.fm",
      },
    ],
  },

  poweredByHeader: false,
  reactStrictMode: true,

  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()'
          },
        ],
      },
      {
        source: '/service-worker.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
});

module.exports = nextConfig;
