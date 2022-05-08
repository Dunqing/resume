import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Root } from 'hast'
import { u } from 'unist-builder'
import { isHeading, isText } from './_util'

export const table: Plugin<[], Root> = function () {
  return (root) => {
    visit(root, { type: 'element', tagName: 'table' }, (table, index, parent) => {
      const prev = parent.children[index - 2]
      if (!isHeading(prev))
        return

      const infoList: { label: any; value?: any }[] = []

      visit(table, { type: 'element', tagName: 'th' }, (th) => {
        infoList.push({
          label: isText(th.children[0]) && th.children[0].value,
        })
      })

      let i = 0
      visit(table, { type: 'element', tagName: 'td' }, (td) => {
        if (!infoList[i])
          return
        infoList[i++].value = isText(td.children[0]) && td.children[0].value
      })

      parent.children.splice(index, 1, {
        type: 'element',
        tagName: 'card',
        position: table.position,
        children: infoList.map((item, ii) => {
          return u('element', {
            tagName: 'card-item',
            properties: {
              index: ii,
            },
          }, [
            u('element', {
              tagName: 'card-item-label',
              properties: {
                className: 'font-medium',
              },
            }, [u('text', item.label)]),
            u('text', '：'),
            u('element', { tagName: 'card-item-value' }, [u('text', item.value)]),
          ])
        }),
      })
    })
  }
}
