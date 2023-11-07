import { build } from 'esbuild'
import { performance } from 'perf_hooks'

const measureBuildTime = async (entry, outfile) => {
  const start = performance.now()
  console.log(`Building ${entry}...`)

  await build({
    entryPoints: [entry],
    bundle: true,
    outfile,
    minify: true,
  })

  const end = performance.now()
  console.log(`Built ${outfile} in ${(end - start).toFixed(2)}ms`)
}

console.log('Starting builds...')
await Promise.all([
  measureBuildTime('src/background.ts', 'dist/background.js'),
  measureBuildTime('src/contentScript.ts', 'dist/contentScript.js'),
  measureBuildTime('src/popup.tsx', 'dist/popup.js'),
])
console.log('All builds completed.')
