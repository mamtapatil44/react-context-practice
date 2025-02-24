import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthTokenProvider from './ User-Authentication-Token-Management/auth.provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthTokenProvider>
    <App />
    </AuthTokenProvider>
  
  </StrictMode>,
)
