import type { ChangeHandler } from 'react-monaco-editor'
import MonacoEditor from 'react-monaco-editor'
import { Resume } from '@resumejs/components'
import { languages } from 'monaco-editor'
import { useEffect, useRef } from 'react'
import 'uno.css'
import '@resumejs/components/style'
import '@unocss/reset/tailwind.css'
import './playground.css'
import { useResume } from '../hooks/useResume'

languages.register({
  id: 'markdown',
})

function Playground() {
  const monacoRef = useRef<MonacoEditor | null>(null)

  const [code, setCode] = useResume()

  useEffect(() => {
    window.addEventListener('resize', () => {
      monacoRef.current?.forceUpdate()
    })
  })

  const options = {
    selectOnLineNumbers: true,
  }

  const onEditorChange: ChangeHandler = (value) => {
    setCode(value)
  }

  return (
    <div className="flex items-center flex-col justify-center relative sm:black">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 w-90% lg:m-t-15 overflow-hidden lg:border">
        <div className="xs:block sm:hidden font-bold">
          <span className="text-red">注意</span>：请在大屏幕下编辑简历！
        </div>
        <div className="hidden md:block h-55rem">
          <MonacoEditor
            ref={monacoRef}
            language="markdown"
            value={code}
            options={options}
            theme="vs-dark"
            onChange={onEditorChange}
          />
        </div>
        <Resume className="lg:overflow-y-scroll lg:h-55rem">
          {code || ''}
        </Resume>
      </div>
    </div>
  )
}

export default Playground
