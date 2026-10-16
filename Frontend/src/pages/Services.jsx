import ServiceCard from "../components/ServiceCards";
import Button from "../components/Button";
import "../styles/ServiceCard.css";

function Services() {
  return (
    <main className="services-page">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="services-hero">
        <div className="services-hero-content">
          <span className="section-label">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            OUR SERVICES
          </span>

          <h1>
            Professional
            <span> Construction </span>
            Services
          </h1>

          <p>
            From new construction to renovation and interior design, ReConWorks
            provides reliable and professional solutions for residential and
            commercial projects.
          </p>
        </div>
      </section>

      {/* ========================================
          SERVICES
      ======================================== */}

      <section className="services-section">
        <div className="services-header">
          <span className="section-label">WHAT WE DO</span>

          <h2>
            Complete Solutions
            <span> For Your Project</span>
          </h2>

          <p>
            Choose from our range of professional construction and remodeling
            services designed to meet your requirements.
          </p>
        </div>

        <div className="services-grid">
          <ServiceCard
            icon="fa-solid fa-building"
            title="Building Construction"
            description="Complete building construction services with quality materials, skilled workers and professional project management."
          />

          <ServiceCard
            icon="fa-solid fa-house-chimney"
            title="Residential Construction"
            description="We build comfortable and durable homes with modern designs that match your lifestyle and requirements."
          />

          <ServiceCard
            icon="fa-solid fa-city"
            title="Commercial Construction"
            description="Professional commercial construction solutions for offices, shops and other business spaces."
          />

          <ServiceCard
            icon="fa-solid fa-hammer"
            title="Renovation"
            description="Transform your existing property with renovation solutions that improve appearance, functionality and comfort."
          />

          <ServiceCard
            icon="fa-solid fa-paint-roller"
            title="Interior Design"
            description="Modern and functional interior solutions designed to create beautiful and comfortable living and working spaces."
          />

          <ServiceCard
            icon="fa-solid fa-screwdriver-wrench"
            title="Remodeling"
            description="Upgrade your existing spaces with professional remodeling and improvement services."
          />
        </div>
      </section>

      {/* ========================================
          WHY CHOOSE OUR SERVICES
      ======================================== */}

      <section className="services-benefits">
        <div className="services-benefits-container">
          <div className="services-benefits-content">
            <span className="section-label">WHY CHOOSE US</span>

            <h2>
              Construction Made
              <span> Simple</span>
            </h2>

            <p>
              We make the construction process easier with transparent
              communication, professional workmanship and a customer-first
              approach.
            </p>

            <div className="benefit-list">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fa-solid fa-medal"></i>
                </div>

                <div>
                  <h3>Quality Workmanship</h3>

                  <p>
                    Every project is completed with attention to detail and
                    quality standards.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon green">
                  <i className="fa-solid fa-users"></i>
                </div>

                <div>
                  <h3>Experienced Team</h3>

                  <p>
                    Our skilled professionals handle each stage of the project
                    with care.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fa-solid fa-clock"></i>
                </div>

                <div>
                  <h3>Timely Completion</h3>

                  <p>
                    We follow organized project planning to maintain expected
                    timelines.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon green">
                  <i className="fa-solid fa-handshake"></i>
                </div>

                <div>
                  <h3>Trusted Service</h3>

                  <p>
                    We focus on clear communication and customer satisfaction
                    throughout the project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="services-benefits-card">
            <div className="services-card-icon">
              <i className="fa-solid fa-helmet-safety"></i>
            </div>

            <h3>Let's Build Together</h3>

            <p>
              Have a construction or renovation project in mind? Tell us what
              you need and our team will help you get started.
            </p>

            <Button
              to="/booking"
              variant="primary"
              icon="fa-solid fa-calendar-check"
            >
              Book a Service
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================
          PROCESS
      ======================================== */}

      <section className="services-process">
        <div className="services-header">
          <span className="section-label">OUR PROCESS</span>

          <h2>
            From Idea To
            <span> Reality</span>
          </h2>

          <p>
            We follow a simple process to make your construction experience
            smooth and transparent.
          </p>
        </div>

        <div className="services-process-grid">
          <div className="services-process-card">
            <span>01</span>

            <div className="services-process-icon">
              <i className="fa-solid fa-comments"></i>
            </div>

            <h3>Discuss</h3>

            <p>Tell us about your requirements, ideas and project goals.</p>
          </div>

          <div className="services-process-card">
            <span>02</span>

            <div className="services-process-icon green">
              <i className="fa-solid fa-pen-ruler"></i>
            </div>

            <h3>Plan</h3>

            <p>We prepare a clear plan based on your project requirements.</p>
          </div>

          <div className="services-process-card">
            <span>03</span>

            <div className="services-process-icon">
              <i className="fa-solid fa-helmet-safety"></i>
            </div>

            <h3>Build</h3>

            <p>
              Our professional team executes the project using quality materials
              and methods.
            </p>
          </div>

          <div className="services-process-card">
            <span>04</span>

            <div className="services-process-icon green">
              <i className="fa-solid fa-circle-check"></i>
            </div>

            <h3>Complete</h3>

            <p>We perform final checks and deliver the completed project.</p>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA
      ======================================== */}

      <section className="services-cta">
        <div className="services-cta-content">
          <span className="section-label">START TODAY</span>

          <h2>
            Have a Project in
            <span> Mind?</span>
          </h2>

          <p>
            Share your requirements with us and let's discuss how we can turn
            your ideas into reality.
          </p>

          <div className="services-cta-buttons">
            <Button
              to="/booking"
              variant="primary"
              icon="fa-solid fa-calendar-check"
            >
              Book a Service
            </Button>

            <Button to="/contact" variant="secondary" icon="fa-solid fa-phone">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
