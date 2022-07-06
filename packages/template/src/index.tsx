import { createContext, useContext } from 'react'

const noop = () => {}

export interface TemplateContextProps {
  toggleTheme: (theme?: string) => void
  print: () => void
}

const context = createContext<TemplateContextProps>({
  toggleTheme: noop,
  print,
})

context.displayName = 'TemplateContext'

export const TemplateProvider = context.Provider

export const useTemplate = () => {
  return useContext(context)
}
