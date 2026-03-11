import "../../css/ColorSelector.css";

const COLOR_MAP = {
  black: "#1a1a1a",
  white: "#f5f5f5",
  grey: "#808080",
  gray: "#808080",
  blue: "#1e40af",
  "light blue": "#93c5fd",
  "dark blue": "#1e3a5f",
  brown: "#78350f",
  beige: "#d4b896",
};

function toCSS(name) {
  return COLOR_MAP[name.toLowerCase()] ?? name;
}

export default function ColorSelector({ colors, selected, onSelect }) {
  if (!colors || colors.length === 0) return null;

  return (
    <div className="color-selector">
      <p className="color-text">
        COLOR: <span>{selected}</span>
      </p>
      <div className="color-circles">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-circle ${selected === color ? "active" : ""}`}
            style={{ backgroundColor: toCSS(color) }}
            onClick={() => onSelect(color)}
          />
        ))}
      </div>
    </div>
  );
}
