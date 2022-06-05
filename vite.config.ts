/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/

const dirname = path.dirname(fileURLToPath(import.meta.url))

const resolve = (src: string) => {
  return path.resolve(dirname, src)
}

export default defineConfig({
  resolve: {
    alias: {
      '@resumejs/components': resolve('./packages/components/src/index.ts'),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
})
