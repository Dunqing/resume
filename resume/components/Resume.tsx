import type { ResumeProps } from '@resumejs/components'
import { Resume as ResumeComponent } from '@resumejs/components'
import { ErrorBoundary } from 'react-error-boundary'
import { FallbackComponent } from './FallbackComponent'

function Resume(props: Omit<ResumeProps, 'children'> & { children?: string }) {
  return (
    <ErrorBoundary
      resetKeys={[props.children]}
      FallbackComponent={FallbackComponent}
    >
      <ResumeComponent
        {...props}
        components={{ ...props?.components }}
      >
        {props.children ?? ''}
      </ResumeComponent>
    </ErrorBoundary>
  )
}

export default Resume
