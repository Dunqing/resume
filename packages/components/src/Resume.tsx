import ReactMarkdown from 'react-markdown'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import clsx from 'clsx'
import rehypeRaw from 'rehype-raw'
import { useMemo, useState } from 'react'
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'
import templateComponents from '@resumejs/template-default'
import type { TemplateContextProps } from '@resumejs/template'
import { TemplateProvider } from '@resumejs/template'
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

export interface ResumeProps extends Omit<ReactMarkdownOptions, 'components'> {
  /**
   * 当为 false 时不设置默认主题
   */
  components?: false | ReactMarkdownOptions['components']
  /**
   * 传递给模板使用的props
   */
  templateContextProps?: Partial<TemplateContextProps>
  /**
   * 将 dark class 插入到任意你想要的位置
   * 不传将插入当前组件的 root tag 中
   */
  onDarkClass?: (className: string, action: 'add' | 'remove') => void
}

export const Resume = (props: ResumeProps) => {
  const {
    children,
    rehypePlugins = [],
    remarkPlugins = [],
    remarkRehypeOptions,
    templateContextProps,
  } = props

  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    props.onDarkClass?.('dark', !dark ? 'add' : 'remove')
    setDark((d) => {
      return !d
    })
  }

  const print = () => {
    window.print()
  }

  const components = useMemo(() => {
    if (props.components === false) {
      return {}
    }
    return {
      ...templateComponents,
      ...props.components,
    }
  }, [props.components])

  return (
    <TemplateProvider
      value={{
        toggleTheme,
        print,
        ...templateContextProps,
      }}
    >
      <ReactMarkdown
        className={clsx(
          {
            dark: !props.onDarkClass && dark,
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
    </TemplateProvider>
  )
}
