import type { Plugin } from 'unified'
import type { Root } from 'hast'
import { u } from 'unist-builder'

export const toolbox: Plugin<[], Root> = function () {
  return (root, file) => {
    root.children.unshift(u('element', {
      tagName: 'toolbox',
      data: file.data.meta as any,
    }, []))
  }
}
