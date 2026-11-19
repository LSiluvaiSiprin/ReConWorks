
const Booking = require("../models/Booking");

// Create new booking
const createBooking = async (req, res) => {
  try {
    const { userId, name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }

    const booking = await Booking.create({
      userId,
      name,
      email,
      phone,
      service,
      message
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get all bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createBooking,
  getBookings
};
