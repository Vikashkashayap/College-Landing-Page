import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sponser from './component/Sponser.jsx'
import Watsup from './component/watsup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      
    <App />
    

    
  </StrictMode>,
)
