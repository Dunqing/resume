import clsx from 'clsx'

interface ThemeButtonProps {
  theme: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function ThemeButton({ theme, onClick }: ThemeButtonProps) {
  if (!theme) return null

  return (
    <button
      title="主题"
      onClick={onClick}
      className={clsx(
        'r-carbon-sun text-lg hover:text-gray transition-colors',
        'dark:r-carbon-moon dark:text-light',
      )}
    />
  )
}
