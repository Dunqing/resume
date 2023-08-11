import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Element } from 'hast'
import { u } from 'unist-builder'
import { isBlockquote, isImage, isParagraph, isUl } from './_util'

export const header: Plugin<[], Element> = function () {
  return (root) => {
    visit(
      root,
      {
        type: 'element',
        tagName: 'h1',
      },
      (paragraph, index, parent) => {
        const len = parent!.children.length
        const headerChildren: Element[] = []
        let avatar: Element

        const replaceWithEmpty = (index: number) => {
          parent!.children[index] = u('text', '')
        }

        for (let i = index! + 2; i < len; i += 2) {
          const element = parent!.children[i] as Element

          if (isBlockquote(element)) {
            replaceWithEmpty(i)
            continue
          }

          // avatar
          if (isParagraph(element) && isImage(element.children[0])) {
            avatar = element.children[0] as Element
            replaceWithEmpty(i)
            continue
          }

          if (!isUl(element)) break

          element.tagName = 'header-row'
          headerChildren.push(element)
          visit(element, { tagName: 'li' }, (li) => {
            li.tagName = 'header-col'
          })

          replaceWithEmpty(i)
        }

        if (avatar!) {
          avatar.tagName = 'header-avatar'
          headerChildren.unshift(avatar)
        }

        paragraph.tagName = 'header-name'
        headerChildren.unshift(paragraph)

        parent!.children.splice(index!, 1, {
          type: 'element',
          tagName: 'header',
          properties: {},
          children: headerChildren,
        })
      },
    )
  }
}
