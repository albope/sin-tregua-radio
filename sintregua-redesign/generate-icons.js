const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Tamaños de iconos necesarios para PWA
const sizes = [
  { name: 'icon-72x72.png', size: 72 },
  { name: 'icon-96x96.png', size: 96 },
  { name: 'icon-128x128.png', size: 128 },
  { name: 'icon-144x144.png', size: 144 },
  { name: 'icon-152x152.png', size: 152 },
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-384x384.png', size: 384 },
  { name: 'icon-512x512.png', size: 512 },
  { name: 'icon-192x192-maskable.png', size: 192, maskable: true },
  { name: 'icon-512x512-maskable.png', size: 512, maskable: true },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
];

const svgPath = path.join(__dirname, 'logo-pwa.svg');
const outputDir = path.join(__dirname, 'public', 'icons');

// Crear directorio si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateIcons() {
  console.log('Generando iconos PWA...\n');

  for (const icon of sizes) {
    try {
      const outputPath = icon.name === 'apple-touch-icon.png'
        ? path.join(__dirname, 'public', icon.name)
        : path.join(outputDir, icon.name);

      // Para iconos maskable, añadir padding (safe zone del 80%)
      if (icon.maskable) {
        const paddedSize = Math.round(icon.size * 1.25); // 25% más grande
        const padding = Math.round((paddedSize - icon.size) / 2);

        await sharp(svgPath)
          .resize(icon.size, icon.size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 1 } // Fondo negro
          })
          .extend({
            top: padding,
            bottom: padding,
            left: padding,
            right: padding,
            background: { r: 0, g: 0, b: 0, alpha: 1 }
          })
          .resize(icon.size, icon.size)
          .png()
          .toFile(outputPath);
      } else {
        await sharp(svgPath)
          .resize(icon.size, icon.size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 1 } // Fondo negro
          })
          .png()
          .toFile(outputPath);
      }

      console.log(`✓ Generado: ${icon.name} (${icon.size}x${icon.size}${icon.maskable ? ' - maskable' : ''})`);
    } catch (error) {
      console.error(`✗ Error generando ${icon.name}:`, error.message);
    }
  }

  // Generar favicon.ico (combinar 16x16 y 32x32)
  try {
    const favicon16 = path.join(outputDir, 'favicon-16x16.png');
    const faviconOutput = path.join(__dirname, 'public', 'favicon.ico');

    // Copiar el de 32x32 como favicon.ico (simplificado)
    fs.copyFileSync(path.join(outputDir, 'favicon-32x32.png'), faviconOutput);
    console.log('✓ Generado: favicon.ico');
  } catch (error) {
    console.error('✗ Error generando favicon.ico:', error.message);
  }

  console.log('\n¡Todos los iconos PWA han sido generados exitosamente! 🎉');
}

generateIcons().catch(console.error);
