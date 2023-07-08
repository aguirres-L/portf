import React from "react";
import "./All.css";


import uno from "../../img/Card/Captura1.jpg"
import dos from "../../img/Card/Captura2.jpg"
import tres from "../../img/Card/Captura3.jpg"
import cuatro from "../../img/Card/Captura4.jpg"

const images = [
  { id: 1, src: uno },
  { id: 2, src: dos },
  { id: 3, src:  tres},
  { id: 4, src: cuatro }
];



export default function Car(){

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log('hola desde nex');
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
     console.log('hola desde prev');
    };

    return (
        <div className="container-All">
        
        
        <section className="carousel-section">
            <div className="carousel">
              {images.map((image, index) => (
              <a href="https://github.com/aguirres-L/cba-JD">
                <img
                  key={image.id}
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className={index === currentImageIndex ? "active" : ""}
                />
              </a>
              ))}
            </div>
            <button onClick={handlePrevImage}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><g transform="translate(24 0) scale(-1 1)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0"/></path></g></g></g></svg></button>
            <button onClick={handleNextImage}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g transform="rotate(90 12 12)"><g transform="rotate(-90 12 12) translate(24 0) scale(-1 1)"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0"/></path></g></g></g></svg></button>
         </section>
          </div>
)}