import "../css/HomePage.css";

const CATEGORIES = [
  { label: "All Items", image: "../public/home-img/1.svg" },
  { label: "Tops", image: "../public/home-img/2.svg" },
  { label: "Bottoms", image: "../public/home-img/3.svg" },
  { label: "Footwear", image: "../public/home-img/4.svg" },
  {
    label: "Accessories",
    image: "../public/home-img/5.svg",
  },
  {
    label: "New Arrivals",
    image: "../public/home-img/6.svg",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <div className="category-card" key={cat.label}>
            <img src={cat.image} alt={cat.label} />
            <span className="category-label">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
