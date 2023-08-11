import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Element } from 'hast'
import { isHeading, isImage, isTable } from './_util'

export const description: Plugin<[], Element> = function () {
  return (root) => {
    visit(
      root,
      {
        type: 'element',
        tagName: 'p',
      },
      (element, index, parent) => {
        if (isImage(element.children[0])) return

        const prev = parent!.children[index! - 2]
        if (isTable(prev) || isHeading(prev)) element.tagName = 'description'
      },
    )
  }
}
