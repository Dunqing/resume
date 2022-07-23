import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TemplateProvider } from './contexts/template'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TemplateProvider>
        <App />
      </TemplateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
