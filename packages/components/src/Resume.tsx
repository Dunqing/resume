import ReactMarkdown from 'react-markdown'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import clsx from 'clsx'
import rehypeRaw from 'rehype-raw'
import { useState } from 'react'
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'
import {
  card,
  className,
  container,
  description,
  header,
  meta,
  task,
  toolbox,
} from './plugins'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import { generateComponents } from './template'

interface ResumeProps extends ReactMarkdownOptions {}

export const Resume = (props: ResumeProps) => {
  const {
    children,
    components,
    rehypePlugins = [],
    remarkPlugins = [],
    remarkRehypeOptions,
  } = props

  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark((d) => !d)
  }

  const print = () => {
    window.print()
  }

  return (
    <ReactMarkdown
      className={clsx(
        {
          dark,
        },
        'r-resume',
        props.className
      )}
      components={{
        ...components,
        ...generateComponents({ print, toggleTheme }),
      }}
      remarkPlugins={[...remarkPlugins, remarkFrontmatter, meta, remarkGfm]}
      rehypePlugins={[
        ...rehypePlugins,
        task,
        rehypeRaw,
        card,
        header,
        description,
        container,
        toolbox,
        className,
      ]}
      remarkRehypeOptions={{
        allowDangerousHtml: true,
        ...remarkRehypeOptions,
      }}
    >
      {children}
    </ReactMarkdown>
  )
}

export default Resume
