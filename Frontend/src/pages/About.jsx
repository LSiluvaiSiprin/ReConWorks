import Button from "../components/Button";
import "../styles/About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="section-label">ABOUT RECONWORKS</span>

          <h1>
            Building With
            <span> Trust & Quality</span>
          </h1>

          <p>
            ReConWorks is a professional construction and remodeling service
            platform designed to connect customers with reliable construction
            professionals.
          </p>
        </div>
      </section>

      {/* =====================================
      ABOUT INTRO
  ===================================== */}

      <section className="about-intro">
        <div className="about-intro-container">
          <div className="about-intro-content">
            <span className="section-label">WHO WE ARE</span>

            <h2>
              Turning Ideas Into
              <span> Real Spaces</span>
            </h2>

            <p>
              At ReConWorks, we believe that every construction project starts
              with an idea. Our goal is to make the journey from planning to
              completion simple, transparent and reliable.
            </p>

            <p>
              From residential construction and commercial buildings to
              renovation and interior design, we provide solutions that focus on
              quality, functionality and customer satisfaction.
            </p>

            <div className="about-highlights">
              <div className="about-highlight">
                <i className="fa-solid fa-circle-check"></i>
                <span>Quality Workmanship</span>
              </div>

              <div className="about-highlight">
                <i className="fa-solid fa-circle-check"></i>
                <span>Professional Service</span>
              </div>

              <div className="about-highlight">
                <i className="fa-solid fa-circle-check"></i>
                <span>Reliable Support</span>
              </div>

              <div className="about-highlight">
                <i className="fa-solid fa-circle-check"></i>
                <span>Customer Satisfaction</span>
              </div>
            </div>
          </div>

          {/* ABOUT VISUAL */}

          <div className="about-visual">
            <div className="about-main-card">
              <div className="about-main-icon">
                <i className="fa-solid fa-building"></i>
              </div>

              <h3>Professional Construction</h3>

              <p>
                Building better spaces with quality, planning and professional
                execution.
              </p>
            </div>

            <div className="about-small-card card-one">
              <i className="fa-solid fa-helmet-safety"></i>

              <div>
                <strong>Experienced</strong>
                <span>Professionals</span>
              </div>
            </div>

            <div className="about-small-card card-two">
              <i className="fa-solid fa-award"></i>

              <div>
                <strong>Quality</strong>
                <span>Assured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
      STATS
  ===================================== */}

      <section className="about-stats">
        <div className="about-stats-container">
          <div className="about-stat">
            <i className="fa-solid fa-building"></i>
            <strong>500+</strong>
            <span>Projects Completed</span>
          </div>

          <div className="about-stat">
            <i className="fa-solid fa-users"></i>
            <strong>200+</strong>
            <span>Happy Clients</span>
          </div>

          <div className="about-stat">
            <i className="fa-solid fa-calendar-check"></i>
            <strong>20+</strong>
            <span>Years Experience</span>
          </div>

          <div className="about-stat">
            <i className="fa-solid fa-user-tie"></i>
            <strong>50+</strong>
            <span>Professionals</span>
          </div>
        </div>
      </section>

      {/* =====================================
      MISSION & VISION
  ===================================== */}

      <section className="mission-section">
        <div className="about-section-heading">
          <span className="section-label">OUR PURPOSE</span>

          <h2>
            What Drives <span>Us</span>
          </h2>

          <p>
            We are committed to making construction services more accessible,
            reliable and customer-friendly.
          </p>
        </div>

        <div className="mission-grid">
          {/* MISSION */}

          <div className="mission-card">
            <div className="mission-icon">
              <i className="fa-solid fa-bullseye"></i>
            </div>

            <div>
              <h3>Our Mission</h3>

              <p>
                To provide dependable construction, renovation and interior
                services while maintaining high standards of quality,
                transparency and customer satisfaction.
              </p>
            </div>
          </div>

          {/* VISION */}

          <div className="mission-card vision">
            <div className="mission-icon">
              <i className="fa-solid fa-eye"></i>
            </div>

            <div>
              <h3>Our Vision</h3>

              <p>
                To become a trusted construction service platform that helps
                customers turn their ideas into high-quality and practical
                spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
      VALUES
  ===================================== */}

      <section className="values-section">
        <div className="about-section-heading">
          <span className="section-label">OUR VALUES</span>

          <h2>
            Built On Strong
            <span> Values</span>
          </h2>

          <p>
            Every project we handle is guided by the values that define
            ReConWorks.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>

            <h3>Trust</h3>

            <p>
              We build long-term relationships through honest and transparent
              service.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon green">
              <i className="fa-solid fa-star"></i>
            </div>

            <h3>Quality</h3>

            <p>
              We focus on delivering reliable work with attention to every
              important detail.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <i className="fa-solid fa-handshake"></i>
            </div>

            <h3>Reliability</h3>

            <p>
              We aim to provide dependable support throughout every stage of
              your project.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon green">
              <i className="fa-solid fa-users"></i>
            </div>

            <h3>Customer First</h3>

            <p>
              Your requirements and satisfaction remain at the center of
              everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
      CTA
  ===================================== */}

      <section className="about-cta">
        <div className="about-cta-content">
          <span className="section-label">START TODAY</span>

          <h2>
            Ready To Build Your
            <span> Dream Project?</span>
          </h2>

          <p>
            Tell us about your project and let our professional team help you
            take the next step.
          </p>

          <a href="/booking" className="about-cta-button">
            <i className="fa-solid fa-calendar-check"></i>
            Book a Service
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;
