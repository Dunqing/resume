import type { RouteObject } from 'react-router-dom'
import { Navigate, useRoutes } from 'react-router-dom'
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

function App() {
  const element = useRoutes(routes)
  return (
    <div className="relative">
      <div>{element}</div>
    </div>
  )
}

export default App
