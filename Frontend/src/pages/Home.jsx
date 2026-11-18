import ServiceCard from "../components/ServiceCards";
import ProjectCard from "../components/ProjectCards";
import Button from "../components/Button";
import "../styles/Home.css";
import modern from "../assets/image/modern.webp";
import office from "../assets/image/office.jpg";
import renovation from "../assets/image/renovation.jpeg";

function Home() {
  return (
    <main className="home-page">
      {/* ================================
          HERO SECTION
      ================================= */}

      <section className="home-hero">
        <div className="home-hero-container">
          <div className="home-hero-content">
            <span className="section-label">
              <i className="fa-solid fa-hard-hat"></i>
              PROFESSIONAL CONSTRUCTION
            </span>

            <h1>
              Building Your
              <span> Dreams </span>
              With Quality
            </h1>

            <p>
              ReConWorks provides reliable construction, renovation and interior
              solutions with professional workmanship and quality materials.
            </p>

            <div className="home-hero-buttons">
              <Button
                to="/booking"
                variant="primary"
                icon="fa-solid fa-calendar-check"
              >
                Book a Service
              </Button>

              <Button
                to="/projects"
                variant="secondary"
                icon="fa-solid fa-arrow-right"
              >
                View Projects
              </Button>
            </div>

            <div className="home-trust">
              <div className="trust-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Quality Work</span>
              </div>

              <div className="trust-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Professional Team</span>
              </div>

              <div className="trust-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="home-hero-image">
            <div className="hero-image-card">
              <div className="hero-image-icon">
                <i className="fa-solid fa-building"></i>
              </div>

              <h3>Building Better</h3>

              <p>Strong foundations. Quality construction.</p>
            </div>

            <div className="hero-building-icon">
              <i className="fa-solid fa-city"></i>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          STATS
      ================================= */}

      <section className="home-stats">
        <div className="home-stats-container">
          <div className="home-stat">
            <div className="home-stat-icon">
              <i className="fa-solid fa-building"></i>
            </div>

            <strong>500+</strong>
            <span>Projects Completed</span>
          </div>

          <div className="home-stat">
            <div className="home-stat-icon green">
              <i className="fa-solid fa-house"></i>
            </div>

            <strong>300+</strong>
            <span>Homes Built</span>
          </div>

          <div className="home-stat">
            <div className="home-stat-icon">
              <i className="fa-solid fa-users"></i>
            </div>

            <strong>200+</strong>
            <span>Happy Clients</span>
          </div>

          <div className="home-stat">
            <div className="home-stat-icon green">
              <i className="fa-solid fa-award"></i>
            </div>

            <strong>20+</strong>
            <span>Years Experience</span>
          </div>
        </div>
      </section>

      {/* ================================
          SERVICES
      ================================= */}

      <section className="home-services">
        <div className="home-section-header">
          <span className="section-label">OUR SERVICES</span>

          <h2>
            Complete Construction
            <span> Solutions</span>
          </h2>

          <p>
            From new construction to renovation and interiors, we provide
            complete solutions for residential and commercial projects.
          </p>
        </div>

        <div className="home-services-grid">
          <ServiceCard
            icon="fa-solid fa-building"
            title="Building Construction"
            description="Professional construction services for residential and commercial buildings."
          />

          <ServiceCard
            icon="fa-solid fa-house-chimney"
            title="Home Renovation"
            description="Transform your existing home with modern designs and quality finishing."
          />

          <ServiceCard
            icon="fa-solid fa-paint-roller"
            title="Interior Design"
            description="Beautiful and functional interiors designed according to your requirements."
          />

          <ServiceCard
            icon="fa-solid fa-screwdriver-wrench"
            title="Remodeling"
            description="Upgrade and remodel your existing spaces with professional workmanship."
          />
        </div>

        <div className="home-services-button">
          <Button
            to="/services"
            variant="secondary"
            icon="fa-solid fa-arrow-right"
          >
            Explore All Services
          </Button>
        </div>
      </section>

      {/* ================================
          WHY CHOOSE US
      ================================= */}

      <section className="home-why">
        <div className="home-why-container">
          <div className="home-why-content">
            <span className="section-label">WHY RECONWORKS</span>

            <h2>
              Quality Construction
              <span> You Can Trust</span>
            </h2>

            <p>
              We focus on quality, transparency and customer satisfaction
              throughout every stage of your construction project.
            </p>

            <div className="why-list">
              <div className="why-item">
                <div className="why-icon">
                  <i className="fa-solid fa-medal"></i>
                </div>

                <div>
                  <h3>Quality Materials</h3>
                  <p>
                    We use reliable and quality materials for long-lasting
                    construction.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon green">
                  <i className="fa-solid fa-user-tie"></i>
                </div>

                <div>
                  <h3>Professional Team</h3>
                  <p>
                    Skilled professionals handle every project with care and
                    expertise.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">
                  <i className="fa-solid fa-clock"></i>
                </div>

                <div>
                  <h3>On-Time Delivery</h3>
                  <p>
                    We follow a structured process to complete projects within
                    the planned timeline.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon green">
                  <i className="fa-solid fa-headset"></i>
                </div>

                <div>
                  <h3>Customer Support</h3>
                  <p>
                    Our team is available to support you throughout your
                    construction journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="home-why-card">
            <div className="why-card-icon">
              <i className="fa-solid fa-helmet-safety"></i>
            </div>

            <h3>Built With Confidence</h3>

            <p>
              Every project is carefully planned, professionally executed and
              quality checked before delivery.
            </p>

            <div className="why-card-line"></div>

            <div className="why-card-bottom">
              <strong>100%</strong>
              <span>Commitment</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          FEATURED PROJECTS
      ================================= */}

      <section className="home-projects">
        <div className="home-section-header">
          <span className="section-label">FEATURED PROJECTS</span>

          <h2>
            Our Recent
            <span> Work</span>
          </h2>

          <p>
            Explore some of our recent construction, renovation and interior
            projects.
          </p>
        </div>

        <div className="home-projects-grid">
          <ProjectCard
            image={modern}
            category="Residential"
            title="Modern Family Home"
            description="A contemporary residential building designed with spacious rooms, modern architecture and quality finishing."
            technologies={["Construction", "Architecture", "Interior"]}
          />

          <ProjectCard
            image={office}
            category="Commercial"
            title="Modern Office Building"
            description="A professional commercial space designed for a productive and comfortable working environment."
            technologies={["Commercial", "Civil Work", "Interior"]}
          />

          <ProjectCard
            image={renovation}
            category="Renovation"
            title="Complete Home Renovation"
            description="A complete transformation of an existing home with modern interiors and fresh finishing."
            technologies={["Renovation", "Painting", "Interior"]}
          />
        </div>

        <div className="home-projects-button">
          <Button
            to="/projects"
            variant="secondary"
            icon="fa-solid fa-arrow-right"
          >
            View All Projects
          </Button>
        </div>
      </section>

      {/* ================================
          PROCESS
      ================================= */}

      <section className="home-process">
        <div className="home-section-header">
          <span className="section-label">OUR PROCESS</span>

          <h2>
            How We
            <span> Work</span>
          </h2>

          <p>
            A simple and transparent process to turn your construction ideas
            into reality.
          </p>
        </div>

        <div className="home-process-grid">
          <div className="home-process-card">
            <div className="process-number">01</div>

            <div className="home-process-icon">
              <i className="fa-solid fa-clipboard-list"></i>
            </div>

            <h3>Consultation</h3>

            <p>We understand your requirements, budget and project goals.</p>
          </div>

          <div className="home-process-card">
            <div className="process-number">02</div>

            <div className="home-process-icon green">
              <i className="fa-solid fa-compass-drafting"></i>
            </div>

            <h3>Planning & Design</h3>

            <p>
              Our team creates a clear plan and practical design for your
              project.
            </p>
          </div>

          <div className="home-process-card">
            <div className="process-number">03</div>

            <div className="home-process-icon">
              <i className="fa-solid fa-helmet-safety"></i>
            </div>

            <h3>Construction</h3>

            <p>
              Skilled professionals execute the project using quality materials.
            </p>
          </div>

          <div className="home-process-card">
            <div className="process-number">04</div>

            <div className="home-process-icon green">
              <i className="fa-solid fa-circle-check"></i>
            </div>

            <h3>Final Delivery</h3>

            <p>
              We perform final quality checks and deliver your completed
              project.
            </p>
          </div>
        </div>
      </section>

      {/* ================================
          CTA
      ================================= */}

      <section className="home-cta">
        <div className="home-cta-content">
          <span className="section-label">START YOUR PROJECT</span>

          <h2>
            Ready to Build
            <span> Your Dream?</span>
          </h2>

          <p>
            Tell us about your project and our professional team will help you
            take the next step.
          </p>

          <div className="home-cta-buttons">
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

export default Home;
