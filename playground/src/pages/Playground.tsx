import type { ChangeHandler } from 'react-monaco-editor'
import MonacoEditor from 'react-monaco-editor'
import { languages } from 'monaco-editor'
import { useEffect, useRef, useState } from 'react'
import useResume from '../hooks/useResume'
import Resume from '../components/Resume'
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

  const options = {
    selectOnLineNumbers: true,
  }

  const onEditorChange: ChangeHandler = (value) => {
    setCode(value)
  }

  return (
    <div className="playground flex items-center flex-col justify-center relative sm:black">
      <div className="text-lg xs:block sm:hidden p-y-2 font-bold">
        <span className="text-red">注意</span>：请在大屏幕下编辑简历！
      </div>
      <div className="flex justify-center items-center lg:h-screen md:p-x-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 overflow-hidden lg:h-5/6">
          <div className="hidden md:block md:h-55rem lg:h-full">
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
          <Resume
            onDarkClass={(className: string, action) => {
              document.body.classList[action]?.(className)
              forceUpdate([])
            }}
            className="lg:overflow-y-scroll"
          >
            {code || ''}
          </Resume>
        </div>
      </div>
    </div>
  )
}

export default Playground
