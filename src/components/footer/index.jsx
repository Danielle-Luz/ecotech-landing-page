import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer-wrapper">
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
          <article className="subscribe-email-field-wrapper">
            <label htmlFor="subscribe-email" hidden>Insert your email to subscribe</label>
            <input id="subscribe-email-field" className="form-field-1 subscribe-email-field" placeholder="Enter your email here..." />
            <button className="button-2">Subscribe</button>
          </article>
        </article>
      </article>
      <p className="footer-copywright text-2">© 2023 EcoTech Solutions.</p>
    </footer>
  );
};

export default Footer;
