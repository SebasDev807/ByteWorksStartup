import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import './normalize.css'
import ByteWorksApp from './ByteWorksApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ByteWorksApp/>
  </StrictMode>,
)
