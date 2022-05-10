import { Resume } from '@resumejs/components'
import resume from '../../RESUME.md?raw'

export const Show = () => {
  return (
    <div className="flex justify-center">
      <Resume className="md:w-screen-md">{resume}</Resume>
    </div>
  )
}
