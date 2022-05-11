import type { Element, Text } from 'rehype'
import { is } from 'unist-util-is'

const HeadingTag = ['h1', 'h2', 'h3']

export const isTag = (t: any, tagName: string | string[]) =>
  is(t, { type: 'element' }) &&
  [tagName].flat().includes((t as Element).tagName)
export const isHeading = (t: any, tagName?: string | string[]): t is Element =>
  is(t, { type: 'element' }) && tagName
    ? [tagName].flat().includes((t as Element)?.tagName)
    : HeadingTag.includes((t as Element)?.tagName)
export const isParagraph = (t: any) => is(t, { type: 'element', tagName: 'p' })
export const isTable = (t: any): t is Element =>
  is(t, { type: 'element', tagName: 'table' }) &&
  HeadingTag.includes((t as Element).tagName)
export const isText = (t: any): t is Text => is(t, { type: 'text' })
export const isUl = <T>(t: T): t is T =>
  is(t, { type: 'element', tagName: 'ul' })
export const isBlockquote = (t: any) =>
  is(t, { type: 'element', tagName: 'blockquote' })
export const isImage = (t: any): t is Element =>
  is(t, { type: 'element', tagName: 'img' })
