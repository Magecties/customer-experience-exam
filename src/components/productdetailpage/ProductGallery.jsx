import { useState } from "react";
import "../../css/ProductGallery.css";

export default function ProductGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayImages = images.slice(0, 3);

  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        <img src={displayImages[activeIndex]} alt={title} />
      </div>
      <div className="product-gallery-thumbs">
        {displayImages.map((img, i) => (
          <button
            key={i}
            type="button"
            className={`thumb-btn${i === activeIndex ? " active" : ""}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`View image ${i + 1}`}
          >
            <img src={img} alt={`${title} view ${i + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
