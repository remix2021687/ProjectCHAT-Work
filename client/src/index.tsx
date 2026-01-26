import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { App } from './App'
import './styles/scss/index.scss'
import { RouterComponent } from './router/Router'
import { components } from './components/components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App Router={RouterComponent} Components={components} />
    </BrowserRouter>
  </StrictMode>,
)
