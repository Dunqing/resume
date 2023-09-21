import path, { isAbsolute } from 'node:path'
import process from 'node:process'
import type { InlineConfig } from 'vite'
import { build, createServer, preview } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import minimist from 'minimist'
import { entry } from './plugins/entry'

const cwd = process.cwd()

interface ArgvOptions extends minimist.ParsedArgs {
  template?: string
  config?: string
}

const { _, config, template } = minimist(process.argv.slice(2), {
  string: '-',
}) as ArgvOptions

function getViteConfig() {
  const configFile = config
    ? isAbsolute(config)
      ? config
      : path.join(cwd, config)
    : undefined

  const _config: InlineConfig = {
    logLevel: 'info',
    configFile,
    plugins: [
      react(),
      entry({
        template,
      }),
      VitePWA({ registerType: 'autoUpdate' }),
    ],
  }

  return _config
}

if (_.includes('build')) {
  build(getViteConfig())
} else if (_.includes('preview')) {
  preview(getViteConfig()).then((res) => {
    res.printUrls()
  })
} else {
  createServer(getViteConfig()).then((res) => {
    res.listen(3000).then(() => {
      res.printUrls()
    })
  })
}
