import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HoverProvider } from "./assets/Context/EfecHover.jsx";
import { ClickProvider } from './assets/Context/EfectoClick.jsx';
//import { TraslateProvider } from './assets/Context/Traslate.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  
   <HoverProvider>
    <ClickProvider>
    
    
      <App />
    
      
    </ClickProvider>
   </HoverProvider>
  
  </React.StrictMode>,
)
