import "./style/gallery-item.css";
 export default function GalleryItem(props){
    return(
        <>
         <figure className='gallery-item'>
        <img src={props.imgUrl} alt={props.imgAlt}/>
        </figure>
        </>
    )
}

