import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer-content-wrapper">
        <h2 className="logo-footer">EcoTech</h2>
        <ul className="footer-content">
          <li className="footer-contact-info">
            <h3 className="title-3">Email</h3>
            <p className="text-2">contact@eco.tech.com</p>
          </li>
          <li className="footer-contact-info">
            <h3 className="title-3">Phone number</h3>
            <p className="text-2">(991) 871-9759</p>
          </li>
        </ul>
      </article>
      <article className="footer-content-wrapper">
        <p className="title-3">
          Subscribe to our newsletter for sustainable tips, product updates, and
          exclusive offers.
        </p>
      </article>
    </footer>
  );
};

export default Footer;
