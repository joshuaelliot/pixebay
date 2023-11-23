import "./style/carousel-button.css"

export default function CarouselButton(props){
    return(
        <button
        disabled={false}
       onClick={props.handle}
         className={`btn-carousel ${props.type}`}>
        {<props.icono/>}
        </button>
    )
}