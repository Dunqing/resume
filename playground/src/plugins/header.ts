import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Element } from 'hast'
import { isBlockquote, isUl } from './_util'

export const header: Plugin<[], Element> = function () {
  return (root) => {
    visit(root, {
      type: 'element',
      tagName: 'h1',
    }, (paragraph, index, parent) => {
      const len = parent.children.length
      const children = []
      const delIndex: number[] = []

      for (let i = index + 2; i < len; i += 2) {
        const element = parent.children[i] as Element

        if (isBlockquote(element))
          continue

        if (!isUl(element))
          break

        children.push(element)

        element.tagName = 'header-ul'

        visit(element, { tagName: 'li' }, (li) => {
          li.tagName = 'header-li'
        })

        delIndex.unshift(i)
      }

      if (children.length) {
        paragraph.tagName = 'header-h1'
        delIndex.forEach(i => parent.children.splice(i, 1))
        parent.children.splice(index, 1, {
          type: 'element',
          tagName: 'header',
          children: [paragraph, ...children],
        })
      }
    })
  }
}
