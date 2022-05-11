import type { ChangeHandler } from 'react-monaco-editor'
import MonacoEditor from 'react-monaco-editor'
import { Resume } from '@resumejs/components'
import { languages } from 'monaco-editor'
import { useEffect, useRef, useState } from 'react'
import readme from '../../README.md?raw'
import 'uno.css'
import '@resumejs/components/style'
import '@unocss/reset/tailwind.css'

languages.register({
  id: 'markdown',
})

function Playground() {
  const monacoRef = useRef<MonacoEditor | null>(null)

  useEffect(() => {
    window.addEventListener('resize', () => {
      monacoRef.current?.forceUpdate()
    })
  })

  const [code, setCode] = useState(readme)
  const options = {
    selectOnLineNumbers: true,
  }

  const onEditorChange: ChangeHandler = (value) => {
    setCode(value)
  }

  return (
    <div className="flex items-center flex-col h-100vh justify-center relative">
      <h1 className="text-3xl m-b-3 font-bold">Resume Playground</h1>
      <div className="grid grid-cols-2 w-90% h-90% overflow-hidden">
        <MonacoEditor
          ref={monacoRef}
          language="markdown"
          value={code}
          options={options}
          theme="vs-dark"
          onChange={onEditorChange}
        />
        <Resume className="overflow-y-scroll">{code}</Resume>
      </div>
    </div>
  )
}

export default Playground
