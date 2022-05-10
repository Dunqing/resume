# Resume

用markdown语法编写你的简历

## 功能

- 支持暗黑模式
- 支持嵌入HTML
- 支持打印PDF
- 支持在线预览
- 支持多模板组合使用

## 使用方式

### Components
在自己项目中使用

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

### create resume project

快速构建简历项目，支持vercel部署

### 下载
```shell
pnpm create resume
```

### 编写README.md

完成你的简历！