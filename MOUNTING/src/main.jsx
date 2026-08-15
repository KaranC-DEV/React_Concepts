import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import time from './ex1_timer'
import Resize_window from './ex2_resize'
import Unmount from './ex3_Unmounting'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <App/> */}
  {/* <Resize_window/> */}
  <Unmount/>
  </StrictMode>,
)
