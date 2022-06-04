import { describe, expect, it } from 'vitest'
import { Resume } from '@resumejs/components'
import { render } from '@testing-library/react'
import React from 'react'

describe('components', () => {
  const md = `
    # 张三

    ![头像](https://notion-avatar.vercel.app/api/svg/eyJmYWNlIjo5LCJub3NlIjoxMCwibW91dGgiOjEsImV5ZXMiOjcsImV5ZWJyb3dzIjoxMSwiZ2xhc3NlcyI6MCwiaGFpciI6MTEsImFjY2Vzc29yaWVzIjoxMywiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=)

    - [https://github.com/Dunqing](https://github.com/Dunqing)

    >

    - google@gmail.com
    - 3 年

    >

    - Telegram: @luckingforme
  `
  it('heading', () => {
    const { container } = render(<Resume components={{}}>{md}</Resume>)
    console.log(container.innerHTML)
    expect(container.innerHTML).toMatchSnapshot()
  })
})
