'use client'

import Image from 'next/image'

import type * as monaco from 'monaco-editor'
import type { ChangeHandler } from 'react-monaco-editor'
import MonacoEditor from 'react-monaco-editor'
import { languages } from 'monaco-editor'
import { useState } from 'react'
import Resume from '../components/Resume'
import content from './default.md'

// import { CodeViewer } from "./components/code-viewer"
// import { MaxLengthSelector } from "./components/maxlength-selector"
// import { ModelSelector } from "./components/model-selector"
// import { PresetActions } from "./components/preset-actions"
// import { PresetSave } from "./components/preset-save"
// import { PresetSelector } from "./components/preset-selector"
// import { PresetShare } from "./components/preset-share"
// import { TemperatureSelector } from "./components/temperature-selector"
// import { TopPSelector } from "./components/top-p-selector"
// import { models, types } from "./data/models"
// import { presets } from "./data/presets"
import { Separator } from '@/components/ui'
import { TemplateSelector } from '@/components/template-selector'
import { presets } from '@/data/presets'

// import Template from '../components/Template'

languages.register({
  id: 'markdown',
})

export default function PlaygroundPage() {
  const [code, setCode] = useState(content)
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
    <>
      <div className="md:hidden">
        <Image
          src="/examples/playground-light.png"
          width={1280}
          height={916}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/playground-dark.png"
          width={1280}
          height={916}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <Image
            src="/resume.svg"
            width={60 * 2.5}
            height={18 * 2.5}
            alt="Playground"
            className="block dark:hidden"
          />
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            <TemplateSelector presets={presets} />
            {/* <PresetSave /> */}
            <div className="hidden space-x-2 md:flex">
              {/* <CodeViewer /> */}
              {/* <PresetShare /> */}
            </div>
            {/* <PresetActions /> */}
          </div>
        </div>
        <Separator />
        <div className="dark:bg-dark-400 playground flex items-center flex-col justify-center relative sm:black">
          <div className="w-full flex justify-center items-center md:h-screen">
            <div className="w-full grid md:grid-cols-2 grid-cols-1 md:overflow-hidden h-full">
              <div className="hidden md:block h-full md:h-full">
                <MonacoEditor
                  language="markdown"
                  value={code}
                  options={options}
                  onChange={onEditorChange}
                />
              </div>
              <div className="md:h-full md:overflow-y-auto">
                <Resume>{code || ''}</Resume>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
