import type * as monaco from 'monaco-editor'
import type { ChangeHandler } from 'react-monaco-editor'
import MonacoEditor from 'react-monaco-editor'
import { languages } from 'monaco-editor'
import { useEffect, useRef, useState } from 'react'
import useResume from '../hooks/useResume'
import Resume from '../components/Resume'
import Template from '../components/Template'
import './playground.css'

languages.register({
  id: 'markdown',
})

function Playground() {
  const monacoRef = useRef<MonacoEditor | null>(null)

  const [code, setCode] = useResume()
  const [, forceUpdate] = useState([])

  useEffect(() => {
    window.addEventListener('resize', () => {
      monacoRef.current?.forceUpdate()
    })
  })

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
  }

  const onEditorChange: ChangeHandler = (value) => {
    setCode(value)
  }

  return (
    <div className="dark:bg-dark-400 playground flex items-center flex-col justify-center relative sm:black">
      <div className="text-lg xs:block sm:hidden p-y-2 font-bold">
        <span className="text-red">注意</span>：请在大屏幕下编辑简历！
      </div>
      <div className="flex justify-center items-center lg:h-screen">
        <div className="grid md:grid-cols-2 grid-cols-1 overflow-hidden h-full">
          <div className="hidden md:block h-full lg:h-full">
            <MonacoEditor
              ref={monacoRef}
              language="markdown"
              value={code}
              options={options}
              theme={
                document.body.classList.contains('dark') ? 'vs-dark' : 'vs'
              }
              onChange={onEditorChange}
            />
          </div>
          <div className="h-full overflow-y-scroll">
            <Resume
              templateContextProps={{
                extraToolboxButton: <Template></Template>,
              }}
              onDarkClass={(className: string, action) => {
                document.body.classList[action]?.(className)
                forceUpdate([])
              }}
            >
              {code || ''}
            </Resume>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playground
