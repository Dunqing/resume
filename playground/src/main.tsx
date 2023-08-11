import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { TemplateProvider } from './contexts/template'
import App from './App'
import 'uno.css'
import '@unocss/reset/tailwind.css'

const container = createRoot(document.getElementById('root')!)

container.render(
  <React.StrictMode>
    <BrowserRouter>
      <TemplateProvider>
        <App />
      </TemplateProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
