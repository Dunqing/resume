import type { ResumeProps } from '@resumejs/components'
import { Resume as ResumeComponent } from '@resumejs/components'
import { ErrorBoundary } from 'react-error-boundary'
import { useTemplate } from '../contexts/template'
import useResume from '../hooks/useResume'
import { FallbackComponent } from './FallbackComponent'

function Resume(props: Omit<ResumeProps, 'children'> & { children?: string }) {
  const [resume] = useResume()
  const { components } = useTemplate()
  return (
    <ErrorBoundary
      resetKeys={[props.children ?? resume]}
      FallbackComponent={FallbackComponent}
    >
      <ResumeComponent
        {...props}
        components={{ ...props?.components, ...components }}
      >
        {props.children ?? resume ?? ''}
      </ResumeComponent>
    </ErrorBoundary>
  )
}

export default Resume
