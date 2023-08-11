import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Element } from 'hast'
import clsx from 'clsx'

export const className: Plugin<[], Element> = function () {
  return (root) => {
    visit(root, { type: 'element' }, (element) => {
      const className = (element as Element).properties?.className
      ;(element as Element).properties = Object.assign(
        {},
        (element as Element).properties,
        {
          className: clsx(`r-${(element as Element).tagName}`, className),
        },
      )
    })
  }
}
