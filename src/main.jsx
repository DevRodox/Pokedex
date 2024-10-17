import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PruebaTecnicaApp } from './PruebaTecnicaApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PruebaTecnicaApp />
  </StrictMode>,
)
