import "../../css/SizeSelector.css";

export default function SizeSelector({ sizes, selected, onSelect }) {
  return (
    <div className="size-selector">
      <p>
        SIZE: <span>{selected}</span>
      </p>
      <div className="size-buttons">
        {sizes.map((size) => (
          <button
            key={size}
            className={`size-btn ${selected === size ? "active" : ""}`}
            onClick={() => onSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
