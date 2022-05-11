import { defineBuildConfig } from 'unbuild'
import packageJSON from './package.json'

export default defineBuildConfig({
  entries: ['src/index.ts'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true
  },
})
