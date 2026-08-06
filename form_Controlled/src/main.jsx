import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UnControlled from './UnControlled-form.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UnControlled/>
  </StrictMode>,
)
