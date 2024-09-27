<div align="center"><img width="100%" src="https://static.todev.cc/resume/logo.svg" />
<a href="https://resume.todev.cc/">所见即所得的在线简历</a> | <a href="https://stackblitz.com/edit/node-ga2wh1?file=README.md">Stackblitz Playground</a> | <a href="./README.md">English</a></div>
<p />
<div align="center"><a href="https://vercel.com/new/clone?project-name=resume&repository-name=resume&repository-url=https://github.com/Dunqing/resume/tree/main/examples/resume-example"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a></div>

## 项目介绍

### 初衷

让简历可以随时随地预览，用程序员最熟悉的Markdown语法编写，并且不收费！

## 支持功能

- [x] 支持暗黑模式
- [x] 支持嵌入 HTML
- [x] 支持打印 PDF
- [x] 支持在线预览
- [x] 支持自定义模板
- [x] 支持多模板组合使用
- [x] 支持样式覆盖
- [ ] 更多的个性化模板

## 使用方式

### [create-resumejs](./packages/create-resumejs/)

快速创建简历项目，支持在 Vercel 中部署

1. 创建

```shell
pnpm create resumejs
```

2. 选择模板

3. 编写 README.md

4. 完成你的简历！


## [@resumejs/components](./packages/components/)

以组件方式引入到自己项目

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

### 使用示例

- [vite-ant-design-pro](https://github.com/Dunqing/vite-ant-design-pro/tree/main/playground/src/pages/Resume)


## [@resumejs/resume](./packages/resume/)

- cli 支持，使用方式和 vite 一样
- 默认使用运行目录下的 README.md 做为你的简历 markdown
- 支持 vite.config.ts 配置文件

> 可以直接使用 create-resumejs 创建项目

### Install

```shell
pnpm add @resumejs/resume
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

[参考示例](./examples/customize-template/)



## Templates

- [@resumejs/template-default](./templates/default/) 默认模板
- [@resumejs/template-nova](./templates/nova/)

**简历默认模板**

## 如何自定义模板？

### 自定义的写简历的 markdown 语法

1. 一级标题下的内容包括一级标题为简历头部的信息 可自定义`header`组件

    - 一级标题为名字 可自定义`header-name`组件
    - 图片作为头像 可自定义`header-avatar`组件
    - 包裹所有列表项 可自定义`header-content`组件
    - 每个列表为行 可自定义`header-row`组件
    - 列表的项为列 可自定义`header-col`组件

2. 三级标题下方的第一段内容

    - 表格将更改为三级标题的描述信息，可自定义`card`, `card-item`, `card-item-label`, `card-item-value`组件
    - 标题下或 Table 下第一行文本将会更改为描述内容 可自定义`description`组件

3. FrontMatter (暗黑模式，Github, 打印按钮)

    - 可自定义 toolbox 组件

### 示例

- [默认模板](templates/default/src/index.tsx)


## 相关文章

[一款更加完善，且易于拓展的用 Markdown 编写简历的开源简历项目](https://juejin.cn/post/7124536546677489678)



## 部署

<a href="https://vercel.com/new/clone?project-name=resume&repository-name=resume&repository-url=https://github.com/Dunqing/resume/tree/main/examples/resume-example"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

这非常简单，只需点击上面的按钮即可部署到 Vercel。您还可以部署到支持 Vite 的其他平台。

## Others

This project is tested with [BrowserStack](https://browserstack.com).

[MIT LICENSE](./LICENSE)
