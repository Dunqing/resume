import ReactMarkdown from 'react-markdown'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import clsx from 'clsx'
import rehypeRaw from 'rehype-raw'
import { useMemo, useState } from 'react'
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'
import { generateComponents } from '@resumejs/template'
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

interface ResumeProps extends Omit<ReactMarkdownOptions, 'components'> {
  /**
   * 当为 false 时不设置默认主题
   */
  components?: false | ReactMarkdownOptions['components']
}

export const Resume = (props: ResumeProps) => {
  const {
    children,
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

  const components = useMemo(() => {
    if (props.components === false) {
      return {}
    }
    return {
      ...generateComponents({
        print,
        toggleTheme,
      }),
      ...props.components,
    }
  }, [])

  return (
    <ReactMarkdown
      className={clsx(
        {
          dark,
        },
        'r-resume',
        props.className
      )}
      components={components}
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
