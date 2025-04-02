import { useState } from "react";
import "./index.css";

const Header = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setDisplayMobileMenu(!displayMobileMenu);
  };

  return (
    <header className="header">
      <div className="logo-wrapper">
        <h2 className="logo">EcoTech</h2>
        <button className="hamburguer-menu" onClick={toggleMobileMenu}>
          <img
            src="https://img.icons8.com/ios/250/menu--v7.png"
            alt="menu icon"
          />
        </button>
      </div>
      <nav className={`navbar ${displayMobileMenu ? "showMobileMenu" : ""}`}>
        <ul className="navbar-links-group">
          <li>
            <a className="navbar-link" href="#call-to-action">
              Call to action
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#results">
              Results
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#products">
              Products
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#savings">
              Savings
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
