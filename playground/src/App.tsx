import type { RouteObject } from 'react-router-dom'
import { Link, Navigate, useLocation, useRoutes } from 'react-router-dom'
import Playground from './pages/Playground'
import { Show } from './pages/Show'

const routes: RouteObject[] = [
  {
    path: '/playground',
    element: <Playground />,
  },
  {
    path: '/resume',
    element: <Show />,
  },
  {
    path: '*',
    element: <Navigate to="/playground" />,
  },
]

const App = () => {
  const element = useRoutes(routes)
  const location = useLocation()
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 flex gap-x-2 z-1000">
        <a
          href="https://github.com/Dunqing/resume"
          target="_blank"
          className="hover:text-blue-700 transition-colors underline cursor flex items-center"
          rel="noreferrer"
        >
          <i
            className="
            inline-block
            r-mdi-github text-lg
            dark:text-light
            m-r-1
          "
          />
          <span>项目地址</span>
        </a>
        {location.pathname.startsWith('/playground') ? null : (
          <Link
            to="/playground"
            className="hover:text-blue-700 underline transition-colors cursor flex items-center"
          >
            <span>Playground</span>
          </Link>
        )}
        {location.pathname.startsWith('/resume') ? null : (
          <Link
            to="/resume"
            className="hover:text-blue-700 underline transition-colors cursor flex items-center"
          >
            <span>简历示例</span>
          </Link>
        )}
      </div>
      {element}
    </div>
  )
}

export default App
