const fs = require('node:fs');
const path = require('node:path');
const source = path.resolve(__dirname, '../../lifetag-app');
const target = path.resolve(__dirname, '../www');
fs.rmSync(target, { recursive: true, force: true });
fs.mkdirSync(target, { recursive: true });
for (const file of ['index.html', 'manifest.json', 'sw.js', 'icon.svg']) {
  fs.copyFileSync(path.join(source, file), path.join(target, file));
}
console.log('Copied LifeTag web app into native wrapper.');
