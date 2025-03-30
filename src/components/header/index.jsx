import "./index.css";

const Header = () => {
  return (
    <header>
      <h2 className="logo">EcoTech</h2>
      <nav className="navbar">
        <ul className="navbar-links-group">
          <li>
            <a className="navbar-link" href="#call-to-action">Call to action</a>
          </li>
          <li>
            <a className="navbar-link" href="#results">Results</a>
          </li>
          <li>
            <a className="navbar-link" href="#products">Products</a>
          </li>
          <li>
            <a className="navbar-link" href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a className="navbar-link" href="#savings">Savings</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;