import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Element } from 'hast'
import { isHeading, isTable } from './_util'

export const description: Plugin<[], Element> = function () {
  return (root) => {
    visit(root, {
      type: 'element',
      tagName: 'p',
    }, (paragraph, index, parent) => {
      const prev = parent.children[index - 2]
      if (isTable(prev) || isHeading(prev))
        paragraph.tagName = 'description'
    })
  }
}
