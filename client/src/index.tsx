import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { App } from './App'
import { RouterComponent } from './router/Router'
import { components } from './components/components'
import './styles/scss/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App Router={RouterComponent} Components={components} />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
