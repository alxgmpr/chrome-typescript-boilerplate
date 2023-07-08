const { config } = require('@swc/core/spack')

module.exports = config({
  entry: {
    background: __dirname + '/src/background.ts',
    contentScript: __dirname + '/src/contentScript.ts',
    popup: __dirname + '/src/popup.tsx',
  },
  output: {
    path: __dirname + '/dist',
  },
  options: {
    minify: true,
  },
})
