import { createContext,useState } from "react"

const  TrastlateContext = createContext();

const TraslateProvider =({children})=>{

    const [traslate, setTraslate] = useState(null);

    const hanldeTraslate =(e)=>{
        let eTV = e.target.value;
      
      if(eTV.value === "ES") setTraslate(false)
      if(eTV.value === "EN") setTraslate(true)
    }

const data={traslate,hanldeTraslate};

    return(
        <TraslateProvider value={data} >{children}</TraslateProvider>
    )

}

export {TraslateProvider};
export default TrastlateContext;