import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import { presetWind } from 'unocss'
import UnocssIcons from '@unocss/preset-icons'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'
import importCss from 'vite-plugin-import-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      entryRoot: 'src',
    }),
    react(),
    unocss({
      inspector: false,
      variants: [
        {
          name: 'print',
          match(matcher) {
            if (matcher.includes('print:'))
              return {
                matcher: matcher.slice(6),
                parent: '@media print',
              }
          },
        },
      ],
      presets: [
        UnocssIcons({
          prefix: 'r-',
        }),
        presetWind(),
      ],
    }),
    importCss()
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
