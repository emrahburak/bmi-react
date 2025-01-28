import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CountProvider from './components/Provider/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </StrictMode>,
)
