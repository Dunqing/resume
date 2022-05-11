import path from 'path'
import type { Plugin, ResolvedConfig } from 'vite'

export const loadResume = (): Plugin => {
  const virtualModuleId = 'virtual:resume'
  let config: ResolvedConfig
  return {
    name: 'load-resume',
    configResolved(_config) {
      config = _config
    },
    async resolveId(id) {
      // const react = await this.resolve('react')
      // console.log(
      //   '🚀 ~ file: loadResume.ts ~ line 14 ~ resolveId ~ react',
      //   react
      // )
      if (id === virtualModuleId) {
        return `\0${id}`
      }
    },
    load(id) {
      if (id === `\0${virtualModuleId}`) {
        const resumePath = path.resolve(config.root, 'README.md')
        return `
          export { default as default } from ${JSON.stringify(
            `${resumePath}?raw`
          )} 
        `
      }
      return null
    },
  }
}
