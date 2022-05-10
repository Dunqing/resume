import { Resume } from '@resumejs/components'
import readme from '../../README.md?raw'
import 'uno.css'
import '@resumejs/components/style'
import '@unocss/reset/tailwind.css'

function App() {
  return <Resume>{readme}</Resume>
}

export default App
