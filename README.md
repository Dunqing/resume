<div align="center"><img width="100%" src="https://static.todev.cc/resume/logo.svg" />
<a href="https://resume.todev.cc/">WYSIWYG Online resume</a> | <a href="https://stackblitz.com/edit/node-ga2wh1?file=README.md">Stackblitz Playground</a> | <a href="./README.zh-CN.md">中文</a></div> 

<p />

<div align="center"><a href="https://vercel.com/new/clone?project-name=resume&repository-name=resume&repository-url=https://github.com/Dunqing/resume/tree/main/examples/resume-example"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a></div>

## Introduction

### Purpose

To allow resumes to be previewed anytime, anywhere, written in the Markdown syntax that programmers are most familiar with, and free of charge!

## Supported Features

- [x] Dark mode support
- [x] HTML embedding support
- [x] PDF printing support
- [x] Online preview support
- [x] Custom template support
- [x] Multiple template combination support
- [x] Style override support
- [ ] More personalized templates

## Usage

### [create-resumejs](./packages/create-resumejs/)

Quickly create a resume project, supports deployment on Vercel

1. Create

```shell
pnpm create resumejs
```

2. Choose a template

3. Write your README.md

4. Finish your resume!


## [@resumejs/components](./packages/components/)

Import as components into your own project

### Download

```shell
pnpm add @resumejs/components
```

### 使用

```tsx
import { Resume } from '@resumejs/components'

export default function App() {
  const resume = `
    # Name
    ## Personal Information
    ## Work Information
  `
  return <Resume>{resume}</Resume>
}
```

### Usage Example

- [vite-ant-design-pro](https://github.com/Dunqing/vite-ant-design-pro/tree/main/playground/src/pages/Resume)


## [@resumejs/resume](./packages/resume/)

- CLI support, usage is the same as Vite
- By default, use the README.md in the running directory as your resume markdown
- Supports the vite.config.ts configuration file

> You can directly use create-resumejs to create a project

### Install

```shell
pnpm add @resumejs/resume
```

Dependencies react and react-dom need to be installed.

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

### Custom Templates

```shell
resume dev --template @resumejs/template-nova
resume build --template @resumejs/template-nova
```

[Reference example](./examples/customize-template/)

## Templates

- [@resumejs/template-default](./templates/default/) Default template
- [@resumejs/template-nova](./templates/nova/)

**Default resume template**

## How to customize the template?

### Customize the markdown syntax for writing resumes

1. The content under the first-level title includes the information of the resume header with the first-level title as the header. You can customize the `header` component.

  - The first-level title is the name. You can customize the `header-name` component.
  - The picture is used as the avatar. You can customize the `header-avatar` component.
  - Wrap all list items. You can customize the `header-content` component.
  - Each list is a row. You can customize the `header-row` component.
  - The item in the list is a column. You can customize the `header-col` component.

2. The first paragraph below the third-level title

  - The table will be changed to the description information of the third-level title, and you can customize the `card`, `card-item`, `card-item-label`, `card-item-value` components.
  - The first line of text below the title or Table will be changed to the description content, and you can customize the `description` component.

3. FrontMatter (dark mode, Github, print button)

  - You can customize the toolbox component.

### Example

- [Default template](templates/default/src/index.tsx)

## Deploy

<a href="https://vercel.com/new/clone?project-name=resume&repository-name=resume&repository-url=https://github.com/Dunqing/resume/tree/main/examples/resume-example"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

This is very simple, just click the button above to deploy to Vercel. You can also deploy to other platforms that support Vite.

## Others

This project is tested with [BrowserStack](https://browserstack.com).

[MIT LICENSE](./LICENSE)
