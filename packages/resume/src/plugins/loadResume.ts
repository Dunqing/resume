import path from 'node:path'
import type { Plugin, ResolvedConfig } from 'vite'

export function loadResume(): Plugin {
  const virtualModuleId = 'virtual:resume'
  let config: ResolvedConfig
  return {
    name: 'load-resume',
    configResolved(_config) {
      config = _config
    },
    async resolveId(id) {
      if (id === virtualModuleId) {
        return `\0${id}`
      }
    },
    load(id) {
      if (id === `\0${virtualModuleId}`) {
        const resumePath = path.resolve(config.root, 'README.md')
        return `
          export { default as default } from ${JSON.stringify(
            `${resumePath}?raw`,
          )} 
        `
      }
      return null
    },
  }
}
