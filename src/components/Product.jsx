import { useState } from "react"



export default function Product({ product }) {

const [hovered, setHovered] = useState(false)

return (
<article className="product-card">
<img
        src={hovered ? product.imageHover : product.image}
        className="product-image"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />

<div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description || "No descripton available"}</p>
        <p className="product-price">DKK {product.price}</p>
</div>

</article>


)

}