
const Contact = require("../models/Contact");

// Create new contact message
const createContact = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, phone, email and message are required"
            });
        }

        // Save contact message
        const contact = await Contact.create({
            name,
            email,
            phone,
            subject,
            message
        });

        res.status(201).json({
            success: true,
            message: "Contact message submitted successfully",
            contact
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get all contact messages
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: contacts.length,
            contacts
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createContact,
    getContacts
};