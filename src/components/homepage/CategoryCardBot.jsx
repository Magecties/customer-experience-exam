import "../../css/HomePage.css";

const CATEGORIES = [
  { label: "Clothing", image: "../public/home-img/1.svg" },
  { label: "Footwear", image: "../public/home-img/4.svg" },
  { label: "Accessories", image: "../public/home-img/5.svg" },
];

export default function CategoryCardBot() {
  return (
    <div className="category-grid">
      {CATEGORIES.map((cat) => (
        <div className="category-card" key={cat.label}>
          <img src={cat.image} alt={cat.label} />
          <span className="category-label">{cat.label}</span>
        </div>
      ))}
    </div>
  );
}
