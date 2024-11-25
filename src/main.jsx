import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// styles 
import "./styles/bootstrap.css"
import "./styles/default.css"
import "./styles/swiper.css"
import "./styles/index.css"
import "./styles/tabView1.css"
import "./styles/tabView2.css"
import "./styles/mobile-view.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
