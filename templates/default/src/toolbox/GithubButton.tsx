import clsx from 'clsx'

interface GithubLinkProps {
  github?: string
}

export function GithubLink({ github }: GithubLinkProps) {
  if (!github) return null

  return (
    <a
      aria-label="项目地址"
      title="github"
      href={github}
      className={clsx(
        'r-carbon-logo-github text-lg hover:text-gray transition-colors',
        'dark:text-light',
      )}
    />
  )
}
