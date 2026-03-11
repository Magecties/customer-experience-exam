import "../../css/ProductGallery.css";

export default function ProductGallery({ images, title }) {
  const displayImages = images.slice(0, 4);

  return (
    <div className="product-gallery">
      {displayImages.map((img, i) => (
        <div key={i} className="product-gallery-item">
          <img src={img} alt={`${title} view ${i + 1}`} />
        </div>
      ))}
    </div>
  );
}
