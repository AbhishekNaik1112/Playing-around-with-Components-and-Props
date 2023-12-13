import "../styles/ImageGrid.css";
import { imageData } from "../data/ImageData";

function ImageGrid() {
  return (
    <div>
      {imageData.map((image) => {
        return (
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        );
      })}
    </div>
  );
}

export default ImageGrid;
