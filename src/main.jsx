import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ✅ बस इतना ही code रखें, HashRouter की जरूरत नहीं
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)