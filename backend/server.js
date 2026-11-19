
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Database connection
const connectDB = require("./config/db");

// Routes
const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/contacts", contactRoutes);

// Test API
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "ReConWorks Backend is Running!"
    });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API Route Not Found"
    });
});

// Server configuration
const PORT = process.env.PORT || 5000;

// Connect MongoDB and start server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log("--------------------------------");
            console.log("ReConWorks Backend Started");
            console.log(`Server: http://localhost:${PORT}`);
            console.log("MongoDB: Connected");
            console.log("--------------------------------");
        });

    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();
