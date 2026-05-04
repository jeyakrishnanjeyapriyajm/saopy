const {
  sendBusinessEmail,
  sendCustomerEmail,
} = require("../services/mailService");

const { appendContactRow } = require("../utils/googleSheets");

exports.handleContactForm = async (req, res) => {
  try {
    const data = {
      full_name: req.body.full_name?.trim(),
      phone_number: req.body.phone_number?.trim(),
      email: req.body.email?.trim(),
      service_type: req.body.service_type?.trim(),
      pickup_address: req.body.pickup_address?.trim(),
      postcode: req.body.postcode?.trim() || "",
      message: req.body.message?.trim() || "No message provided",
    };

    const {
      full_name,
      phone_number,
      email,
      service_type,
      pickup_address,
    } = data;

    if (!full_name || !phone_number || !email || !service_type || !pickup_address) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    await sendBusinessEmail(data);
    await sendCustomerEmail(data);

    try {
      await appendContactRow(data);
    } catch (sheetError) {
      console.error("Google Sheet failed:", sheetError.message);
    }

    return res.status(200).json({
      success: true,
      message: "Request sent successfully",
    });
  } catch (err) {
    console.error("CONTACT FORM ERROR:", err);
    return res.status(500).json({
      success: false,
      message: "Email sending failed. Please try again.",
    });
  }
};