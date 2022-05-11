# Resume

### [Playground](https://resumejs.vercel.app/) ｜ [简历示例](https://resumejs.vercel.app/#/resume)

## 项目介绍

### 初衷

了解到市面上写简历的平台都不支持在线预览，有些也是收费的，也有些不支持 markdown 编写简历

### 目的

希望用 markdown 编写简历，支持在线预览，可以自定义模板，免费！

## 支持功能

- 支持暗黑模式
- 支持嵌入 HTML
- 支持打印 PDF
- 支持在线预览
- 支持多模板组合使用

## 使用方式

## create-resume

快速创建简历项目，支持在 Vercel 中部署

1. 创建

```shell
pnpm create resume
```

2. 选择模板

3. 编写 README.md

4. 完成你的简历！

## @resumejs/components

在自己项目中引入该组件编写简历

### 下载

```shell
pnpm add @resumejs/components
```

### 使用

```tsx
import { Resume } from '@resumejs/components'

export default function App() {
  const resume = `
    #名字
    ##个人信息
    ##工作信息
  `
  return <Resume>{resume}</Resume>
}
```

## @resumejs/core

- cli 支持，使用方式和 vite 一样
- 默认使用运行目录下的 README.md 做为你的简历 markdown
- 支持 vite.config.ts 配置文件

> 可以直接使用 create-resume 创建项目

### Install

```shell
pnpm add @resumjes/core
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
