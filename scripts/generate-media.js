#!/usr/bin/env node
// Generate assets/js/media.manifest.js from assets/photos_vids
const fs = require('fs');
const path = require('path');

const MEDIA_DIR = path.join(__dirname, '..', 'assets', 'photos_vids');
const OUT_FILE = path.join(__dirname, '..', 'assets', 'js', 'media.manifest.js');

function isMedia(name) {
  return /\.(png|jpe?g|gif|webp|bmp|svg|mp4|webm|ogg|mov|m4v)$/i.test(name);
}

function main() {
  if (!fs.existsSync(MEDIA_DIR)) {
    console.error('Missing folder:', MEDIA_DIR);
    process.exit(1);
  }
  const files = fs.readdirSync(MEDIA_DIR)
    .filter(isMedia)
    .sort((a, b) => a.localeCompare(b));
  const rels = files.map(f => `  'assets/photos_vids/${f.replace(/'/g, "\\'")}',`);
  const content = `// Auto-generated media manifest. Do not edit by hand.\n// Regenerate via: node scripts/generate-media.js\n\nwindow.MEDIA = [\n${rels.join('\n')}\n];\n`;
  fs.writeFileSync(OUT_FILE, content, 'utf8');
  console.log('Wrote', OUT_FILE, `(${files.length} items)`);
}

main();

