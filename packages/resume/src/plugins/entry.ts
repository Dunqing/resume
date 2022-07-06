import type { Plugin } from 'vite'
import MagicString from 'magic-string'

interface EntryPluginOptions {
  template?: string
}

export const entry = ({ template }: EntryPluginOptions = {}): Plugin => {
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
    async load(id) {
      if (id === RESUME_ENTRY) {
        let templateId
        if (template) {
          const resolvedTemplate = await this.resolve(template)
          templateId = resolvedTemplate?.id || template
        }
        const ms = new MagicString(`
          import React from 'react'
          import ReactDOM from 'react-dom'
          import { Resume } from '@resumejs/components'
          ${templateId ? `import CustomizeComponents from '${templateId}'` : ''}
          import md from 'virtual:resume'

          const Show = () => {
            return (
              <Resume ${
                templateId ? 'components={CustomizeComponents}' : ''
              } className="md">{md}</Resume>
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
          map: ms.generateMap(),
        }
      }
    },
  }
}
