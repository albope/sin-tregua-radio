# Plan de Rediseño - Sin Tregua Radio

## Objetivo
Respetar EXACTAMENTE el contenido que han decidido mostrar los creadores de sintregua.es, pero mejorar drásticamente la estética y experiencia de usuario manteniendo la esencia.

---

## Correcciones Identificadas

### 1. Logo "Sin Tregua" no visible (CRÍTICO)
**Problema:** El logo aparece en blanco sobre fondos donde no se ve (header y hero).
**Solución:**
- En el header con scroll (fondo blanco): usar logo original con colores
- En el header sin scroll (fondo oscuro): usar logo en blanco (invertido)
- En el hero: usar logo original ya que el fondo tiene contraste suficiente

### 2. Link "Quiénes Somos" muerto
**Problema:** La página /quienes-somos no existe.
**Solución:** Crear la página con contenido apropiado basado en la información de la empresa (AYATS 2022 SLU, servicios de radiodifusión, etc.)

### 3. Galería incompleta
**Problema:** Faltan muchas fotos de la galería original.
**Solución:** Incluir TODAS las 51 imágenes históricas exactas que usa el sitio original:
- Historica_1.jpg hasta Historica_40.jpg
- Incluyendo variantes: 2b, 5b, 5c, 15b, 18-1, 20-1, 29-1, 29b, 30b, 30-rotated, 31b, 32d, 33b, 33c, 34b, 34-rotated, 35b, 35c, 36b, 36c, 37-1, 38-scaled

### 4. Fotos del hero (carrusel)
**Problema:** Las fotos del equipo en la parte principal están estáticas.
**Solución:** Crear un carrusel/slider animado con las imágenes AYATS:
- AYATS-FINAL-22-scaled.jpg (equipo en estadio)
- AYATS-FINAL-5-copia-3-scaled.jpg (equipo con auriculares)

---

## Integración Zeno.fm Radio

### Análisis realizado:
- **Stream directo encontrado:** `https://stream.zeno.fm/4t2071y0w7zuv`
- **Formato:** Stream de audio directo compatible con HTML5 Audio

### Opciones de implementación:

#### Opción A: Reproductor HTML5 nativo (RECOMENDADA)
```jsx
<audio controls autoPlay>
  <source src="https://stream.zeno.fm/4t2071y0w7zuv" type="audio/mpeg" />
</audio>
```
**Ventajas:** Control total del diseño, sin dependencias externas
**Desventajas:** Menos funcionalidades que el player de Zeno

#### Opción B: Iframe del reproductor Zeno
```html
<iframe
  src="https://zeno.fm/player/sin-tregua-fm"
  width="100%"
  height="200"
  frameborder="0"
/>
```
**Ventajas:** Funcionalidades completas de Zeno (chat, info, etc.)
**Desventajas:** Menos control visual, puede no integrarse bien estéticamente

#### Opción C: Player personalizado con stream directo (MEJOR UX)
Crear un componente React que:
- Use el stream `https://stream.zeno.fm/4t2071y0w7zuv`
- Tenga diseño totalmente personalizado acorde a la estética
- Incluya controles de play/pause, volumen
- Muestre estado "EN DIRECTO" animado
- Se mantenga visible mientras navegas (mini-player flotante)

---

## Estructura de Páginas Final

### Página Principal (/)
1. **Header/Navbar** - Logo visible, links funcionales, botón EN DIRECTO
2. **Hero** - Carrusel de fotos del equipo + mensaje de bienvenida + CTAs
3. **Reproductor de Radio** - Embebido, siempre visible
4. **Sección Acerca de** - Cards con accesos a Radio, Galería, Patreon
5. **Preview Galería** - Carrusel horizontal de fotos históricas
6. **Footer** - Datos empresa, redes sociales, legal

### Quiénes Somos (/quienes-somos)
- Historia del programa
- El equipo
- Información de contacto
- Datos de la empresa (AYATS 2022 SLU)

### Galería (/galeria)
- Título "Un paseo histórico"
- Grid masonry con las 51 fotos exactas
- Lightbox para ver ampliadas
- Filtros opcionales por época

### Privacidad (/privacidad)
- Política de privacidad completa (ya creada)

---

## Imágenes Exactas a Usar

### Hero/Principal (2 imágenes para carrusel):
1. `AYATS-FINAL-22-scaled.jpg`
2. `AYATS-FINAL-5-copia-3-scaled.jpg`

### Galería Histórica (51 imágenes):
```
Historica_1.jpg, Historica_2.jpg, Historica_2b.jpg, Historica_3.jpg,
Historica_5b.jpg, Historica_5c-scaled.jpg, Historica_6.jpg, Historica_7.jpg,
Historica_8.jpg, Historica_9.jpg, Historica_11.jpg, Historica_14.jpg,
Historica_15.jpg, Historica_15b.jpg, Historica_16.jpg, Historica_17.jpg,
Historica_18-1.jpg, Historica_19.jpg, Historica_20-1.png, Historica_21.jpg,
Historica_22.jpg, Historica_23.jpg, Historica_25.jpg, Historica_26.jpg,
Historica_27.jpg, Historica_28.jpg, Historica_29-1.jpg, Historica_29b-scaled.jpg,
Historica_30b.jpg, Historica_30-rotated.jpg, Historica_31.jpg, Historica_31b.jpg,
Historica_32.jpg, Historica_32d.jpg, Historica_33.jpg, Historica_33b.jpg,
Historica_33c.jpg, Historica_34b.jpg, Historica_34-rotated.jpg, Historica_35.jpg,
Historica_35b.jpg, Historica_35c.jpg, Historica_36.jpg, Historica_36b.jpg,
Historica_36c.jpg, Historica_37-1.jpg, Historica_38-scaled.jpg, Historica_40.jpg
```

### Otros assets:
- `ST_radio_color282f68.png` - Logo principal
- `banner-galeria.png` - Banner de galería
- Favicons en varias resoluciones

---

## Tareas de Implementación

- [ ] 1. Corregir visibilidad del logo en Navbar y Hero
- [ ] 2. Crear página /quienes-somos
- [ ] 3. Actualizar constants.ts con TODAS las 51 imágenes de galería
- [ ] 4. Crear componente de carrusel para el hero
- [ ] 5. Crear componente de reproductor de radio embebido
- [ ] 6. Actualizar página de galería con todas las fotos
- [ ] 7. Crear carrusel horizontal para preview de galería en home
- [ ] 8. Verificar todos los links de navegación
- [ ] 9. Testear responsividad

---

## Stream de Radio
**URL directa:** `https://stream.zeno.fm/4t2071y0w7zuv`
**Página Zeno:** `https://zeno.fm/radio/sin-tregua-fm/`
