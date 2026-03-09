import "../css/ticker.css";

const items = [
  "Most Wanted",
  "Lost Boys Archives",
  "Bareen",
  "TwoJeys",
  "Zuno Archives",
  "Scuffers",
  "Attode",
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
