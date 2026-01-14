# Mejoras Futuras - Sin Tregua Radio

Lista de mejoras para llevar la web al siguiente nivel. Ordenadas por categoría y priorizadas por impacto vs esfuerzo.

---

## UX/UI

### Alta Prioridad
- **Animaciones de transición entre páginas** - Usar Framer Motion para transiciones suaves al navegar entre rutas
- **Skeleton loaders para imágenes** - Mostrar placeholders animados mientras cargan las fotos de la galería
- **Indicador "Ahora sonando"** - Mostrar metadata del stream actual (si el servidor de radio lo proporciona)

### Media Prioridad
- **Modo oscuro/claro** - Toggle para cambiar entre temas, persistido en localStorage
- **Breadcrumbs en páginas internas** - Mejorar navegación mostrando ruta actual (Inicio > Galería)
- **Feedback visual mejorado** - Animaciones en botones al hacer clic, estados de hover más elaborados

---

## Rendimiento

### Alta Prioridad
- **Optimización de imágenes con blur placeholders** - Usar next/image con placeholder="blur" para mejor CLS
- **Lazy loading de componentes pesados** - Cargar RadioSection y galería de forma diferida
- **Prefetching de rutas frecuentes** - Precargar /galeria y /quienes-somos al hacer hover en nav

### Media Prioridad
- **Service Worker mejorado** - Cache de assets estáticos para carga instantánea en visitas recurrentes
- **Optimización de fuentes** - Usar font-display: swap y subset de caracteres necesarios

---

## Accesibilidad (a11y)

### Alta Prioridad
- **Skip links** - Añadir enlace "Saltar al contenido principal" para navegación por teclado
- **ARIA live regions** - Anunciar cambios de estado del reproductor a lectores de pantalla
- **Focus visible mejorado** - Estilos de focus consistentes y visibles en todos los elementos interactivos

### Media Prioridad
- **Reducir motion** - Respetar prefers-reduced-motion para usuarios sensibles
- **Contraste WCAG AAA** - Revisar y ajustar colores para máximo contraste
- **Textos alternativos descriptivos** - Mejorar alt text de imágenes históricas con contexto

---

## SEO

### Alta Prioridad
- **Structured data (JSON-LD)** - Añadir schema.org para RadioStation, Organization y BreadcrumbList
- **Meta descriptions únicas** - Cada página con descripción específica optimizada para búsqueda
- **Sitemap.xml automático** - Generar sitemap dinámico con next-sitemap

### Media Prioridad
- **Open Graph images dinámicas** - Generar imágenes OG personalizadas por página
- **Canonical URLs** - Asegurar URLs canónicas correctas en todas las páginas

---

## Audio/Streaming

### Alta Prioridad
- **Media Session API** - Integrar con controles del sistema operativo (pausar desde lock screen)
- **Reconexión automática** - Reintentar conexión si el stream se corta

### Media Prioridad
- **Visualizador de audio** - Mostrar barras de frecuencia animadas cuando reproduce
- **Historial de reproducciones** - Guardar cuándo y cuánto tiempo escuchó el usuario
- **Calidad de audio adaptativa** - Ofrecer diferentes bitrates según conexión

---

## PWA (Progressive Web App)

### Alta Prioridad
- **Push notifications** - Notificar cuando empiece un programa en vivo
- **Instalación mejorada** - Prompt personalizado para instalar como app

### Media Prioridad
- **Background sync** - Sincronizar datos offline cuando vuelva la conexión
- **App shortcuts** - Accesos directos desde el icono de la app instalada
- **Offline-first con Workbox** - Estrategias de cache avanzadas

---

## Arquitectura y Calidad

### Alta Prioridad
- **Tests unitarios** - Cubrir componentes críticos con Jest/Vitest
- **Tests E2E** - Flujos principales con Playwright (reproducir radio, navegar galería)
- **CI/CD pipeline** - GitHub Actions para lint, tests y deploy automático

### Media Prioridad
- **Monitoreo de errores** - Integrar Sentry para tracking de errores en producción
- **Bundle analyzer** - Revisar y optimizar tamaño del bundle periódicamente
- **TypeScript strict mode** - Habilitar todas las comprobaciones estrictas

---

## Analítica

### Media Prioridad
- **Eventos personalizados** - Trackear reproducciones, clicks en Patreon, navegación
- **Heatmaps** - Entender dónde hacen clic los usuarios
- **A/B testing** - Framework para probar variantes de diseño

---

## Funcionalidades Nuevas

### Ideas para el futuro
- **Sección de podcasts** - Archivo de programas anteriores
- **Chat en vivo** - Durante emisiones en directo
- **Calendario de programas** - Horarios de emisión
- **Newsletter** - Suscripción por email para novedades
- **Integración con redes sociales** - Mostrar últimos tweets/posts
- **Sección de noticias** - Feed de noticias del Levante UD

---

## Priorización Sugerida

1. **Fase 1 (Inmediato):** Media Session API, Skeleton loaders, Structured data
2. **Fase 2 (Corto plazo):** Tests básicos, Push notifications, Skip links
3. **Fase 3 (Medio plazo):** Modo oscuro, Animaciones de transición, Analytics
4. **Fase 4 (Largo plazo):** Visualizador de audio, Podcasts, Chat en vivo

---

*Documento generado el 14 de enero de 2026*
