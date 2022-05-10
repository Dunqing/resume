import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import { presetWind } from 'unocss'
import UnocssIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), unocss({
    presets: [
      UnocssIcons({
        prefix: 'r-',
      }),
      presetWind(),
    ],
  })],
})
