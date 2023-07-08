import { createContext, useState } from "react";

const HoverContext = createContext();

const HoverProvider = ({ children }) => {
  const [mouse, setMouse] = useState(null);

  const [mouse2, setMouse2] = useState(null);

  const [mouse3, setMouse3] = useState(null);
  
  const [msjOculto, setMsjOculto] = useState(true);

  const handleMouseEnter = (e) => {
    if (e.target.id === "1") setMouse(true);
    if (e.target.id === "2") setMouse2(true);
    if (e.target.id === "3") setMouse3(true);
  };

  const handleMouseLeave = (e) => {
    if (e.target.id === "1") setMouse(null);
    if (e.target.id === "2") setMouse2(null);
    if (e.target.id === "3") setMouse3(null);
  };

  const clickHover=(e)=>{
    
    if(window.innerWidth<800){
      setMouse(true);
    setMouse2(true);
    setMouse3(true);
  
  
    if(mouse){
      setMouse(null);
     setMouse2(null);
     setMouse3(null);
    
    }
    }
    
  }
  const data = {
    mouse,
    mouse2,
    mouse3,
    setMouse,
    setMouse2,
    setMouse3,
    handleMouseEnter,
    handleMouseLeave,
    clickHover,
    msjOculto,
    setMsjOculto
  };

  return <HoverContext.Provider value={data}>{children}</HoverContext.Provider>;
};

export { HoverProvider };
export default HoverContext;
