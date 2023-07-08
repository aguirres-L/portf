import React from "react";
import "./All.css";



import unoVete from "../../img/Vete/Captura.jpg"
import dosVete from "../../img/Vete/Captura2.jpg"
import tresVete from "../../img/Vete/Captura3.jpg"
import cuatroVete from "../../img/Vete/Captura4.jpg"

const imagesVete = [
  { id: 1, src: unoVete},
  { id: 2, src: dosVete},
  { id: 3, src: tresVete},
  { id: 4, src: cuatroVete }
];



export default function Vete(){

    const [currentImageIndex1, setCurrentImageIndex1] = React.useState(0);

    const handleNextImage1 = () => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % imagesVete.length);
    console.log('hola desde nex');
    };
  
    const handlePrevImage1 = () => {
      setCurrentImageIndex1((prevIndex) =>
        prevIndex === 0 ? imagesVete.length - 1 : prevIndex - 1
      );
     console.log('hola desde prev');
    };

    return (
        <div className="container-All">
        
        
        <section className="carousel-section">
            <div className="carousel">
              {imagesVete.map((image, index) => (
                <a href="https://github.com/aguirres-L/Proyecto-final">
                <img
                  key={image.id}
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className={index === currentImageIndex1 ? "active" : ""}
                />
                </a>
              
              ))}
            </div>
            <button onClick={handlePrevImage1}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><g transform="translate(24 0) scale(-1 1)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0"/></path></g></g></g></svg></button>
            <button onClick={handleNextImage1}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g transform="rotate(90 12 12)"><g transform="rotate(-90 12 12) translate(24 0) scale(-1 1)"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0"/></path></g></g></g></svg></button>
          </section>
          </div>
)}