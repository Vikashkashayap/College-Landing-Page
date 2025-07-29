import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sponser from './component/Sponser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <Sponser/>  */}
    <App />
    {/* <h1>Hellooo</h1> */}

    
  </StrictMode>,
)
