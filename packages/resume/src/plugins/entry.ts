import path from 'node:path'
import type { Plugin } from 'vite'
import MagicString from 'magic-string'

interface EntryPluginOptions {
  template?: string
  resumeFile?: string
}

export function entry({
  template,
  resumeFile = 'README.md',
}: EntryPluginOptions = {}): Plugin {
  const RESUME_ENTRY = '/RESUME_ENTRY.tsx'
  let resumePath = ''

  return {
    name: 'resume:entry',
    configResolved(config) {
      resumePath = path.resolve(config.root, resumeFile)
    },
    transformIndexHtml: {
      enforce: 'pre',
      transform() {
        return [
          {
            tag: 'script',
            attrs: {
              type: 'module',
            },
            children: `
              import resume from ${JSON.stringify(`${resumePath}?raw`)}
              window.__RESUME__ = resume
            `,
            injectTo: 'body-prepend',
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
