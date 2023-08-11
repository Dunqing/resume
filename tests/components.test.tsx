import { describe, expect, it } from 'vitest'
import { Resume } from '@resumejs/components'
import { render } from '@testing-library/react'

function replaceWhitespace(md: string) {
  return md.replace(/\n\s*/g, '\n')
}

describe('components', () => {
  it('heading', () => {
    const md = replaceWhitespace(`
      # 张三

      ![头像](https://notion-avatar.vercel.app/api/svg/eyJmYWNlIjo5LCJub3NlIjoxMCwibW91dGgiOjEsImV5ZXMiOjcsImV5ZWJyb3dzIjoxMSwiZ2xhc3NlcyI6MCwiaGFpciI6MTEsImFjY2Vzc29yaWVzIjoxMywiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=)

      - [https://github.com/Dunqing](https://github.com/Dunqing)

      >

      - google@gmail.com
      - 3 年

      >

      - Telegram: @luckingforme
  `)
    const { container } = render(<Resume>{md}</Resume>)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('toolbox', () => {
    const md = replaceWhitespace(`
    ---
    theme: true
    print: true
    github: 'https://github.com/Dunqing/resume'
    ---
  `)
    const { container } = render(<Resume>{md}</Resume>)
    expect(container.innerHTML).toMatchSnapshot()
  })

  describe('card', () => {
    it('basic', () => {
      const md = replaceWhitespace(`
        ### 公司内部 Cli 开发（独立完成）
  
        | 担任角色 |     项目周期      |
        | :------: | :---------------: |
        |  负责人  | 2020.11 ~ 2021.01 |
      `)
      const { container } = render(<Resume components={{}}>{md}</Resume>)
      expect(container.innerHTML).toMatchSnapshot()
    })

    it('multi row data', () => {
      const md = replaceWhitespace(`
        ### 公司内部 Cli 开发（独立完成）
  
        | 担任角色 |     项目周期      |
        | :------: | :---------------: |
        |  负责人  | 2020.11 ~ 2021.01 |
        |  负责人1  | 2020.11 ~ 2021.01 |
      `)
      const { container } = render(<Resume components={{}}>{md}</Resume>)
      expect(container.innerHTML).toMatchSnapshot()
    })
  })

  it('description', () => {
    const md = replaceWhitespace(`
      ### [swr-taro](https://www.npmjs.com/package/taro-swr)
      
      **业务背景是由于公司的小程序对需要对接口进行管理,(替换原来实现的 useRequest，api 不太友好)。考虑到内部的 H5 使用的是 SWR，统一请求管理库对维护者更加友好，所以决定把 SWR 适配到 Taro 中去**
    `)
    const { container } = render(<Resume components={{}}>{md}</Resume>)
    expect(container.innerHTML).toMatchSnapshot()
  })
})
