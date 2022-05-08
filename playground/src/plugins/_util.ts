import type { Element, Text } from 'hast'
import { is } from 'unist-util-is'

const HeadingTag = ['h1', 'h2', 'h3']

export const isHeading = (t: any): t is Element => is(t, { type: 'element' }) && HeadingTag.includes((t as Element).tagName)
export const isTable = (t: any): t is Element => is(t, { type: 'element', tagName: 'table' }) && HeadingTag.includes((t as Element).tagName)
export const isText = (t: any): t is Text => is(t, { type: 'text' })
