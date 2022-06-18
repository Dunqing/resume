import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Root, Element } from 'hast'
import { u } from 'unist-builder'
import { isHeading } from './_util'

export const card: Plugin<[], Root> = function () {
  return (root) => {
    visit(
      root,
      { type: 'element', tagName: 'table' },
      (table, index, parent) => {
        const prev = parent!.children[index! - 2]
        if (!isHeading(prev)) return

        const labels: Element[] = []
        visit(table, { tagName: 'th' }, (th) => {
          th.tagName = 'card-item-label'
          labels.push(th)
        })

        const cardList: Element[] = []

        visit(table, { tagName: 'tr' }, (tr) => {  
          let i = 0
          const cardInfo: { label: Element; value: Element }[] = []
          visit(tr, { tagName: 'td' }, (td) => {
            const th = labels[i]
            if (!th) return
            td.tagName = 'card-item-value'
            cardInfo[i++] = { label: th, value: td }
          })

          cardList.push({
            type: 'element',
            tagName: 'card',
            position: table.position,
            children: cardInfo.map((item, ii) => {
              return u(
                'element',
                {
                  tagName: 'card-item',
                  properties: {
                    index: ii,
                  },
                },
                [
                  item.label,
                   u('text', item.label ? '：' : ''),
                  item.value!,
                ]
              )
            }),
          })
        })

        parent?.children.splice(index!, 1, ...cardList)
      }
    )
  }
}
