
import { useEffect, useState } from "react";
import "./prueba.css";

export default function Prueba() {
  const [scrollState, setScrollState] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 100){
        setScrollState(true);
      }else if( window.scrollY < 100){
        setScrollState(false);
      }
    }
    window.addEventListener("scroll",handleScroll);

    return ()=>{ window.removeEventListener("scroll",handleScroll)};
  },[])
  
  return (
    <>
      <div className={`prueba-container`}>
      <nav className={scrollState ? 'scrolled' : 'unscrolled'}>
          <ul>
          <li id="logo-container">
          <button className="btn-menu-mobile">
              <img src="../../public/deno.svg"></img>
            </button>
          </li>
            <li>Iniciar Sesion</li>
            <li>Unirse</li>
            <li id="sing-in-container">
            <a className="btn-sing-in-menu-desktop">Sing In </a> 
            <button className="btn-menu-mobile">
              <img src="../../public/deno.svg"></img>
            </button>
            </li>
          </ul>
        </nav>
        <img
          src="https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_1280.jpg"
          alt="imagen de prueba "
        ></img>
      </div>
    </>
  );
}
