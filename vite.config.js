import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'MaterialWind',
      filename: 'material-wind'
    },
    rollupOptions: {
      external: ['tailwindcss', '@material/material-color-utilities'],
      output: {
        globals: {
          tailwindcss: 'tailwindcss',
          '@material/material-color-utilities': 'MaterialColorUtilities'
        }
      }
    },
  },
  plugins: [dts({ copyDtsFiles: true })]
})
