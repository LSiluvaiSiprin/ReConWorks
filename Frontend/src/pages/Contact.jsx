import { useState } from "react";
import Button from "../components/Button";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      // MongoDB API will be connected later.
      // For now, testing frontend only.

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(
        "Your message has been sent successfully. We will contact you soon!"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">

      {/* ================================
          HERO
      ================================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>
            Let's Build Something
            <span> Great Together</span>
          </h1>

          <p>
            Have a construction project in mind?
            Contact our team and let us help turn
            your vision into reality.
          </p>

        </div>

      </section>


      {/* ================================
          CONTACT SECTION
      ================================= */}

      <section className="contact-section">

        <div className="contact-container">

          {/* CONTACT INFORMATION */}

          <div className="contact-info">

            <h2>
              Contact <span>Us</span>
            </h2>

            <p className="contact-description">
              Whether you are planning a new construction,
              renovation, or commercial project, our team
              is ready to help.
            </p>


            {/* Location */}

            <div className="contact-info-item">

              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <div>
                <h3>Our Location</h3>

                <p>
                  Chennai, Tamil Nadu, India
                </p>
              </div>

            </div>


            {/* Phone */}

            <div className="contact-info-item">

              <div className="contact-icon green">
                <i className="fa-solid fa-phone"></i>
              </div>

              <div>
                <h3>Phone Number</h3>

                <p>
                  +91 98765 43210
                </p>
              </div>

            </div>


            {/* Email */}

            <div className="contact-info-item">

              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>

              <div>
                <h3>Email Address</h3>

                <p>
                  reconworks@gmail.com
                </p>
              </div>

            </div>


            {/* Working Hours */}

            <div className="contact-info-item">

              <div className="contact-icon green">
                <i className="fa-solid fa-clock"></i>
              </div>

              <div>
                <h3>Working Hours</h3>

                <p>
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>

            </div>


            {/* Social */}

            <div className="contact-social">

              <h3>Follow Us</h3>

              <div className="contact-social-links">

                <a href="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a href="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="#" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a href="#" aria-label="Twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>

              </div>

            </div>

          </div>


          {/* CONTACT FORM */}

          <div className="contact-form-wrapper">

            <div className="contact-form-header">

              <h2>
                Send Us a Message
              </h2>

              <p>
                Fill out the form below and our team
                will get back to you shortly.
              </p>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* Success */}

              {success && (
                <div className="contact-message success">

                  <i className="fa-solid fa-circle-check"></i>

                  <span>{success}</span>

                </div>
              )}


              {/* Error */}

              {error && (
                <div className="contact-message error">

                  <i className="fa-solid fa-circle-exclamation"></i>

                  <span>{error}</span>

                </div>
              )}


              {/* Name + Email */}

              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label htmlFor="contact-name">
                    Full Name
                  </label>

                  <div className="contact-input-wrapper">

                    <i className="fa-solid fa-user"></i>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />

                  </div>

                </div>


                <div className="contact-form-group">

                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <div className="contact-input-wrapper">

                    <i className="fa-solid fa-envelope"></i>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />

                  </div>

                </div>

              </div>


              {/* Phone + Subject */}

              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label htmlFor="contact-phone">
                    Phone Number
                  </label>

                  <div className="contact-input-wrapper">

                    <i className="fa-solid fa-phone"></i>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />

                  </div>

                </div>


                <div className="contact-form-group">

                  <label htmlFor="contact-subject">
                    Subject
                  </label>

                  <div className="contact-input-wrapper">

                    <i className="fa-solid fa-tag"></i>

                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                    />

                  </div>

                </div>

              </div>


              {/* Message */}

              <div className="contact-form-group full-width">

                <label htmlFor="contact-message">
                  Message
                </label>

                <div className="contact-input-wrapper textarea-wrapper">

                  <i className="fa-solid fa-message"></i>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows="6"
                    required
                  ></textarea>

                </div>

              </div>


              {/* Submit */}

              <div className="contact-submit">

                <Button
                  type="submit"
                  variant="primary"
                  disabled={loading}
                  icon={
                    loading
                      ? "fa-solid fa-spinner fa-spin"
                      : "fa-solid fa-paper-plane"
                  }
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>

              </div>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;
