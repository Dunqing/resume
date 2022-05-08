import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

export const meta: Plugin<[]> = function () {
  return (root) => {
    visit(root, {}, () => {
    })
  }
}
