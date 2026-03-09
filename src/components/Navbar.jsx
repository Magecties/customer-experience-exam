import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import "../css/navbar.css";

export default function Navbar() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLightMode);
  }, [isLightMode]);

  return (
    <nav className="main-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <button
        className="theme-toggle"
        onClick={() => setIsLightMode((prev) => !prev)}
        aria-label="Toggle light mode"
      />
    </nav>
  );
}
