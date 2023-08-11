import type { Element, Text } from 'hast'
import { is } from 'unist-util-is'

const HeadingTag = ['h1', 'h2', 'h3']

export function isTag(t: any, tagName: string | string[]) {
  return (
    is(t, { type: 'element' }) &&
    [tagName].flat().includes((t as Element).tagName)
  )
}
export function isHeading(t: any, tagName?: string | string[]): t is Element {
  return is(t, { type: 'element' }) && tagName
    ? [tagName].flat().includes((t as Element)?.tagName)
    : HeadingTag.includes((t as Element)?.tagName)
}
export const isParagraph = (t: any) => is(t, { type: 'element', tagName: 'p' })
export function isTable(t: any): t is Element {
  return (
    is(t, { type: 'element', tagName: 'table' }) &&
    HeadingTag.includes((t as Element).tagName)
  )
}
export const isText = (t: any): t is Text => is(t, { type: 'text' })
export function isUl<T>(t: T): t is T {
  return is(t, { type: 'element', tagName: 'ul' })
}
export function isBlockquote(t: any) {
  return is(t, { type: 'element', tagName: 'blockquote' })
}
export function isImage(t: any): t is Element {
  return is(t, { type: 'element', tagName: 'img' })
}
