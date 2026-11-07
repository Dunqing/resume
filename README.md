<div align="center"><img width="100%" src="https://static.todev.cc/resume/logo.svg" />
<a href="https://resume.todev.cc/">WYSIWYG Online resume</a> | <a href="https://stackblitz.com/edit/node-ga2wh1?file=README.md">Stackblitz Playground</a> | <a href="./README.zh-CN.md">中文</a></div> 

<p />

<div align="center"><a href="https://vercel.com/new/clone?project-name=resume&repository-name=resume&repository-url=https://github.com/Dunqing/resume/tree/main/examples/resume-example"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a></div>

## Introduction

### Purpose

Preview a resume anytime, anywhere. Write it in the Markdown syntax programmers already know, at no charge.

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

Quickly create a resume project that can be deployed on Vercel.

1. Create

```shell
pnpm create resumejs
```

2. Choose a template

3. Write your README.md

4. Finish your resume!


## [@resumejs/components](./packages/components/)

Import them into your own project as components.

### Download

```shell
pnpm add @resumejs/components
```

### Usage

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

- CLI support, used the same way as Vite
- By default, the README.md in the working directory is used as the resume Markdown
- Supports a `vite.config.ts` configuration file

> You can create a project directly with create-resumejs.

### Install

```shell
pnpm add @resumejs/resume
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

## How do I customize a template?

### Markdown syntax for writing a resume

1. Everything under the top-level heading, including that heading, is the resume header. Customize the `header` component.

  - The top-level heading is the name. Customize the `header-name` component.
  - An image is used as the avatar. Customize the `header-avatar` component.
  - This wrapper surrounds every list item. Customize the `header-content` component.
  - Each list is a row. Customize the `header-row` component.
  - Each item in a list is a column. Customize the `header-col` component.

2. The first block under a third-level heading

  - A table becomes the description for that third-level heading. Customize the `card`, `card-item`, `card-item-label`, and `card-item-value` components.
  - The first line of text under the heading, or under the table, becomes the description. Customize the `description` component.

3. Front matter (dark mode, GitHub, and the print button)

  - Customize the `toolbox` component.

### Example

- [Default template](templates/default/src/index.tsx)

## Related articles

[A more complete, easy-to-extend open-source project for writing resumes in Markdown](https://juejin.cn/post/7124536546677489678)

## Deploy

<a href="https://vercel.com/new/clone?project-name=resume&repository-name=resume&repository-url=https://github.com/Dunqing/resume/tree/main/examples/resume-example"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

Deployment is straightforward: use the button above to deploy to Vercel. You can also deploy to any other platform that supports Vite.

## Others

This project is tested with [BrowserStack](https://browserstack.com).

[MIT LICENSE](./LICENSE)
