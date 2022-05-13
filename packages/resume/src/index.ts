import path, { isAbsolute } from 'path'
import type { InlineConfig } from 'vite'
import { build, createServer, preview } from 'vite'
import react from '@vitejs/plugin-react'
import minimist from 'minimist'
import { loadResume } from './plugins/loadResume'
import { entry } from './plugins/entry'

const cwd = process.cwd()

interface ArgvOptions extends minimist.ParsedArgs {
  template?: string
  config?: string
}

const { _, config } = minimist(process.argv.slice(2), {
  string: '-',
}) as ArgvOptions

const getViteConfig = () => {
  const configFile = config
    ? isAbsolute(config)
      ? config
      : path.join(cwd, config)
    : undefined

  const _config: InlineConfig = {
    logLevel: 'info',
    configFile,
    plugins: [react(), entry(), loadResume()],
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
