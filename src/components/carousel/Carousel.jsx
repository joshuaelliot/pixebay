import { useState, useRef, useEffect } from "react";
import images from "../../json/images.json";
import CarouselItem from "./Carousel-item";
import CarouselButton from "./Carousel-button";
import NextArrow from "./icons/Next-arrow";
import BackArrow from "./icons/Back-arrow"
import "./style/carousel.css";


export default function Carousel() {
  const refContainer = useRef(null);
  const [widthImage, setWidthImage] = useState(0);
  const [indexImage, setIndexImage] = useState(0);

  const handleNext = () => {

    setIndexImage(prevIndex => {
        let nextIndex = prevIndex;
        if (nextIndex <= images.length -2) {
            nextIndex += 1
          refContainer.current.scrollTo({
            left: widthImage * nextIndex,
            behavior: "smooth",
          });
          console.log("next", nextIndex);
        }
        return nextIndex;
      });
  };
  const handlePrev = () => {
  /* indexImage--
    refContainer.current.scrollTo({
        left:widthImage * indexImage,
        behavior:"smooth",
    })
    console.log("atras",indexImage);
*/

setIndexImage(prevIndex => {
    let nextIndex = prevIndex;
    if (nextIndex >= 1) {
        nextIndex -= 1
      refContainer.current.scrollTo({
        left: widthImage * nextIndex,
        behavior: "smooth",
      });
      console.log("next", nextIndex);
    }
    return nextIndex;
  });
};

  const resize = ()=>{
    let width = refContainer.current.firstChild.offsetWidth;
    setWidthImage(width);
    console.log("ancho resize: ",width)
  }

  useEffect(() => {

    if(widthImage == 0){
        setWidthImage(refContainer.current.firstChild.offsetWidth);
    }
    window.addEventListener("resize",resize);
    console.log("montado", widthImage);

    return ()=>{
        window.removeEventListener("resize",resize);
    }
  }, []);

  return (
    <section className="section-carousel-container">
      <div ref={refContainer} className="carousel-container">
        {images.map((image, index) => {
          return (
            <CarouselItem
              key={index}
              imageUrl={image.imgUrl}
              imageAlt={image.nombreImg}
            />
          );
        })}
      </div>
      <CarouselButton icono={BackArrow} type="prev" title="atras" handle={handlePrev} />
      <CarouselButton icono={NextArrow} type="next" title="next" handle={handleNext} />
    </section>
  );
}
