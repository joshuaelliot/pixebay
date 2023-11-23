import "./style/carousel-item.css";
import React from "react";

function CarouselItem(props) {
  return (
    <figure className="carousel-image">
      <img src={props.imageUrl} alt={props.imageAlt}></img>
    </figure>
  );
}



export default CarouselItem;
