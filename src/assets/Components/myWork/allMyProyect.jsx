import React from "react";
import "./All.css";

import Vete from "./Vete";
import Car from "./Car";
import Pregu from "./Preguntados";
import Clima from "./Clima";
import Nasa from "./Nasa";
import Oxygen from "./Oxygen";



export default function AllMyProyect() {

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <Vete />
        </div>
        <div className="column">
          <Car />
        </div>
        <div className="column">
          <Pregu />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <Clima />
        </div>
        <div className="column">
          <Nasa />
        </div>
        <div className="column">
          <Oxygen />
        </div>
      </div>
    </div>
  );
}



/*      <section>
            <img src={dos} alt="" />
        </section>
        
        <section><img src={tres} alt="" /></section>
        
        <section><img src={ford} alt="" /></section>*/