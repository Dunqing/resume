import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Element } from 'hast'
import { u } from 'unist-builder'
import { isBlockquote, isImage, isParagraph, isUl } from './_util'

export const header: Plugin<[], Element> = function () {
  return (root) => {
    visit(root, {
      type: 'element',
      tagName: 'h1',
    }, (paragraph, index, parent) => {
      const len = parent.children.length
      const ul = []
      let avatar: Element
      const delIndex: number[] = []

      for (let i = index + 2; i < len; i += 2) {
        const element = parent.children[i] as Element

        if (isBlockquote(element))
          continue

        // avatar
        if (isParagraph(element) && isImage(element.children[0])) {
          (element.children[0] as Element).tagName = 'header-avatar'
          avatar = element.children[0] as Element
          delIndex.unshift(i)
          continue
        }

        if (!isUl(element))
          break

        element.tagName = 'header-row'
        ul.push(element)
        visit(element, { tagName: 'li' }, (li) => {
          li.tagName = 'header-col'
        })

        delIndex.unshift(i)
      }

      if (ul.length) {
        paragraph.tagName = 'header-name'
        delIndex.forEach(i => parent.children.splice(i, 1))
        parent.children.splice(index, 1, {
          type: 'element',
          tagName: 'header',
          children: [paragraph, avatar, u('element', { tagName: 'header-content' }, ul)],
        })
      }
    })
  }
}
