import { BrowserRouter as Router,
  Routes,
  Route,
  NavLink
  } from "react-router-dom";
import './App.css'
import { useState,useContext } from 'react';

// Context
import HoverContext from "./assets/Context/EfecHover";
import ClickContext from "./assets/Context/EfectoClick";
// component
import Abaout from "./assets/Components/Abaout";
import Work from "./assets/Components/Work";
import FormDom from "./assets/Components/Contac/Contact";

function App() {

  const {mouse,mouse2,mouse3,handleMouseEnter,handleMouseLeave,clickHover,msjOculto} = useContext(HoverContext);
  const{Volver,handleClickVolver,handleClickHome,traslate,hanldeTraslate} = useContext(ClickContext)
  let home,
        home2;

  let ingleshome=["Hello.","I am","Agustín"],
      ingleshome2=["Abaut me","Work","Contact"]
    
  let  españolhome=["Hola.","Soy","Agustín"],
      españolhome2=["Sobre mi","Trabajos","Contacto"]
    
    
   {!traslate ?(home=ingleshome):(home=españolhome)}
   {!traslate ?(home2=ingleshome2):(home2=españolhome2)}
  
  

    
  
    

  
   
  
  return (
    <div className="info">
  
      <button className="traslate" value={!traslate ?"EN":"ES"} onClick={e=>hanldeTraslate(e)} >
        {!traslate ?"ES":"EN"}
      </button>
      {window.innerWidth <800 && !Volver && <>{msjOculto && <button className="text-oculto"  onClick={clickHover} >click me</button>}</>}
      
      {!Volver ?<div className="img"></div>:""}
    <Router>
        
        
        <div className={!Volver ?"cotainer":"cotainer menor"}>
        
        {!Volver 
          ?<NavLink
          to="/about"
          className={!mouse ? "nav1" :"nav1 margin1"}
          onClick={handleClickHome}
          id="1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          
          {!mouse ?home[0] : home2[0]}
          
          </NavLink>
          
          :"" 
        }
        
        {!Volver 
          ?<NavLink
          className={!mouse2 ? "nav" :"nav margin"}
          to="work"
           id="2"
           onClick={handleClickHome}
           onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            
          {!mouse2 ? home[1]: home2[1]}
          
          </NavLink>
          :""
        }
        
        
        
        {!Volver 
        ?<NavLink
        className={!mouse3 ? "nav" :"nav margin"}
        onClick={handleClickHome}
        to="/contact"
        id="3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
      
      {!mouse3 ? home[2] : home2[2]}
       
        </NavLink>
        :""
        }
        
       {Volver 
       ? <NavLink
       className="voler"
       onClick={handleClickVolver}
       to="/home" 
       >Return</NavLink>
       :""
       }
        
      </div>
      
     
      <Routes>
      
      
        <Route path="/about" element={<Abaout  />}></Route>
        <Route path="/work" element={<Work/>}></Route>
        <Route path="/contact" element={<FormDom/>}></Route>
      
      </Routes>
      
    </Router>
        
        
      </div>
      
      
  )
}

export default App
