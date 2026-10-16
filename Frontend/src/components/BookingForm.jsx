import { useState } from "react";
import Button from "./Button";
import "../styles/BookForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    address: "",
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

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.date ||
      !formData.address
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      /*
        MongoDB API connection will be added later.

        Example:

        const response = await fetch(
          "http://localhost:5000/api/bookings",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
      */

      // Temporary success for frontend testing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess("Your booking request has been submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        address: "",
        message: "",
      });
    } catch (err) {
      console.error("Booking error:", err);

      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      {/* Messages */}

      {success && (
        <div className="booking-message success">
          <i className="fa-solid fa-circle-check"></i>
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div className="booking-message error">
          <i className="fa-solid fa-circle-exclamation"></i>
          <span>{error}</span>
        </div>
      )}

      {/* Name */}

      <div className="form-group">
        <label htmlFor="booking-name">Full Name</label>

        <div className="input-wrapper">
          <i className="fa-solid fa-user"></i>

          <input
            id="booking-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
      </div>

      {/* Email */}

      <div className="form-group">
        <label htmlFor="booking-email">Email Address</label>

        <div className="input-wrapper">
          <i className="fa-solid fa-envelope"></i>

          <input
            id="booking-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      {/* Phone */}

      <div className="form-group">
        <label htmlFor="booking-phone">Phone Number</label>

        <div className="input-wrapper">
          <i className="fa-solid fa-phone"></i>

          <input
            id="booking-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>

      {/* Service */}

      <div className="form-group">
        <label htmlFor="booking-service">Select Service</label>

        <div className="input-wrapper select-wrapper">
          <i className="fa-solid fa-screwdriver-wrench"></i>

          <select
            id="booking-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Choose a service</option>

            <option value="Building Construction">Building Construction</option>

            <option value="Renovation">Renovation</option>

            <option value="Interior Design">Interior Design</option>

            <option value="Remodeling">Remodeling</option>
          </select>
        </div>
      </div>

      {/* Date */}

      <div className="form-group">
        <label htmlFor="booking-date">Preferred Date</label>

        <div className="input-wrapper">
          <i className="fa-solid fa-calendar"></i>

          <input
            id="booking-date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
          />
        </div>
      </div>

      {/* Address */}

      <div className="form-group full-width">
        <label htmlFor="booking-address">Project Address</label>

        <div className="input-wrapper textarea-wrapper">
          <i className="fa-solid fa-location-dot"></i>

          <textarea
            id="booking-address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your project address"
            rows="3"
            required
          ></textarea>
        </div>
      </div>

      {/* Message */}

      <div className="form-group full-width">
        <label htmlFor="booking-message">
          Project Details
          <span>Optional</span>
        </label>

        <div className="input-wrapper textarea-wrapper">
          <i className="fa-solid fa-message"></i>

          <textarea
            id="booking-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows="5"
          ></textarea>
        </div>
      </div>

      {/* Submit */}

      <div className="booking-submit full-width">
        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          icon={
            loading ? "fa-solid fa-spinner fa-spin" : "fa-solid fa-paper-plane"
          }
        >
          {loading ? "Submitting..." : "Submit Booking"}
        </Button>
      </div>
    </form>
  );
}

export default BookingForm;
