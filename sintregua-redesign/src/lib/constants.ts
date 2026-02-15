// Información de la empresa real de Sin Tregua
export const COMPANY_INFO = {
  name: "Sin Tregua Radio",
  legalName: "AYATS 2022 SLU",
  cif: "B10995702",
  trademark: "SIN TREGUA - M2997836",
  activity: "Servicios de radiodifusión",
  address: "C/Pintor Genaro Lahuerta 47, puerta B27, 46010 Valencia",
  email: "carlosayats@sintregua.es",
  adminEmail: "admin@sintregua.es",
  tagline: "Vive con nosotros la pasión, las aventuras y desventuras del decano del fútbol valenciano: el Levante UD.",
};

// Texto de Quiénes Somos (exacto del sitio)
export const ABOUT_TEXT = {
  title: "Bienvenido a la página web del programa con más sentimiento de la radiodifusión mundial",
  history: `Nacido el 11 de septiembre de 2006 de la mano del periodista valenciano Carlos Ayats, SIN TREGUA lleva dos décadas disfrutando, sufriendo y soñando siempre al lado del decano del fútbol valenciano: el Levante UD.

Inicialmente, el programa se emite en Radio Esport, pero en 2008, Ayats decide separar su camino de la emisora, patenta el programa e inicia un periplo que llevará a SIN TREGUA por diversas cadenas valencianas, destacando especialmente dos inolvidables etapas en La 97.7 (2009-2013 y 2018-2020).

Con la desaparición de La 97.7, SIN TREGUA da el paso a las nuevas plataformas y pasa a ofrecer su programa diario, en formato podcast, a través de Patreon, creando además una emisora online gratuita para la retransmisión en abierto de los partidos del Levante UD.

Durante todos estos años, han sido muchas las personas que han formado parte de SIN TREGUA. A todas ellas, mil gracias por ser parte de la familia, en especial, a nuestros queridos e inolvidables Jorge Almela, Pedro Valero, Sara Calvo y Luis Barrachina, partes fundamentales de la historia de este programa.`,
};

// Miembros del equipo con descripciones completas
export const TEAM_MEMBERS = [
  {
    name: "Carlos Ayats Pérez",
    birthInfo: "València, 1979",
    role: "Creador y Director",
    description: "Creador y alma mater de un proyecto nacido con un único objetivo: darle al Levante UD el trato mediático que merece, con rigor, profesionalidad y pasión. Innovador y multitarea, cubre mediáticamente al decano valenciano desde 1999, y combina su proselitismo granota con su trabajo en la Universitat Politècnica de València desde 2006.",
    photo: "/images/galeria/Historica_50.jpg",
  },
  {
    name: "Jorge Benavent Arnau",
    birthInfo: "València, 1979",
    role: "Humor y creatividad",
    description: "La magia de SIN TREGUA. Desde el primer día, sus imitaciones, su ingenio, su humor y su ironía son sello de un programa cuya historia no se entiende sin 'El Maestro'. Técnico de sonido, monologuista y experto en telecomunicaciones, sus legendarios hits musicales fueron tendencia en el autobús del primer equipo en la era preconcursal.",
    photo: "/images/galeria/Historica_45.jpg",
  },
  {
    name: "Jose Manuel Lacueva García",
    birthInfo: "València, 1981",
    role: "Análisis táctico",
    description: "El mejor comentarista de España. Pero de largo. Y lo tenemos nosotros. Didáctico, apasionado y riguroso, 'El Profe' es el punto zen de SIN TREGUA. Pasó de sentar cátedra en la escuela del Levante UD a hacerlo en nuestro programa en honor a su abuelo, uno de esos míticos granotas que sufría para informarse del equipo de su corazón y que hoy, sin duda, sacaría pecho orgulloso de su nieto.",
    photo: "/images/galeria/Historica_49.jpg",
  },
  {
    name: "Álvaro Haro Ballesteros",
    birthInfo: "València, 2000",
    role: "Periodismo",
    description: "Presente y futuro del periodismo granota. De música, ni idea, pero en lo suyo, lidera con brillantez a una nueva generación de periodistas clave para el futuro. Talento, trabajo, personalidad y simpatía se combinan en él con maestría para darle a SIN TREGUA un vital toque de aire fresco sin perder su esencia. El Bad Bunny del siglo XXI mediático.",
    photo: "/images/galeria/Historica_47.jpg",
  },
  {
    name: "Carlos Francés Mora",
    birthInfo: "València, 2002",
    role: "Contenido digital",
    description: "Actor, tenista, portero de élite juvenil y hoy, tiktóker de éxito, 'Kylian' es una eterna caja de sorpresas. Sin fin. Honesto, empático, profesional y enormemente versátil, es la solución a cualquier problema. Si la clase y la elegancia se midieran en centímetros, jugaría en la NBA. Su animal favorito, por lo que sea, es el jabalí.",
    photo: "/images/galeria/Historica_48.jpg",
  },
];

// URLs base
export const BASE_URL = "http://www.sintregua.es";
export const UPLOADS_URL = `${BASE_URL}/wp-content/uploads`;

// Redes sociales y enlaces externos reales
export const SOCIAL_LINKS = {
  twitter: "https://x.com/SinTreguaRadio",
  tiktok: "https://www.tiktok.com/@sintreguaradio",
  facebook: "https://www.facebook.com/SinTregua.es",
  patreon: "https://www.patreon.com/c/sintregua",
  radioStream: "https://zeno.fm/radio/sin-tregua-fm/",
  radioStreamDirect: "https://stream.zeno.fm/4t2071y0w7zuv", // Stream directo para embed
};

// Configuración de Patreon
export const PATREON_CONFIG = {
  publicUrl: "https://www.patreon.com/c/sintregua/about",
  cacheTTL: 10 * 60 * 1000, // 10 minutos
  fetchTimeout: 10000, // 10 segundos
};

// Imágenes del sitio real
export const IMAGES = {
  logo: `${UPLOADS_URL}/2025/09/ST_radio_color282f68.png`,
  favicon32: `${UPLOADS_URL}/2025/09/cropped-ico-ST-radioRecurso-4-32x32.png`,
  favicon192: `${UPLOADS_URL}/2025/09/cropped-ico-ST-radioRecurso-4-192x192.png`,
  favicon180: `${UPLOADS_URL}/2025/09/cropped-ico-ST-radioRecurso-4-180x180.png`,
  // Imágenes hero servidas localmente para evitar bloqueo anti-hotlinking
  heroMain: `/images/team/AYATS-FINAL-3-copia-1-768x512.jpg`,
  heroAlt: `/images/team/AYATS-FINAL-5-copia-2-768x512.jpg`,
};

// Fotos del equipo para el carrusel del hero (servidas localmente)
export const TEAM_CAROUSEL_IMAGES = [
  `/images/team/AYATS-FINAL-3-copia-1-768x512.jpg`,
  `/images/team/AYATS-FINAL-5-copia-2-768x512.jpg`,
];

// Galería histórica completa - Servidas localmente desde public/images/galeria/
export const GALLERY_IMAGES = [
  { src: `/images/galeria/Historica_1.jpg`, alt: "Foto histórica 1" },
  { src: `/images/galeria/Historica_2.jpg`, alt: "Foto histórica 2" },
  { src: `/images/galeria/Historica_2b.jpg`, alt: "Foto histórica 2b" },
  { src: `/images/galeria/Historica_3.jpg`, alt: "Foto histórica 3" },
  { src: `/images/galeria/Historica_5b.jpg`, alt: "Foto histórica 5b" },
  { src: `/images/galeria/Historica_5c.jpg`, alt: "Foto histórica 5c" },
  { src: `/images/galeria/Historica_6.jpg`, alt: "Foto histórica 6" },
  { src: `/images/galeria/Historica_7.jpg`, alt: "Foto histórica 7" },
  { src: `/images/galeria/Historica_8.jpg`, alt: "Foto histórica 8" },
  { src: `/images/galeria/Historica_9.jpg`, alt: "Foto histórica 9" },
  { src: `/images/galeria/Historica_11.jpg`, alt: "Foto histórica 11" },
  { src: `/images/galeria/Historica_15.jpg`, alt: "Foto histórica 15" },
  { src: `/images/galeria/Historica_15b.jpg`, alt: "Foto histórica 15b" },
  { src: `/images/galeria/Historica_16.jpg`, alt: "Foto histórica 16" },
  { src: `/images/galeria/Historica_17.jpg`, alt: "Foto histórica 17" },
  { src: `/images/galeria/Historica_18.jpg`, alt: "Foto histórica 18" },
  { src: `/images/galeria/Historica_19.jpg`, alt: "Foto histórica 19" },
  { src: `/images/galeria/Historica_20.png`, alt: "Foto histórica 20" },
  { src: `/images/galeria/Historica_21.jpg`, alt: "Foto histórica 21" },
  { src: `/images/galeria/Historica_22.jpg`, alt: "Foto histórica 22" },
  { src: `/images/galeria/Historica_23.jpg`, alt: "Foto histórica 23" },
  { src: `/images/galeria/Historica_25.jpg`, alt: "Foto histórica 25" },
  { src: `/images/galeria/Historica_26.jpg`, alt: "Foto histórica 26" },
  { src: `/images/galeria/Historica_27.jpg`, alt: "Foto histórica 27" },
  { src: `/images/galeria/Historica_28.jpg`, alt: "Foto histórica 28" },
  { src: `/images/galeria/Historica_29.jpg`, alt: "Foto histórica 29" },
  { src: `/images/galeria/Historica_29b-300x225.jpg`, alt: "Foto histórica 29b" },
  { src: `/images/galeria/Historica_30.jpg`, alt: "Foto histórica 30" },
  { src: `/images/galeria/Historica_30-300x225.jpg`, alt: "Foto histórica 30 alt" },
  { src: `/images/galeria/Historica_31-768x960.jpg`, alt: "Foto histórica 31" },
  { src: `/images/galeria/Historica_31b-300x225.jpg`, alt: "Foto histórica 31b" },
  { src: `/images/galeria/Historica_32-300x225.jpg`, alt: "Foto histórica 32" },
  { src: `/images/galeria/Historica_32d-300x225.jpg`, alt: "Foto histórica 32d" },
  { src: `/images/galeria/Historica_33-300x225.jpg`, alt: "Foto histórica 33" },
  { src: `/images/galeria/Historica_33b-300x225.jpg`, alt: "Foto histórica 33b" },
  { src: `/images/galeria/Historica_33c-300x300.jpg`, alt: "Foto histórica 33c" },
  { src: `/images/galeria/Historica_34-300x225.jpg`, alt: "Foto histórica 34" },
  { src: `/images/galeria/Historica_34b-300x225.jpg`, alt: "Foto histórica 34b" },
  { src: `/images/galeria/Historica_35-768x1024.jpg`, alt: "Foto histórica 35" },
  { src: `/images/galeria/Historica_35b-300x225.jpg`, alt: "Foto histórica 35b" },
  { src: `/images/galeria/Historica_35c-300x225.jpg`, alt: "Foto histórica 35c" },
  { src: `/images/galeria/Historica_36-300x200.jpg`, alt: "Foto histórica 36" },
  { src: `/images/galeria/Historica_36b-300x300.jpg`, alt: "Foto histórica 36b" },
  { src: `/images/galeria/Historica_36c-300x300.jpg`, alt: "Foto histórica 36c" },
  { src: `/images/galeria/Historica_37-1-300x225.jpg`, alt: "Foto histórica 37" },
  { src: `/images/galeria/Historica_38-300x225.jpg`, alt: "Foto histórica 38" },
  { src: `/images/galeria/Historica_40-768x867.jpg`, alt: "Foto histórica 40" },
  { src: `/images/galeria/Historica_41.jpg`, alt: "Foto histórica 41" },
  { src: `/images/galeria/Historica_42.jpg`, alt: "Foto histórica 42" },
  { src: `/images/galeria/Historica_43.jpg`, alt: "Foto histórica 43" },
  { src: `/images/galeria/Historica_45.jpg`, alt: "Foto histórica 45" },
  { src: `/images/galeria/Historica_46.jpg`, alt: "Foto histórica 46" },
  { src: `/images/galeria/Historica_47.jpg`, alt: "Foto histórica 47" },
  { src: `/images/galeria/Historica_48.jpg`, alt: "Foto histórica 48" },
  { src: `/images/galeria/Historica_49.jpg`, alt: "Foto histórica 49" },
  { src: `/images/galeria/Historica_50.jpg`, alt: "Foto histórica 50" },
];

// Navegación del sitio
export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/galeria", label: "Galería" },
  { href: "/privacidad", label: "Privacidad" },
];

// Enlaces del footer
export const FOOTER_LINKS = {
  principal: [
    { label: "Inicio", href: "/" },
    { label: "Quiénes Somos", href: "/quienes-somos" },
    { label: "Galería de fotos", href: "/galeria" },
    { label: "📱 Instalar App", href: "/instalar-app" },
  ],
  legal: [
    { label: "Política de privacidad", href: "/privacidad" },
    { label: "Contacto", href: `mailto:${COMPANY_INFO.adminEmail}` },
  ],
  externos: [
    { label: "Escuchar en directo", href: SOCIAL_LINKS.radioStream, external: true },
    { label: "Apóyanos en Patreon", href: SOCIAL_LINKS.patreon, external: true },
  ],
};
