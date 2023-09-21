import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'cjs' ? 'js' : 'mjs'}`,
    },
    emptyOutDir: false,
    rollupOptions: {
      output: {
        banner: '"use client";',
      },
      external: Object.keys(packageJson.dependencies),
    },
  },
})
