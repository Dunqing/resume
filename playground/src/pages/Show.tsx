import { Resume } from '@resumejs/components'
import { useResume } from '../hooks/useResume'
import './show.css'

export const Show = () => {
  const [resume] = useResume()
  return <Resume>{resume || ''}</Resume>
}
