import { useLocalStorage } from 'react-use'
import readme from '../../README.md?raw'

const RESUME_KEY = 'MARKDOWN_RESUME_KEY'

const useResume = () => {
  return useLocalStorage(RESUME_KEY, readme)
}

export default useResume
