import { useEffect,useContext,useState } from "react"

import "./About.css"

import cv from "./cv/cv.pdf"
import img from "../img/sj1.png"

import { inglesAbaut } from "./AbaoutData"
import { españolAbaut } from "./AbaoutData"


import ClickContext from "../Context/EfectoClick"

export default function Abaout(){
    const{Volver,traslate} = useContext(ClickContext);
    console.log(traslate);
    const [idioma, setIdioma] = useState([]);
    
    useEffect(()=>{
      if(!traslate)setIdioma(inglesAbaut)
      if(traslate)setIdioma(españolAbaut)
    },[traslate])
    
    
    
    
    return(
      <div className="about">
       
        {Volver  &&  <> <h1 >{idioma[0]}</h1>
        
        <div className="my-info">
        <img  src={img} alt="" />
        
        <h1>{idioma[1]}</h1>
          <div className="conten">
          <h3>{idioma[2]}</h3>
            <hr/>
          <p>{idioma[3]}</p>
          <br/>
          <br/>
          
          <h3>{idioma[4]}</h3>
            <hr/>
            <p>{idioma[5]}</p>       
           <br/>
           <br/>
           
           <h3>{idioma[6]}</h3>
            <hr/>
            <p>{idioma[7]}</p>       
           <br/>
           <br/>
           
           <h4>{idioma[8]}<a href={cv} download style={{color:"red"}} >pdf</a></h4>
           
          </div>
        
        </div></>}
        
      </div>
      )
}