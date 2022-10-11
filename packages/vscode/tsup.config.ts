import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/extension.ts'],
  outDir: './out',
  format: 'cjs',
  external: ['vscode'],
  injectStyle: true,
  clean: true,
  legacyOutput: true,
  noExternal: ['@resumejs/components'],
  sourcemap: true,
})
