import GalleryItem from "./Gallery-item";
import images from "../../json/images.json";
import "./style/gallery.css";
export default function Gallery() {
  return (
    <section>
      <div className="gallery-container">
        {images.map((image) => {
          return (
            <GalleryItem
              key={image.id}
              imgUrl={image.imgUrl}
              imgAlt={image.nombreImg}
            />
          );
        })}
      </div>
    </section>
  );
}
