import "../css/HomePage.css";

const CATEGORIES = [
  { label: "All Items", image: "https://picsum.photos/seed/allitems/600/500" },
  { label: "Tops", image: "https://picsum.photos/seed/tops/600/500" },
  { label: "Bottoms", image: "https://picsum.photos/seed/bottoms/600/500" },
  { label: "Footwear", image: "https://picsum.photos/seed/footwear/600/500" },
  {
    label: "Accessories",
    image: "https://picsum.photos/seed/accessories/600/500",
  },
  {
    label: "New Arrivals",
    image: "https://picsum.photos/seed/newarrivals/600/500",
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
