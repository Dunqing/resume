import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import { TemplateProvider } from './contexts/template'

const container = createRoot(document.getElementById('root')!)

container.render(
  <React.StrictMode>
    <BrowserRouter>
      <TemplateProvider>
        <App />
      </TemplateProvider>
    </BrowserRouter>
  </React.StrictMode>
)
