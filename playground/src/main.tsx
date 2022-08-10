import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TemplateProvider } from './contexts/template'
import { createRoot } from 'react-dom/client';

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
