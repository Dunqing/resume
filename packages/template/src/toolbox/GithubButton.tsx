import clsx from 'clsx'
interface GithubLinkProps {
  github?: string
}

export const GithubLink = ({ github }: GithubLinkProps) => {
  if (!github) return null

  return (
    <a
      aria-label="项目地址"
      title="github"
      href={github}
      className={clsx(
        'r-mdi-github text-lg hover:text-gray transition-colors',
        'dark:text-light'
      )}
    />
  )
}
