# @resumejs/components


[![NPM version](https://img.shields.io/npm/v/@resumejs/components?color=a1b858&label=)](https://www.npmjs.com/package/@resumejs/components)


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