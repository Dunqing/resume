import type * as monaco from 'monaco-editor'
import type { ChangeHandler } from 'react-monaco-editor'
import MonacoEditor from 'react-monaco-editor'
import { editor, languages } from 'monaco-editor'
import { useState } from 'react'
import useResume from '../hooks/useResume'
import Resume from '../components/Resume'
import Template from '../components/Template'
import './playground.css'
import githubDarkTheme from '../constants/github-dark-theme'
import githubLightTheme from '../constants/github-light-theme'

editor.defineTheme('github-light', githubLightTheme)
editor.defineTheme('github-dark', githubDarkTheme)

languages.register({
  id: 'markdown',
})

function Playground() {
  const [code, setCode] = useResume()
  const [, forceUpdate] = useState([])

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
      <div className="print:hidden text-lg xs:block sm:hidden p-y-2 font-bold">
        <span className="text-red">注意</span>：请在大屏幕下编辑简历！
      </div>
      <div className="flex justify-center items-center md:h-screen">
        <div className="grid md:grid-cols-2 grid-cols-1 md:overflow-hidden h-full">
          <div className="hidden md:block h-full md:h-full">
            <MonacoEditor
              language="markdown"
              value={code}
              options={options}
              theme={
                document.body.classList.contains('dark')
                  ? 'github-dark'
                  : 'github-light'
              }
              onChange={onEditorChange}
            />
          </div>
          <div className="md:h-full md:overflow-y-auto">
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
