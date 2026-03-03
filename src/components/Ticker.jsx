import "../css/ticker.css";

const items = [
  "Free exchange",
  "Free delivery on orders over $50",
  "1-3 day delivery",
  "Sustainable materials",
  "Ethically made",
  "Most Wanted",
];

export default function Ticker() {
  const allItems = [...items, ...items];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {allItems.map((item, index) => (
          <span className="ticker-item" key={index}>
            <span className="ticker-dot">✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
