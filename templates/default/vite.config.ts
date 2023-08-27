import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import UnocssIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives'
import dts from 'vite-plugin-dts'
import importCss from 'vite-plugin-import-css'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      entryRoot: 'src',
    }),
    react(),
    unocss({
      transformers: [transformerDirectives()],
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
      postprocess(util) {
        const { selector } = util
        const s = selector.split(' $$ ')
        if (s.length === 1) {
          s.unshift('.r-resume')
        } else {
          s[0] = s[0] += ' $$ .r-resume'
        }
        util.selector = s.join(' $$ ')
      },
      presets: [
        UnocssIcons({
          prefix: 'r-',
        }),
        presetUno({}),
      ],
    }),
    importCss(),
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
