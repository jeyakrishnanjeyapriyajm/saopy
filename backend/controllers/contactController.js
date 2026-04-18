const {
  sendBusinessEmail,
  sendCustomerEmail,
} = require("../services/mailService");
const { appendContactRow } = require("../utils/googleSheets");

exports.handleContactForm = async (req, res) => {
  try {
    const data = req.body;

    const {
      full_name,
      phone_number,
      email,
      service_type,
      pickup_address,
      message,
    } = data;

    if (
      !full_name ||
      !phone_number ||
      !email ||
      !service_type ||
      !pickup_address ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    try {
      await sendBusinessEmail(data);
      console.log("Business email sent");
    } catch (err) {
      console.error("Business email failed:", err.message);
      throw new Error(`Business email failed: ${err.message}`);
    }

    try {
      await sendCustomerEmail(data);
      console.log("Customer email sent");
    } catch (err) {
      console.error("Customer email failed:", err.message);
      throw new Error(`Customer email failed: ${err.message}`);
    }

    try {
      await appendContactRow(data);
      console.log("Google Sheet row added");
    } catch (err) {
      console.error("Google Sheet failed:", err.message);
      throw new Error(`Google Sheet failed: ${err.message}`);
    }

    return res.status(200).json({
      success: true,
      message: "Request sent successfully",
    });
  } catch (err) {
    console.error("MAIL / SHEET ERROR:", err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};