import { useState } from "react";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import ProductAccordion from "./ProductAccordion";

export default function ProductSidebar({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? null);
  const [selectedSize, setSelectedSize] = useState("XS");

  return (
    <div className="product-sidebar">
      <h1 className="product-name">{product.title}</h1>
      <p className="product-price">{product.price} DKK</p>

      <ColorSelector
        colors={product.colors}
        selected={selectedColor}
        onSelect={setSelectedColor}
      />

      <SizeSelector
        sizes={["XS", "S", "M", "L", "XL"]}
        selected={selectedSize}
        onSelect={setSelectedSize}
      />

      <button className="add-to-cart">ADD TO CART</button>

      <ProductAccordion sections={[
        { title: "Description", content: product.description },
        { title: "Materials", content: product.materials },
        { title: "Size Guide", content: product.sizeGuide },
        { title: "Shipping", content: product.shipping },
      ]} />
    </div>
  );
}