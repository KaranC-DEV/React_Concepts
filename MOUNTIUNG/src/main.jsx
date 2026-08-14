import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './resizeWindowEX'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <resizeWindowEX />
  </StrictMode>,
)
