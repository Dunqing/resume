import clsx from 'clsx'
interface PrintButtonProps {
  print: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const PrintButton = ({ print, onClick }: PrintButtonProps) => {
  if (!print) return null

  return (
    <button
      title="打印"
      onClick={onClick}
      className={clsx(
        'r-carbon-printer text-lg hover:text-gray transition-colors',
        'dark:text-light'
      )}
    />
  )
}
