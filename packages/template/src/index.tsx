import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

function noop() {}

export interface TemplateContextProps {
  toggleTheme: (theme?: string) => void
  print: () => void
  extraToolboxButton?: ReactNode
}

const context = createContext<TemplateContextProps>({
  toggleTheme: noop,
  print: noop,
})

context.displayName = 'TemplateContext'

export const TemplateProvider = context.Provider

export function useTemplate() {
  return useContext(context)
}
