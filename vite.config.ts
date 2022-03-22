import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync} from 'fs'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), unocss()],
  define: {
    DENGQING_RESUME: JSON.stringify(readFileSync( './README.md', 'utf-8').toString()),
  },
})
