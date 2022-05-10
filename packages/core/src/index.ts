import path from 'path'
import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import unocssVite from 'unocss/vite'
import presetWind from '@unocss/preset-wind'
import { loadResume } from './plugins/loadResume'

const cwd = process.cwd()

createServer({
  root: path.resolve(__dirname, '../public'),
  logLevel: 'info',
  // configFile: path.join(cwd, 'vite.config.js'),
  plugins: [
    unocssVite({
      presets: [presetWind()],
    }),
    react(),
    loadResume(cwd),
  ],
}).then((res) => {
  res.listen(3001).then(() => {
    res.printUrls()
  })
})
