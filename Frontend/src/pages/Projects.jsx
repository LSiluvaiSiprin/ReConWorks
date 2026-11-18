import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCards";
import "../styles/Projects.css";
import modern from "../assets/image/modern.webp";
import office from "../assets/image/office.jpg";
import renovation from "../assets/image/renovation.jpeg";
import luxindes from "../assets/image/Luxury_Interior_Design.jpg"
import flores from "../assets/image/Two_Floor_Residence.webp";
import mall from "../assets/image/mall.jpg";

function Projects() {
  return (
    <main className="projects-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="projects-hero">

        <div className="projects-hero-content">

          <span className="section-label">
            OUR PROJECTS
          </span>

          <h1>
            Projects Built With
            <span> Quality </span>
          </h1>

          <p>
            Explore our completed construction, renovation
            and interior projects delivered with quality,
            reliability and professional workmanship.
          </p>

        </div>

      </section>


      {/* =====================================
          PROJECT STATS
      ===================================== */}

      <section className="project-stats">

        <div className="project-stats-container">

          <div className="project-stat">

            <i className="fa-solid fa-building"></i>

            <strong>500+</strong>

            <span>Projects</span>

          </div>


          <div className="project-stat">

            <i className="fa-solid fa-house"></i>

            <strong>300+</strong>

            <span>Homes</span>

          </div>


          <div className="project-stat">

            <i className="fa-solid fa-city"></i>

            <strong>100+</strong>

            <span>Commercial</span>

          </div>


          <div className="project-stat">

            <i className="fa-solid fa-users"></i>

            <strong>200+</strong>

            <span>Clients</span>

          </div>

        </div>

      </section>


      {/* =====================================
          PROJECT LIST
      ===================================== */}

      <section className="projects-section">

        <div className="projects-header">

          <span className="section-label">
            FEATURED WORK
          </span>

          <h2>
            Our Recent Projects
          </h2>

          <p>
            A selection of projects that demonstrate our
            commitment to quality and professional work.
          </p>

        </div>


        <div className="projects-grid">


          {/* Project 1 */}

          <ProjectCard
            image={modern}
            category="Residential"
            title="Modern Family Home"
            description="A contemporary residential building designed with spacious rooms, modern architecture and quality finishing."
            technologies={[
              "Construction",
              "Architecture",
              "Interior"
            ]}
          />


          {/* Project 2 */}

          <ProjectCard
            image={office}
            category="Commercial"
            title="Modern Office Building"
            description="A professional commercial space designed to provide a productive and comfortable working environment."
            technologies={[
              "Commercial",
              "Civil Work",
              "Interior"
            ]}
          />


          {/* Project 3 */}

          <ProjectCard
            image={renovation}
            category="Renovation"
            title="Complete Home Renovation"
            description="A complete transformation of an existing home with modern interiors, improved spaces and fresh finishing."
            technologies={[
              "Renovation",
              "Painting",
              "Interior"
            ]}
          />


          {/* Project 4 */}

          <ProjectCard
            image={luxindes}
            category="Interior"
            title="Luxury Interior Design"
            description="A stylish interior project combining modern design, functional spaces and premium finishing."
            technologies={[
              "Interior",
              "Design",
              "Finishing"
            ]}
          />


          {/* Project 5 */}

          <ProjectCard
            image={flores}
            category="Residential"
            title="Two Floor Residence"
            description="A spacious two-floor residence developed with a focus on durability, functionality and modern design."
            technologies={[
              "Residential",
              "Civil Work",
              "Finishing"
            ]}
          />


          {/* Project 6 */}

          <ProjectCard
            image={mall}
            category="Commercial"
            title="Retail Space Development"
            description="A modern retail space developed to provide an attractive layout and practical customer experience."
            technologies={[
              "Commercial",
              "Construction",
              "Interior"
            ]}
          />

        </div>

      </section>


      {/* =====================================
          PROJECT PROCESS
      ===================================== */}

      <section className="project-process">

        <div className="projects-header">

          <span className="section-label">
            OUR APPROACH
          </span>

          <h2>
            How We Build
          </h2>

          <p>
            Every project follows a structured process to
            maintain quality and reliability.
          </p>

        </div>


        <div className="project-process-grid">


          {/* 01 */}

          <div className="project-process-card">

            <div className="process-icon">

              <i className="fa-solid fa-clipboard-list"></i>

            </div>

            <span>01</span>

            <h3>Plan</h3>

            <p>
              We understand your requirements and prepare
              a clear project plan.
            </p>

          </div>


          {/* 02 */}

          <div className="project-process-card">

            <div className="process-icon green">

              <i className="fa-solid fa-compass-drafting"></i>

            </div>

            <span>02</span>

            <h3>Design</h3>

            <p>
              Our team develops practical and modern
              designs based on your needs.
            </p>

          </div>


          {/* 03 */}

          <div className="project-process-card">

            <div className="process-icon">

              <i className="fa-solid fa-helmet-safety"></i>

            </div>

            <span>03</span>

            <h3>Build</h3>

            <p>
              Professional workers execute the project
              using quality materials and methods.
            </p>

          </div>


          {/* 04 */}

          <div className="project-process-card">

            <div className="process-icon green">

              <i className="fa-solid fa-circle-check"></i>

            </div>

            <span>04</span>

            <h3>Deliver</h3>

            <p>
              We complete final quality checks and deliver
              the finished project.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          CTA
      ===================================== */}

      <section className="projects-cta">

        <div className="projects-cta-content">

          <span className="section-label">
            START YOUR PROJECT
          </span>

          <h2>
            Want to Build Something Great?
          </h2>

          <p>
            Share your project requirements with us and
            let's turn your ideas into reality.
          </p>

          <Link
            to="/booking"
            className="projects-cta-button"
          >

            <i className="fa-solid fa-calendar-check"></i>

            Book a Service

          </Link>

        </div>

      </section>

    </main>
  );
}

export default Projects;