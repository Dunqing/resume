import { useLocalStorage } from 'react-use'
import readme from '../../Nova.md?raw'

const RESUME_KEY = 'MARKDOWN_RESUME_NOVA_KEY'

function useResume() {
  return useLocalStorage(RESUME_KEY, readme)
}

export default useResume
