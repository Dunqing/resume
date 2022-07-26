# create-resumejs

[![NPM version](https://img.shields.io/npm/v/create-resumejs?color=a1b858&label=)](https://www.npmjs.com/package/create-resumejs)


- cli 支持，使用方式和 vite 一样
- 默认使用运行目录下的 README.md 做为你的简历 markdown
- 支持 vite.config.ts 配置文件

### Install

```shell
pnpm add @resumjes/resume
```

需要安装依赖 react 和 react-dom

```shell
pnpm add react react-dom
```

### dev 开发

```shell
resume dev
```

### build 打包

```shell
resume build
```

### preview 预览

```shell
resume preview
```

### 自定义模板

```shell
resume dev --template @resumejs/template-nova
resume build --template @resumejs/template-nova
```
