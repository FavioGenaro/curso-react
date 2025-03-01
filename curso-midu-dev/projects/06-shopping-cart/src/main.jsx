import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './context/filters.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Envolvemos toda la aplicación con el provedor del contexto
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
