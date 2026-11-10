import type { ChangeEvent } from 'react'
import { useTemplate } from '../contexts/template'

const templateNameList = ['default', 'nova']

const Template: React.FC = () => {
  const { template, setTemplate } = useTemplate()
  const onTemplate = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setTemplate(value)
  }
  return (
    <label className="text-sm">
      切换模板：
      <select
        className="dark:bg-dark-400"
        onChange={onTemplate}
        defaultValue={template}
      >
        {templateNameList.map((name) => {
          return (
            <option
              value={name}
              key={name}
            >
              {name}
            </option>
          )
        })}
      </select>
    </label>
  )
}

export default Template
