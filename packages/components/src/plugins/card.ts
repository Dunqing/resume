import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Root } from 'hast'
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

        const labels: any[] = []
        visit(table, { type: 'element', tagName: 'th' }, (th) => {
          th.tagName = 'card-item-label'
          labels.push(th)
        })

        let i = 0
        const infoList: { label: any; value?: any }[] = []
        visit(table, { type: 'element', tagName: 'td' }, (td) => {
          const th = labels[i % labels.length]
          if (!th) return
          td.tagName = 'card-item-value'
          infoList[i++] = { label: th, value: td }
        })

        parent!.children.splice(index!, 1, {
          type: 'element',
          tagName: 'card',
          position: table.position,
          children: infoList.map((item, ii) => {
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
                item.label?.children.length ? u('text', '：') : '',
                item.value,
              ]
            )
          }),
        })
      }
    )
  }
}
