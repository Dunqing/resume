import clsx from 'clsx'
import type { RouteObject } from 'react-router-dom'
import { Link, Navigate, useLocation, useRoutes } from 'react-router-dom'
import Playground from './pages/Playground'
import { Show } from './pages/Show'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Playground />,
  },
  {
    path: '/resume',
    element: <Show />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]

const App = () => {
  const element = useRoutes(routes)
  const location = useLocation()
  return (
    <div className="relative">
      <header
        className={clsx(
          'justify-between p-x-4 p-2 lg:absolute top-2 w-full z-100',
          location.pathname.startsWith('/resume') ? 'hidden' : 'flex'
        )}
      >
        <h1 className="text-2xl font-semibold">在线简历</h1>
        <div
          className={clsx(
            'flex items-center gap-x-2 xs:text-sm text-md leading-normal underline'
          )}
        >
          <Link to="/resume">生成简历</Link>
          <a
            href="https://github.com/Dunqing"
            className="flex items-center gap-x-0.5"
          >
            <i
              className="
            inline-block
            r-mdi-github text-lg
            dark:text-light
          "
            />
          </a>
        </div>
      </header>
      <div>{element}</div>
    </div>
  )
}

export default App
