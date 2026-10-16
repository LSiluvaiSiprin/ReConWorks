import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-column footer-brand">
          <Link to="/" className="footer-logo">
            ReCon<span>Works</span>
          </Link>

          <p>
            Professional construction, renovation and interior services
            delivered with quality, reliability and trusted workmanship.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="mailto:info@reconworks.com" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <ul>
            <li>
              <Link to="/services">Building Construction</Link>
            </li>

            <li>
              <Link to="/services">Renovation</Link>
            </li>

            <li>
              <Link to="/services">Interior Design</Link>
            </li>

            <li>
              <Link to="/services">Remodeling</Link>
            </li>

            <li>
              <Link to="/booking">Book a Service</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>

            <div>
              <span>Location</span>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon green">
              <i className="fa-solid fa-phone"></i>
            </div>

            <div>
              <span>Phone</span>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>

            <div>
              <span>Email</span>
              <a href="mailto:info@reconworks.com">info@reconworks.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {currentYear} ReConWorks. All rights reserved.</p>

          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
