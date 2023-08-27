import 'uno.css'
import '@unocss/reset/tailwind.css'
import clsx from 'clsx'
import type { Components } from 'react-markdown'

import omit from 'omit.js'
import Toolbox from './toolbox'

function omitProps(props: any) {
  return omit(props, ['node', 'ordered', 'inline'])
}

const components: Components = {
  container: ({ className, ...props }) => (
    <div
      className={clsx(
        'font-sans text-base text-dark-400 bg-white',
        'dark:text-light-700 dark:bg-dark-400',
        className,
      )}
      {...omitProps(props)}
    />
  ),
  content: ({ className, ...props }) => (
    <div
      className={clsx(
        'border print:border-none border-light-700 md:w-full md:max-w-screen-md xs:w-full mx-auto p-y-5 sm:p-x-10 p-x-4',
        'dark:border-dark-100',
        'relative',
        className,
      )}
      {...omitProps(props)}
    />
  ),
  h1: ({ className, ...props }) => (
    <h1
      className={clsx('m-t-2 m-b-1.5 text-2xl font-semibold', className)}
      {...omitProps(props)}
    />
  ),
  h2: ({ className, ...props }) => {
    return (
      <h2
        className={clsx(
          'm-t-3 m-b-1 text-xl font-semibold p-y-1 b-b border-dark',
          'dark:border-dark-100',
          className,
        )}
        {...omitProps(props)}
      ></h2>
    )
  },
  h3: ({ className, ...props }) => (
    <h3
      className={clsx('m-t-2 m-b-1 p-y-0.5 text-base font-semibold', className)}
      {...omitProps(props)}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={clsx(
        'm-b-2 text-0.9rem p-l-5 list-disc',
        'dark:text-gray-300',
        className,
      )}
      {...omitProps(props)}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={clsx('m-b-2 text-0.9rem p-l-5 list-decimal', className)}
      {...omitProps(props)}
    />
  ),
  li: ({ className, ...props }) => (
    <li
      className={clsx('p-y-0.5', className)}
      {...omitProps(props)}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={clsx(
        'text-blue-600 underline',
        'dark:text-blue-400',
        className,
      )}
      {...omitProps(props)}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={clsx('', className)}
      {...omitProps(props)}
    />
  ),
  img: ({ className, ...props }) => (
    <img
      className={clsx('inline', className)}
      {...omitProps(props)}
    />
  ),
  strong: ({ className, ...props }) => (
    <strong
      className={clsx('font-semibold', className)}
      {...omitProps(props)}
    />
  ),
  card: ({ className, ...props }) => {
    return (
      <div
        className={clsx('p-y-0.5 grid grid-cols-2 gap-y-0.5', className)}
        {...omitProps(props)}
      />
    )
  },
  'card-item': ({ className, index, ...props }) => {
    return (
      <div
        {...omitProps(props)}
        className={clsx(
          'text-sm',
          { 'justify-self-end': index! % 2 === 1 },
          className,
        )}
      />
    )
  },
  'card-item-label': ({ className, ...props }) => {
    return (
      <span
        {...omitProps(props)}
        className={clsx('text-sm font-medium', className)}
      />
    )
  },
  'card-item-value': ({ className, ...props }) => {
    return (
      <span
        className={clsx(
          'text-blue-gray-600',
          'dark:text-blue-gray-300',
          className,
        )}
        {...omitProps(props)}
      />
    )
  },
  description: ({ className, ...props }) => {
    return (
      <p
        {...omitProps(props)}
        className={clsx('text-sm indent', className)}
      />
    )
  },
  header: ({ className, ...props }) => {
    return (
      <header
        {...omitProps(props)}
        className={clsx('flex relative min-h-40 flex-col p-y-4', className)}
      />
    )
  },
  'header-content': ({ className, ...props }) => {
    return (
      <div
        {...omitProps(props)}
        className={clsx('flex flex-col items-center', className)}
      />
    )
  },
  'header-name': ({ className, ...props }) => {
    return (
      <h1
        {...omitProps(props)}
        className={clsx('font-bold text-3xl m-b-2', className)}
      />
    )
  },
  'header-avatar': ({ className, ...props }) => {
    return (
      <img
        {...omitProps(props)}
        className={clsx(
          'absolute top-1/2 right-0 -translate-y-1/2 w-30 h-30 text-3xl',
          className,
        )}
      />
    )
  },
  'header-row': ({ className, ...props }) => {
    return (
      <ul
        {...omitProps(props)}
        className={clsx('list-none flex flex-wrap', className)}
      />
    )
  },
  'header-col': ({ className, ...props }) => {
    return (
      <li
        className={clsx(
          'sibling:before:content-[quoted:|] sibling:before:p-x-2 sibling:before:text-gray-400',
          className,
        )}
        {...omitProps(props)}
      />
    )
  },
  table: ({ className, ...props }) => {
    return (
      <table
        className={clsx(
          'border border-dark text-sm',
          'dark:border-dark-100',
          className,
        )}
        {...omitProps(props)}
      />
    )
  },
  th: ({ className, ...props }) => {
    return (
      <th
        className={clsx(
          'border p-2 border-dark',
          'dark:border-dark-100',
          className,
        )}
        {...(props as any)}
      />
    )
  },
  td: ({ className, ...props }) => {
    return (
      <td
        className={clsx(
          'border p-2 border-dark',
          'dark:border-dark-100',
          className,
        )}
        {...(props as any)}
      />
    )
  },
  blockquote: ({ className, ...props }) => {
    return (
      <blockquote
        className={clsx(
          'border-l-0.3rem p-l-2 border-gray-200 m-b-4 text-gray-700',
          'dark:text-gray-400',
          className,
        )}
        {...omitProps(props)}
      />
    )
  },
  code: ({ className, ...props }) => {
    return (
      <code
        className={clsx(
          'p-x-1.5 p-y-0.5 bg-neutral-100 rounded-md text-xs',
          'dark:bg-neutral-500',
          className,
        )}
        {...omitProps(props)}
      />
    )
  },
  task: ({ className, ...props }) => (
    <ul
      className={clsx('m-b-2 text-0.9rem p-y-1', className)}
      {...omitProps(props)}
    />
  ),
  'task-item': ({ className, ...props }) => (
    <li
      className={clsx('p-x-5', className)}
      {...omitProps(props)}
    />
  ),
  'task-item-checkbox': ({ className, ...props }) => (
    <input
      className={clsx('-m-l-5 m-r-1 m-b-0.5 align-middle', className)}
      {...omitProps(props)}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={clsx('bg-light p-x-5 p-y-3', 'dark:bg-dark-300', className)}
      {...omitProps(props)}
    />
  ),
  toolbox: ({ node, ...props }) => {
    const meta = node.data || {}
    return (
      <Toolbox
        {...omitProps(props)}
        meta={meta}
      ></Toolbox>
    )
  },
}

export default components
