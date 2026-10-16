import BookingForm from "../components/BookingForm";
import "../styles/Booking.css";

function Booking() {
  return (
    <main className="booking-page">
      {/* =====================================
      BOOKING HERO
  ===================================== */}
      <section className="booking-hero">
        <div className="booking-hero-content">
          <span className="section-label">BOOK A SERVICE</span>

          <h1>
            Let's Build Your
            <span> Dream Project</span>
          </h1>

          <p>
            Tell us about your construction or renovation requirements. Our
            professional team will review your request and get in touch with you
            shortly.
          </p>
        </div>
      </section>
      {/* =====================================
      BOOKING SECTION
  ===================================== */}
      <section className="booking-section">
        <div className="booking-container">
          {/* =================================
          BOOKING INFORMATION
      ================================= */}

          <div className="booking-info">
            <span className="section-label">WHY CHOOSE US</span>

            <h2>
              Plan Your Project
              <br />
              With Confidence
            </h2>

            <p>
              Whether you are planning a new building, renovation, interior
              design or remodeling project, ReConWorks is here to help you from
              planning to completion.
            </p>

            {/* INFO LIST */}

            <div className="booking-info-list">
              <div className="booking-info-item">
                <div className="booking-info-icon">
                  <i className="fa-solid fa-calendar-check"></i>
                </div>

                <div>
                  <h3>Easy Booking</h3>

                  <p>
                    Submit your project requirements through our simple booking
                    form.
                  </p>
                </div>
              </div>

              <div className="booking-info-item">
                <div className="booking-info-icon green">
                  <i className="fa-solid fa-user-tie"></i>
                </div>

                <div>
                  <h3>Professional Team</h3>

                  <p>Work with experienced construction professionals.</p>
                </div>
              </div>

              <div className="booking-info-item">
                <div className="booking-info-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>

                <div>
                  <h3>Quality & Reliability</h3>

                  <p>
                    We focus on quality materials, reliable service and
                    professional workmanship.
                  </p>
                </div>
              </div>

              <div className="booking-info-item">
                <div className="booking-info-icon green">
                  <i className="fa-solid fa-clock"></i>
                </div>

                <div>
                  <h3>Quick Response</h3>

                  <p>
                    Our team will contact you after reviewing your booking
                    request.
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT BOX */}

            <div className="booking-contact-box">
              <div className="booking-contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>

              <div>
                <span>Need help?</span>

                <strong>Contact our project team</strong>
              </div>
            </div>
          </div>

          {/* =================================
          BOOKING FORM
      ================================= */}

          <div className="booking-form-wrapper">
            <div className="booking-form-header">
              <h2>Project Booking Form</h2>

              <p>Fill in your project details below.</p>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>
      {/* =====================================
      BOOKING NOTE
  ===================================== */}
      <div className="booking-note">
        <div className="booking-note-icon">
          <i className="fa-solid fa-circle-info"></i>
        </div>

        <div>
          <h3>What happens after booking?</h3>

          <p>
            After submitting your request, our team will review your project
            details and contact you to discuss your requirements, estimated cost
            and next steps.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Booking;
