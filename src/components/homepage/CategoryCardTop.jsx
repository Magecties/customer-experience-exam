import "../../css/HomePage.css";

const CATEGORIES = [
  { label: "All Items", image: "../public/home-img/2.svg" },
  { label: "Sale", image: "../public/home-img/3.svg" },
  { label: "New Arrivals", image: "../public/home-img/6.svg" },
];

export default function CategoryCardTop() {
  return (
      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <div className="category-card" key={cat.label}>
            <img src={cat.image} alt={cat.label} />
            <span className="category-label">{cat.label}</span>
          </div>
        ))}
      </div>);
}
