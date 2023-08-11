import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Element } from 'hast'

export const task: Plugin<[], Element> = function () {
  return (root) => {
    visit(
      root,
      {
        type: 'element',
        tagName: 'ul',
      },
      (ul) => {
        const className = ul.properties?.className as string[]
        if (
          !Array.isArray(className) ||
          !className.includes('contains-task-list')
        )
          return

        ul.tagName = 'task'
        ul.properties!.className = []

        visit(
          ul,
          {
            type: 'element',
            tagName: 'li',
          },
          (li) => {
            li.tagName = 'task-item'
            li.properties!.className = []

            visit(
              li,
              {
                type: 'element',
                tagName: 'input',
              },
              (input) => {
                if (input.properties!.type === 'checkbox')
                  input.tagName = 'task-item-checkbox'
              },
            )
          },
        )
      },
    )
  }
}
