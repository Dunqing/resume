import { Resume } from '@resumejs/components'
import { ErrorBoundary } from 'react-error-boundary'
import { FallbackComponent } from '../components/FallbackComponent'
import useResume from '../hooks/useResume'

export const Show = () => {
  const [resume] = useResume()
  return (
    <div className="show-resume">
      <ErrorBoundary
        resetKeys={[resume]}
        FallbackComponent={FallbackComponent}
      >
        <Resume>{resume || ''}</Resume>
      </ErrorBoundary>
    </div>
  )
}
