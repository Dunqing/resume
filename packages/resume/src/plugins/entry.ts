import type { Plugin } from 'vite'
import MagicString from 'magic-string'

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
        const ms = new MagicString(`
          import React from 'react'
          import ReactDOM from 'react-dom'
          import { Resume } from '@resumejs/components'
          import '@resumejs/components/style'
          import md from 'virtual:resume'

          const Show = () => {
            return (
              <Resume className="md">{md}</Resume>
            )
          }

          ReactDOM.render(
            <React.StrictMode>
              <Show />
            </React.StrictMode>,
            document.getElementById('root')
          )
        `)
        return {
          code: ms.toString(),
          map: ms.generateMap()
        }
      }
    },
  }
}
