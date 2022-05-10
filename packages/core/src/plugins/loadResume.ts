import path from 'path'
import type { Plugin } from 'vite'

export const loadResume = (cwd: string): Plugin => {
  const virtualModuleId = 'virtual:resume'
  return {
    name: 'load-resume',

    resolveId(id) {
      if (id === virtualModuleId) {
        return `\0${id}`
      }
    },
    load(id) {
      if (id === `\0${virtualModuleId}`) {
        const resumePath = path.resolve(cwd, 'RESUME.md')
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
