import "../css/ProductGallery.css";

export default function ProductGallery({ images }) {
  return (
    <div className="product-gallery">
      {images.map((img, i) => (
        <img key={i} src={img} alt={`product-${i}`} />
      ))}
    </div>
  );
}

