import { useState } from "react";
import "../css/ProductAccordion.css";

export default function ProductAccordion({ sections }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="accordion">
      {sections.map(({ title, content }) => (
        <div key={title} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => setOpen(open === title ? null : title)}
          >
            {title} <span>{open === title ? "›" : "‹"}</span>
          </button>
          {open === title && (
            <p className="accordion-content">{content}</p>
          )}
        </div>
      ))}
    </div>
  );
}