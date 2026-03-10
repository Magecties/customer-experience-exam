import "../../css/HomePage.css";

export default function CategoryCard({ label1, image1, label2, image2, label3, image3 }) {
  return (
    <div className="category-grid">
      <div className="category-card">
        <img src={image1} alt={label1} />
        <span className="category-label">{label1}</span>
      </div>
      <div className="category-card">
        <img src={image2} alt={label2} />
        <span className="category-label">{label2}</span>
      </div>
      <div className="category-card">
        <img src={image3} alt={label3} />
        <span className="category-label">{label3}</span>
      </div>
    </div>
  );
}
