import type { ResumeProps } from '@resumejs/components'
import React, { useContext, useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'

interface TemplateContextValues {
  template: string
  components: ResumeProps['components']
  setTemplate: React.Dispatch<React.SetStateAction<string | undefined>>
}

const TemplateContext = React.createContext<TemplateContextValues>({
  template: 'default',
  components: {},
  setTemplate: () => {},
})

export function TemplateProvider({ children }: { children: React.ReactNode }) {
  const [template, setTemplate] = useLocalStorage('RESUME_TEMPLATE', 'default')
  const [components, setComponents] = useState<ResumeProps['components']>({})

  useEffect(() => {
    if (template === 'nova') {
      import(`@resumejs/template-nova`).then((module) => {
        setComponents(module?.default ?? {})
      })
    } else {
      setComponents({})
    }
  }, [template])

  return (
    <TemplateContext.Provider
      value={{
        components,
        template: template!,
        setTemplate,
      }}
    >
      {children}
    </TemplateContext.Provider>
  )
}

export function useTemplate() {
  return useContext(TemplateContext)
}
