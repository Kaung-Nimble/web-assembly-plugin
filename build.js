// build.js
const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Directory containing your JavaScript files
const sourceDir = './src';

// Get all .js files in the source directory, excluding wasm_utils.js
const entryPoints = fs.readdirSync(sourceDir)
  .filter(file => file.endsWith('.js') && file !== 'wasmUtils.js')
  .map(file => path.join(sourceDir, file));

// Ensure the dist directory exists
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

// Bundle each entry point
entryPoints.forEach(entry => {
  const outputFile = path.join('dist', path.basename(entry));

  esbuild.buildSync({
    entryPoints: [entry],
    bundle: true,
    outfile: outputFile,
    format: 'cjs',
    platform: 'node',
    target: 'es2020',
  });

  console.log(`Bundled ${entry} to ${outputFile}`);
});

console.log('Build complete!');