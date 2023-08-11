import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { YAML } from 'mdast'
import yaml from 'yaml'

export const meta: Plugin<[], YAML> = function () {
  return (root, file) => {
    visit(
      root,
      {
        type: 'yaml',
      },
      (el) => {
        file.data.meta = yaml.parse(el.value)
      },
    )
  }
}
