import { Resume } from '@resumejs/components'
import { ErrorBoundary } from 'react-error-boundary'
import { FallbackComponent } from '../components/FallbackComponent'
import useResume from '../hooks/useResume'
import { generateComponents } from '@resumejs/template-nova'

export const Show = () => {
  const [resume] = useResume()
  return (
    <div className="show-resume">
      <ErrorBoundary
        resetKeys={[resume]}
        FallbackComponent={FallbackComponent}
      >
        <Resume components={generateComponents({} as any)}>{resume || ''}</Resume>
      </ErrorBoundary>
    </div>
  )
}
