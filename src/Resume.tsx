import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import "uno.css"
// import '@unocss/reset/tailwind.css'



function App() {
  const [markdown] = useState<string>(DENGQING_RESUME)

  return (
    <div className="App">
      <ReactMarkdown >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default App

