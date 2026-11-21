import './styles/resume.css'
import ReactMarkdown from 'react-markdown'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import clsx from 'clsx'
import rehypeRaw from 'rehype-raw'
import { useEffect, useMemo, useState } from 'react'
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
import { RESUME_THEME_KEY } from './constants'
import ResumeWrapper from './components/ResumeWrapper'

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

export function Resume(props: ResumeProps) {
  const {
    children,
    rehypePlugins = [],
    remarkPlugins = [],
    remarkRehypeOptions,
    templateContextProps,
  } = props

  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(localStorage.getItem(RESUME_THEME_KEY) === 'dark')
  }, [])

  useEffect(() => {
    props.onDarkClass?.('dark', dark ? 'add' : 'remove')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dark, props.onDarkClass])

  const toggleTheme = () => {
    setDark((d) => {
      localStorage.setItem(RESUME_THEME_KEY, !d ? 'dark' : 'light')
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
      <ResumeWrapper>
        <div
          className={clsx({
            dark: !props.onDarkClass && dark,
          })}
          lang="zh-CN"
        >
          <ReactMarkdown
            className={clsx('r-resume', props.className)}
            components={components}
            remarkPlugins={[
              ...remarkPlugins,
              remarkFrontmatter,
              meta,
              remarkGfm,
            ]}
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
        </div>
      </ResumeWrapper>
    </TemplateProvider>
  )
}
