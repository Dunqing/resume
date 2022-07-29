import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  hooks: {
    'rollup:options': (config, options) => {
      ;[options.output].flat().forEach((out) => {
        if (out) {
          out.banner = '#!/usr/bin/env node'
        }
      })
    },
  },
})
