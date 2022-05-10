import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import { presetWind } from 'unocss'
import UnocssIcons from '@unocss/preset-icons'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts(),
    react(),
    unocss({
      inspector: false,
      presets: [
        UnocssIcons({
          prefix: 'r-',
        }),
        presetWind(),
      ],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'cjs' ? 'js' : 'mjs'}`,
    },
    emptyOutDir: false,
    rollupOptions: {
      external: Object.keys(packageJson.dependencies),
    },
  },
})
