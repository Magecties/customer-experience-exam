import "../../css/HomePage.css";
import { Link } from "react-router";

export default function DualImageHero({ label1, image1, label2, image2 }) {
  return (
    <div className="dual-grid">
      <Link
        to="/404"
        className="dual-card"
        aria-label={`${label1} - go to 404`}
      >
        <img src={image1} alt={label1} />
        <span className="dual-label">{label1}</span>
      </Link>
      <Link
        to="/404"
        className="dual-card"
        aria-label={`${label2} - go to 404`}
      >
        <img src={image2} alt={label2} />
        <span className="dual-label">{label2}</span>
      </Link>
    </div>
  );
}
