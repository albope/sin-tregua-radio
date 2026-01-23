# Sin Tregua Radio

Sitio web oficial de **Sin Tregua Radio**, el programa radiofónico con más sentimiento dedicado al Levante UD, el equipo decano del fútbol valenciano.

## Sobre el proyecto

Sin Tregua nació el 11 de septiembre de 2006 de la mano del periodista valenciano Carlos Ayats. Tras dos décadas de historia, este rediseño moderniza la presencia digital del programa manteniendo su esencia y pasión por el Levante UD.

## Tecnologías

- **Framework**: [Next.js 14](https://nextjs.org/) con App Router
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Lenguaje**: TypeScript
- **PWA**: Soporte para instalación como aplicación
- **Despliegue**: Vercel

## Características

- Reproductor de radio en directo con sincronización TV
- Galería histórica con más de 50 imágenes
- Integración con Patreon para suscriptores
- Diseño responsive optimizado para móvil
- Instalable como Progressive Web App (PWA)

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

El servidor de desarrollo estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

```
src/
├── app/                 # Rutas y páginas (App Router)
│   ├── galeria/         # Galería de fotos históricas
│   ├── quienes-somos/   # Información del equipo
│   ├── privacidad/      # Política de privacidad
│   └── instalar-app/    # Guía de instalación PWA
├── components/          # Componentes reutilizables
├── contexts/            # Contextos de React (reproductor)
└── lib/                 # Utilidades y constantes
```

## Enlaces

- **Web**: [sintregua.es](http://www.sintregua.es)
- **Twitter/X**: [@SinTreguaRadio](https://x.com/SinTreguaRadio)
- **TikTok**: [@sintreguaradio](https://www.tiktok.com/@sintreguaradio)
- **Facebook**: [SinTregua.es](https://www.facebook.com/SinTregua.es)
- **Patreon**: [sintregua](https://www.patreon.com/c/sintregua)
- **Radio en directo**: [Zeno.fm](https://zeno.fm/radio/sin-tregua-fm/)

## Licencia

Proyecto privado. Todos los derechos reservados a AYATS 2022 SLU.

---

*Vive con nosotros la pasión, las aventuras y desventuras del decano del fútbol valenciano: el Levante UD.*
