/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "www.sintregua.es",
      },
    ],
  },
  // Optimizaciones de producción
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
