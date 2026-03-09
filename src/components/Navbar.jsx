import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import "../css/navbar.css";
import Logo from "../assets/img/Logo.svg";
import SearchIcon from "../assets/img/Search.svg";
import ProfileIcon from "../assets/img/Profile.svg";
import BagIcon from "../assets/img/Bag.svg";

export default function Navbar() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLightMode);
  }, [isLightMode]);

  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <NavLink to="/">
          <img src={Logo} alt="Wanted logo" className="nav-logo-img" />
        </NavLink>
      </div>

      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Events
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Us
        </NavLink>
      </div>

      <div className="nav-icons">
        <button
          className="theme-toggle"
          onClick={() => setIsLightMode((prev) => !prev)}
          aria-label="Toggle light mode"
        />
        <button className="nav-icon-btn" aria-label="Search">
          <img src={SearchIcon} alt="Search" />
        </button>
        <button className="nav-icon-btn" aria-label="Profile">
          <img src={ProfileIcon} alt="Profile" />
        </button>
        <button className="nav-icon-btn" aria-label="Bag">
          <img src={BagIcon} alt="Bag" />
        </button>
      </div>
    </nav>
  );
}
