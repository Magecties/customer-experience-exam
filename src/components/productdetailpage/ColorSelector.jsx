export default function ColorSelector({ colors, selected, onSelect }) {
  if (!colors || colors.length === 0) return null;

  return (
    <div className="color-selector">
      <p>COLOR: <span>{selected}</span></p>
      <div className="color-circles">
        {colors.map(color => (
          <button
            key={color}
            className={`color-circle ${selected === color ? "active" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => onSelect(color)}
          />
        ))}
      </div>
    </div>
  );
}