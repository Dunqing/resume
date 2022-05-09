import ReactMarkdown from 'react-markdown'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import clsx from 'clsx'
import readme from '../../README.md?raw'
import { container, description, header, meta, table } from './plugins'

function Resume() {
  return (
    <ReactMarkdown
      components={{
        'container': ({ ...props }) => <div className="font-sans text-base bg-gray-100" {...props} />,
        'content': ({ ...props }) => <div className="bg-white md:w-768px xs:w-full  mx-auto p-y-5 sm:p-x-10 p-x-4" {...props} />,
        'h1': ({ ...props }) => <h1 className="text-2xl  font-semibold" {...props}></h1>,
        'h2': ({ ...props }) => {
          return <div className="text-xl  font-semibold p-y-1 b-b">
            <h2 {...props}></h2>
          </div>
        },
        'h3': ({ ...props }) => <h3 className="p-y-1 text-lg  font-semibold" {...props}></h3>,
        'ul': ({ ...props }) => <ul className="text-0.95rem p-l-5 list-disc p-y-1" {...props}></ul>,
        'ol': ({ ...props }) => <ol className="text-0.95rem p-l-5 list-decimal p-y-1" {...props}></ol>,
        'li': ({ ...props }) => <li className="" {...props}></li>,
        'a': ({ ...props }) => <a className="text-blue underline" {...props}></a>,
        'p': ({ ...props }) => <p className="font-medium p-y-1" {...props}></p>,
        'strong': ({ ...props }) => <strong className=" font-semibold" {...props}></strong>,
        'card': ({ ...props }) => {
          return <div className="p-y-0.5 grid grid-cols-2 gap-y-0.5" {...props} />
        },
        'card-item': ({ index, ...props }) => {
          return <div {...props} className={clsx('text-sm', { 'justify-self-end': index % 2 === 1 })} />
        },
        'card-item-label': ({ ...props }) => {
          return <span {...props} className="text-sm font-medium" />
        },
        'card-item-value': ({ ...props }) => {
          return <span className="text-blue-gray-600" {...props} />
        },
        'description': ({ ...props }) => {
          return <p {...props} className="text-sm indent" />
        },
        'header': ({ node: _, ...props }) => {
          return <header {...props} className="flex flex-col items-center p-4" />
        },
        'header-h1': ({ node: _, ...props }) => {
          return <h1 {...props} className="font-bold text-2xl" />
        },
        'header-ul': ({ ...props }) => {
          return <ul {...props} className="list-none flex flex-wrap" />
        },
        'header-li': ({ ...props }) => {
          return <li className="sibling:before:content-| sibling:before:p-x-2 sibling:before:text-gray-400" {...props} />
        },
      }}
      remarkPlugins={[
        remarkFrontmatter,
        meta,
        remarkGfm,
      ]}
      rehypePlugins={[
        table,
        header,
        description,
        container,
      ]}
    >
      {readme}
    </ReactMarkdown>
  )
}

export default Resume

