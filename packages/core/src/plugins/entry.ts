import path from 'path'
import type { Plugin } from 'vite'

export const entry = (cwd: string): Plugin => {
  console.log(path.resolve(cwd, '../public/main.tsx'))
  return {
    name: 'resume:entry',
    enforce: 'pre',
    transformIndexHtml: {
      enforce: 'pre',
      transform() {
        return [
          {
            tag: 'script',
            attrs: {
              type: 'module',
              src: `/${path.resolve(cwd, '../public/main.tsx')}`,
            },
          },
        ]
      },
    },
  }
}
