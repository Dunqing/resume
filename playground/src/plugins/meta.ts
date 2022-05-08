import { Plugin } from 'unified'
import { visit} from 'unist-util-visit'

export const meta: Plugin<[]> = function () {
  return (root) => {
    visit(root, {}, (element, index, parent) => {
      console.log("🚀 ~ file: meta.ts ~ line 7 ~ visit ~ element", element, parent)
    })
  }
}