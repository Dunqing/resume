import type { Plugin } from 'unified'
import type { Root } from 'hast'
import { u } from 'unist-builder'
import { visit } from 'unist-util-visit'

export const toolbox: Plugin<[], Root> = function () {
  return (root, file) => {
    visit(
      root,
      {
        type: 'element',
        tagName: 'content',
      },
      (content) =>
        content.children.unshift(
          u(
            'element',
            {
              properties: {},
              tagName: 'toolbox',
              data: file.data.meta as any,
            },
            [],
          ),
        ),
    )
  }
}
