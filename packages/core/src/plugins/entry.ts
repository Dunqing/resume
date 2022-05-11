import type { Plugin } from 'vite'

export const entry = (): Plugin => {
  const RESUME_ENTRY = '/RESUME_ENTRY.tsx'
  return {
    name: 'resume:entry',
    transformIndexHtml: {
      enforce: 'pre',
      transform() {
        return [
          {
            tag: 'script',
            attrs: {
              type: 'module',
              src: RESUME_ENTRY,
            },
            injectTo: 'body',
          },
        ]
      },
    },
    resolveId(id) {
      if (id === RESUME_ENTRY) return id
    },
    load(id) {
      if (id === RESUME_ENTRY) {
        return `
          import "@resumejs/core/entry"
        `
      }
    },
  }
}
