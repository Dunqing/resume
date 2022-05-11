import type { Plugin } from 'unified'
import type { Root } from 'rehype'
import { u } from 'unist-builder'

export const container: Plugin<[], Root> = function () {
  return (root) => {
    return {
      type: 'root',
      children: [
        u('element', { tagName: 'container' }, [
          u('element', { tagName: 'content' }, root.children),
        ]),
      ],
    } as Root
  }
}
