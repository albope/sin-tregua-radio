import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Levantinista Premium
        levante: {
          azul: {
            DEFAULT: "#004D98",
            deep: "#003366",
            light: "#1a6bb8",
            50: "#e6f0fa",
            100: "#cce1f5",
            200: "#99c3eb",
            300: "#66a5e0",
            400: "#3387d6",
            500: "#004D98",
            600: "#003d7a",
            700: "#002e5c",
            800: "#001f3d",
            900: "#000f1f",
          },
          granate: {
            DEFAULT: "#A50044",
            deep: "#7a0033",
            light: "#c41a5c",
            50: "#fce8ef",
            100: "#f9d1df",
            200: "#f3a3bf",
            300: "#ed759f",
            400: "#e7477f",
            500: "#A50044",
            600: "#840036",
            700: "#630029",
            800: "#42001b",
            900: "#21000e",
          },
          dorado: {
            DEFAULT: "#C5A059",
            light: "#d4b87a",
            dark: "#a68542",
            50: "#faf6ed",
            100: "#f5eddb",
            200: "#ebdbb7",
            300: "#e0c993",
            400: "#d6b76f",
            500: "#C5A059",
            600: "#9e8047",
            700: "#766035",
            800: "#4f4024",
            900: "#272012",
          },
        },
        // Tonos neutros personalizados
        neutral: {
          cream: "#FAFAF8",
          offwhite: "#F5F5F3",
          light: "#EBEBEB",
          muted: "#9CA3AF",
          dark: "#1F1F1F",
          charcoal: "#2D2D2D",
        },
      },
      fontFamily: {
        // Fuentes de alto impacto
        display: ["var(--font-barlow)", "Barlow", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        accent: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      fontSize: {
        // Escala tipográfica editorial
        "hero-xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "hero-lg": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "hero-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "headline": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "subhead": ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      backgroundImage: {
        // Texturas sutiles de "pasto/granota"
        "granota-pattern": `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004D98' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        "grass-texture": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23004D98' fill-opacity='0.02'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        // Gradientes premium
        "hero-gradient": "linear-gradient(135deg, rgba(0,77,152,0.95) 0%, rgba(165,0,68,0.9) 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
        "gold-accent": "linear-gradient(90deg, #C5A059 0%, #d4b87a 50%, #C5A059 100%)",
      },
      boxShadow: {
        "card": "0 4px 20px -4px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 12px 40px -8px rgba(0, 0, 0, 0.15)",
        "elevated": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "inner-gold": "inset 0 0 0 1px rgba(197, 160, 89, 0.3)",
        "glow-azul": "0 0 40px -10px rgba(0, 77, 152, 0.4)",
        "glow-granate": "0 0 40px -10px rgba(165, 0, 68, 0.4)",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
