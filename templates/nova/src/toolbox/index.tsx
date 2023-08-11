import clsx from 'clsx'
import { useTemplate } from '@resumejs/template'
import { GithubLink } from './GithubButton'
import { PrintButton } from './PrintButton'
import { ThemeButton } from './ThemeButton'

interface ToolboxProps {
  meta: any
  className?: string
}

const Toolbox: React.FC<ToolboxProps> = ({ meta, ...props }) => {
  const { toggleTheme, print, extraToolboxButton } = useTemplate()

  return (
    <div
      {...props}
      className={clsx(
        'absolute right-4 top-2 flex gap-x-1.5 print:hidden',
        props.className,
      )}
    >
      {extraToolboxButton}
      <GithubLink github={meta.github} />
      <PrintButton
        onClick={print}
        print={meta.print}
      />
      <ThemeButton
        onClick={() => toggleTheme()}
        theme={meta.theme}
      />
    </div>
  )
}

export default Toolbox
