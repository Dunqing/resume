import path from 'node:path'
import { readFileSync } from 'node:fs'
import type { Plugin } from 'vite'
import MagicString from 'magic-string'

interface EntryPluginOptions {
  template?: string
}

export function entry({ template }: EntryPluginOptions = {}): Plugin {
  const RESUME_ENTRY = '/RESUME_ENTRY.tsx'
  let content = ''

  return {
    name: 'resume:entry',
    configResolved(config) {
      content = readFileSync(path.resolve(config.root, 'README.md')).toString()
    },
    transformIndexHtml: {
      enforce: 'pre',
      transform() {
        return [
          {
            tag: 'script',
            injectTo: 'body-prepend',
            children: `
              window.__RESUME__ = ${JSON.stringify(content)}
            `,
          },
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
          import ReactDOM from 'react-dom/client'
          import { Resume } from '@resumejs/components'
          ${templateId ? `import CustomizeComponents from '${templateId}'` : ''}

          const Show = () => {
            return (
              <Resume ${
                templateId ? 'components={CustomizeComponents}' : ''
              } className="md">{window.__RESUME__}</Resume>
            )
          }

          ReactDOM.createRoot(document.getElementById('root'))
            .render(
              <React.StrictMode>
                <Show />
              </React.StrictMode>
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
