import ReactMarkdown from 'react-markdown'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import clsx from 'clsx'
import rehypeRaw from 'rehype-raw'
import readme from '../../README.md?raw'
import { card, className, container, description, header, meta } from './plugins'

function Resume() {
  return (
    <ReactMarkdown
      components={{
        'container': ({ className, ...props }) => <div className={
          clsx(
            'font-sans text-base bg-gray-100',
            className,
          )
        } {...props} />,
        'content': ({ className, ...props }) => <div className={
          clsx(
            'bg-white md:w-768px xs:w-full  mx-auto p-y-5 sm:p-x-10 p-x-4',
            className,
          )
        } {...props} />,
        'h1': ({ className, ...props }) => <h1 className={
          clsx(
            'text-2xl font-semibold',
            className,
          )
        } {...props}></h1>,
        'h2': ({ className, ...props }) => {
          return <h2 className={clsx('text-xl font-semibold p-y-1 b-b', className)} {...props}></h2>
        },
        'h3': ({ className, ...props }) => <h3 className={
          clsx('p-y-1 text-lg  font-semibold', className)
        } {...props}></h3>,
        'ul': ({ className, ...props }) => <ul className={
          clsx('text-0.95rem p-l-5 list-disc p-y-1', className)
        } {...props}></ul>,
        'ol': ({ className, ...props }) => <ol className={
          clsx('text-0.95rem p-l-5 list-decimal p-y-1', className)
        } {...props}></ol>,
        'a': ({ className, ...props }) => <a className={
          clsx('text-blue underline', className)
        } {...props}></a>,
        'p': ({ className, ...props }) => <p className={
          clsx('font-medium p-y-1', className)
        } {...props}></p>,
        'strong': ({ className, ...props }) => <strong className={
          clsx('font-semibold', className)
        } {...props} />,
        'card': ({ className, ...props }) => {
          return <div className={
            clsx('p-y-0.5 grid grid-cols-2 gap-y-0.5', className)
          } {...props} />
        },
        'card-item': ({ className, index, ...props }) => {
          return <div {...props} className={clsx('text-sm', { 'justify-self-end': index % 2 === 1 }, className)} />
        },
        'card-item-label': ({ className, ...props }) => {
          return <span {...props} className={
            clsx('text-sm font-medium', className)
          } />
        },
        'card-item-value': ({ className, ...props }) => {
          return <span className={
            clsx('text-blue-gray-600', className)
          } {...props} />
        },
        'description': ({ className, ...props }) => {
          return <p {...props} className={clsx('text-sm indent', className)} />
        },
        'header': ({ className, ...props }) => {
          return <header {...props} className={clsx('flex flex-col items-center p-4', className)} />
        },
        'header-content': ({ className, ...props }) => {
          return <div {...props} className={clsx('flex flex-col items-center', className)} />
        },
        'header-name': ({ className, ...props }) => {
          return <h1 {...props} className={clsx('font-bold text-2xl', className)} />
        },
        'header-avatar': ({ className, ...props }) => {
          return <img {...props} className={clsx('w-40 font-bold text-2xl', className)} />
        },
        'header-row': ({ className, ...props }) => {
          return <ul {...props} className={clsx('list-none flex flex-wrap', className)} />
        },
        'header-col': ({ className, ...props }) => {
          return <li className={clsx('sibling:before:content-| sibling:before:p-x-2 sibling:before:text-gray-400', className)} {...props} />
        },
      }}
      remarkPlugins={[
        remarkFrontmatter,
        meta,
        remarkGfm,
      ]}
      rehypePlugins={[
        rehypeRaw,
        card,
        header,
        description,
        container,
        className,
      ]}
      remarkRehypeOptions={{
        allowDangerousHtml: true,
      }}
    >
      {readme}
    </ReactMarkdown>
  )
}

export default Resume

