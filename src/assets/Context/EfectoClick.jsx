import { createContext,useState,useContext } from "react";
import HoverContext from "./EfecHover";


    const ClickContext= createContext();
    
    
    const ClickProvider=({children})=>{
      const [traslate, setTraslate] = useState(null);
      
      const [Volver, setVolver] = useState();
    const {setMouse,setMouse2,setMouse3,setMsjOculto,msjOculto} = useContext(HoverContext);
    

    const hanldeTraslate =(e)=>{
        let eTV = e.target.value;
        if(eTV === "ES") setTraslate(false)
        if(eTV === "EN") setTraslate(true)
        
    }
    
    
    const handleClickHome=()=>{
        setMouse(null)
        setMouse2(null)
        setMouse3(null)
        setVolver(true)
        setMsjOculto(null)
    console.log(msjOculto);
        
      }
      const handleClickVolver=()=>{
        setVolver(null)
      }
    
    
    
    const data={handleClickVolver,handleClickHome,Volver,traslate,hanldeTraslate};
    
    return(
        <ClickContext.Provider value={data} >{children}</ClickContext.Provider>
    )
    }
    
    
    export {ClickProvider};
    export default ClickContext;