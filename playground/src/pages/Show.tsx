import { Resume } from '@resumejs/components'
import resume from '../../README.md?raw'

export const Show = () => {
  return <Resume>{resume}</Resume>
}
