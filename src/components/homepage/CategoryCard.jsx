import "../../css/HomePage.css";
import { Link } from "react-router";

export default function CategoryCard({
  label1,
  image1,
  label2,
  image2,
  label3,
  image3,
}) {
  return (
    <div className="category-grid">
      <Link
        to="/products"
        className="category-card"
        aria-label={`${label1} - go to products`}
      >
        <img src={image1} alt={label1} />
        <span className="category-label">{label1}</span>
      </Link>
      <Link
        to="/products"
        className="category-card"
        aria-label={`${label2} - go to products`}
      >
        <img src={image2} alt={label2} />
        <span className="category-label">{label2}</span>
      </Link>
      <Link
        to="/products"
        className="category-card"
        aria-label={`${label3} - go to products`}
      >
        <img src={image3} alt={label3} />
        <span className="category-label">{label3}</span>
      </Link>
    </div>
  );
}
