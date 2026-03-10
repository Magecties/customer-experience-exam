import "../../css/HomePage.css";

export default function DualImageHero({
  label1,
  image1,
  label2,
  image2,
}) {
  return (
    <div className="dual-grid">
      <div className="dual-card">
        <img src={image1} alt={label1} />
        <span className="dual-label">{label1}</span>
      </div>
      <div className="dual-card">
        <img src={image2} alt={label2} />
        <span className="dual-label">{label2}</span>
      </div>
    </div>
  );
}
