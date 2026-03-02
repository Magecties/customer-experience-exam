import { NavLink } from "react-router";
import "../css/NavbarHero.css";

export default function NavbarHero() {
  return (
    <nav className="hero-nav">
      <NavLink to="/">All Items</NavLink>
      <NavLink to="/tops">Tops</NavLink>
      <NavLink to="/bottoms">Bottoms</NavLink>
      <NavLink to="/footwear">Footwear</NavLink>
      <NavLink to="/accessories">Accessories</NavLink>
      <NavLink to="/new-arrivals">New Arrivals</NavLink>
    </nav>
  );
}
