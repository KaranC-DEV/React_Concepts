import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Child from './Child.jsx'
import Parent from './Parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parent/>
      </StrictMode>,
)
