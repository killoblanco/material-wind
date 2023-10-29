import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'

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
  plugins: [react(), dts({ copyDtsFiles: true })]
})
