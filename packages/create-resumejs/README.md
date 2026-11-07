# create-resumejs

[![NPM version](https://img.shields.io/npm/v/create-resumejs?color=a1b858&label=)](https://www.npmjs.com/package/create-resumejs)


- CLI support, used the same way as Vite
- By default, the README.md in the working directory is used as the resume Markdown
- Supports a `vite.config.ts` configuration file

### Install

```shell
pnpm add @resumjes/resume
```

The `react` and `react-dom` dependencies also need to be installed.

```shell
pnpm add react react-dom
```

### Development

```shell
resume dev
```

### Build

```shell
resume build
```

### Preview

```shell
resume preview
```

### Custom templates

```shell
resume dev --template @resumejs/template-nova
resume build --template @resumejs/template-nova
```
