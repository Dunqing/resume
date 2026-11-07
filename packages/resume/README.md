# @resumejs/resume


[![NPM version](https://img.shields.io/npm/v/@resumejs/resume?color=a1b858&label=)](https://www.npmjs.com/package/@resumejs/resume)


### Install

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
