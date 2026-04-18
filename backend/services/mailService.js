const path = require("path");
const transporter = require("../config/mailConfig");

const BUSINESS_NAME = "Soapy Suds Laundry";
const WEBSITE_NAME = "Soapy Suds Website";

const BUSINESS_ADDRESS = "3 Quinton Parade, Coventry, CV3 5HW, UK";
const BUSINESS_PHONE = "02476502101";
const BUSINESS_PHONE_LINK = "02476502101";
const BUSINESS_WHATSAPP = "+44 7731 830701";
const BUSINESS_WHATSAPP_LINK = "447731830701";
const BUSINESS_EMAIL = "info.soapysudsshine@gmail.com";

const LOGO_PATH = path.join(__dirname, "../assets/logo.png");
const LOGO_CID = "soapysudslogo";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const nl2br = (value = "") => escapeHtml(value).replace(/\n/g, "<br />");

exports.sendBusinessEmail = async (data) => {
  const {
    full_name,
    phone_number,
    email,
    service_type,
    pickup_address,
    message,
  } = data;

  return transporter.sendMail({
    from: `"${WEBSITE_NAME}" <${process.env.EMAIL_USER}>`,
    to: process.env.BUSINESS_RECEIVER_EMAIL,
    replyTo: email,
    subject: "New Laundry Booking Request",
    attachments: [
      {
        filename: "logo.png",
        path: LOGO_PATH,
        cid: LOGO_CID,
      },
    ],
    html: `
      <div style="margin:0; padding:0; background-color:#f4f7fb; font-family:Arial, Helvetica, sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f7fb; padding:30px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px; background:#ffffff; border-radius:20px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">

                <tr>
                  <td style="background:#ffffff; padding:24px 32px 16px; text-align:center; border-bottom:1px solid #eef2f7;">
                    <img
                      src="cid:${LOGO_CID}"
                      alt="${BUSINESS_NAME}"
                      style="max-width:180px; width:100%; height:auto; display:block; margin:0 auto 12px;"
                    />
                  </td>
                </tr>

                <tr>
                  <td style="background:linear-gradient(135deg, #154a97, #2d7ff9); padding:28px 32px; color:#ffffff;">
                    <p style="margin:0; font-size:13px; letter-spacing:1.5px; text-transform:uppercase; opacity:0.9;">
                      ${BUSINESS_NAME}
                    </p>
                    <h1 style="margin:10px 0 0; font-size:28px; line-height:1.2; font-weight:700;">
                      New Booking Request
                    </h1>
                    <p style="margin:10px 0 0; font-size:15px; line-height:1.6; opacity:0.92;">
                      A new laundry pickup request has been submitted from the website.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:28px 32px 10px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding:14px 16px; background:#f8fbff; border:1px solid #e2ebf5; border-radius:12px;">
                          <p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7a90; text-transform:uppercase;">Full Name</p>
                          <p style="margin:0; font-size:16px; color:#1f2d3d;">${escapeHtml(full_name)}</p>
                        </td>
                      </tr>
                      <tr><td height="12"></td></tr>

                      <tr>
                        <td style="padding:14px 16px; background:#f8fbff; border:1px solid #e2ebf5; border-radius:12px;">
                          <p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7a90; text-transform:uppercase;">Phone Number</p>
                          <p style="margin:0; font-size:16px; color:#1f2d3d;">${escapeHtml(phone_number)}</p>
                        </td>
                      </tr>
                      <tr><td height="12"></td></tr>

                      <tr>
                        <td style="padding:14px 16px; background:#f8fbff; border:1px solid #e2ebf5; border-radius:12px;">
                          <p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7a90; text-transform:uppercase;">Email Address</p>
                          <p style="margin:0; font-size:16px; color:#1f2d3d;">${escapeHtml(email)}</p>
                        </td>
                      </tr>
                      <tr><td height="12"></td></tr>

                      <tr>
                        <td style="padding:14px 16px; background:#f8fbff; border:1px solid #e2ebf5; border-radius:12px;">
                          <p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7a90; text-transform:uppercase;">Service Type</p>
                          <p style="margin:0; font-size:16px; color:#1f2d3d;">${escapeHtml(service_type)}</p>
                        </td>
                      </tr>
                      <tr><td height="12"></td></tr>

                      <tr>
                        <td style="padding:14px 16px; background:#f8fbff; border:1px solid #e2ebf5; border-radius:12px;">
                          <p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7a90; text-transform:uppercase;">Pickup Address</p>
                          <p style="margin:0; font-size:16px; color:#1f2d3d;">${escapeHtml(pickup_address)}</p>
                        </td>
                      </tr>
                      <tr><td height="12"></td></tr>

                      <tr>
                        <td style="padding:14px 16px; background:#f8fbff; border:1px solid #e2ebf5; border-radius:12px;">
                          <p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7a90; text-transform:uppercase;">Message</p>
                          <p style="margin:0; font-size:16px; color:#1f2d3d; line-height:1.7;">${nl2br(message)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 32px 30px;">
                    <a href="mailto:${escapeHtml(email)}" style="display:inline-block; background:#154a97; color:#ffffff; text-decoration:none; padding:14px 22px; border-radius:999px; font-size:14px; font-weight:700;">
                      Reply to Customer
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:18px 32px; background:#f9fbfd; border-top:1px solid #e8eef5;">
                    <p style="margin:0; font-size:13px; color:#7b8794; line-height:1.8;">
                      This email was generated automatically from the ${BUSINESS_NAME} website contact form.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </div>
    `,
  });
};

exports.sendCustomerEmail = async (data) => {
  const { full_name, email, service_type, pickup_address, message } = data;

  return transporter.sendMail({
    from: `"${BUSINESS_NAME}" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank you for your laundry request",
    attachments: [
      {
        filename: "logo.png",
        path: LOGO_PATH,
        cid: LOGO_CID,
      },
    ],
    html: `
      <div style="margin:0; padding:0; background-color:#f4f7fb; font-family:Arial, Helvetica, sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f7fb; padding:30px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px; background:#ffffff; border-radius:20px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">

                <tr>
                  <td style="background:#ffffff; padding:24px 32px 16px; text-align:center; border-bottom:1px solid #eef2f7;">
                    <img
                      src="cid:${LOGO_CID}"
                      alt="${BUSINESS_NAME}"
                      style="max-width:180px; width:100%; height:auto; display:block; margin:0 auto 12px;"
                    />
                  </td>
                </tr>

                <tr>
                  <td style="background:linear-gradient(135deg, #154a97, #2d7ff9); padding:30px 32px; text-align:center; color:#ffffff;">
                    <p style="margin:0; font-size:13px; letter-spacing:1.5px; text-transform:uppercase; opacity:0.9;">
                      ${BUSINESS_NAME}
                    </p>
                    <h1 style="margin:10px 0 0; font-size:30px; line-height:1.2; font-weight:700;">
                      Thank You, ${escapeHtml(full_name)}
                    </h1>
                    <p style="margin:12px auto 0; max-width:500px; font-size:15px; line-height:1.7; opacity:0.92;">
                      We’ve received your request and our team will get in touch shortly to confirm your laundry pickup details.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:30px 32px 18px;">
                    <div style="background:#f8fbff; border:1px solid #e2ebf5; border-radius:16px; padding:20px;">
                      <h2 style="margin:0 0 14px; font-size:20px; color:#154a97;">
                        Your Request Summary
                      </h2>
                      <p style="margin:0 0 10px; font-size:15px; color:#334155;">
                        <strong>Service:</strong> ${escapeHtml(service_type)}
                      </p>
                      <p style="margin:0 0 10px; font-size:15px; color:#334155;">
                        <strong>Pickup Address:</strong> ${escapeHtml(pickup_address)}
                      </p>
                      <p style="margin:0; font-size:15px; color:#334155; line-height:1.7;">
                        <strong>Your Message:</strong><br />
                        ${nl2br(message)}
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="padding:0 32px 20px;">
                    <h3 style="margin:0 0 14px; font-size:20px; color:#154a97;">
                      Service Provider Details
                    </h3>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding:14px 16px; background:#ffffff; border:1px solid #e8eef5; border-radius:12px;">
                          <p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7a90; text-transform:uppercase;">Business</p>
                          <p style="margin:0; font-size:15px; color:#1f2d3d;">${BUSINESS_NAME}</p>
                        </td>
                      </tr>
                      <tr><td height="12"></td></tr>

                      <tr>
                        <td style="padding:14px 16px; background:#ffffff; border:1px solid #e8eef5; border-radius:12px;">
                          <p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7a90; text-transform:uppercase;">Address</p>
                          <p style="margin:0; font-size:15px; color:#1f2d3d;">${BUSINESS_ADDRESS}</p>
                        </td>
                      </tr>
                      <tr><td height="12"></td></tr>

                      <tr>
                        <td style="padding:14px 16px; background:#ffffff; border:1px solid #e8eef5; border-radius:12px;">
                          <p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7a90; text-transform:uppercase;">Phone</p>
                          <p style="margin:0; font-size:15px; color:#1f2d3d;">${BUSINESS_PHONE}</p>
                        </td>
                      </tr>
                      <tr><td height="12"></td></tr>

                      <tr>
                        <td style="padding:14px 16px; background:#ffffff; border:1px solid #e8eef5; border-radius:12px;">
                          <p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7a90; text-transform:uppercase;">WhatsApp</p>
                          <p style="margin:0; font-size:15px; color:#1f2d3d;">${BUSINESS_WHATSAPP}</p>
                        </td>
                      </tr>
                      <tr><td height="12"></td></tr>

                      <tr>
                        <td style="padding:14px 16px; background:#ffffff; border:1px solid #e8eef5; border-radius:12px;">
                          <p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7a90; text-transform:uppercase;">Email</p>
                          <p style="margin:0; font-size:15px; color:#1f2d3d;">${BUSINESS_EMAIL}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:0 32px 30px;">
                    <a href="mailto:${BUSINESS_EMAIL}" style="display:inline-block; background:#154a97; color:#ffffff; text-decoration:none; padding:14px 24px; border-radius:999px; font-size:14px; font-weight:700; margin-right:10px; margin-bottom:10px;">
                      Email Us
                    </a>
                    <a href="tel:${BUSINESS_PHONE_LINK}" style="display:inline-block; background:#eef5ff; color:#154a97; text-decoration:none; padding:14px 24px; border-radius:999px; font-size:14px; font-weight:700; margin-right:10px; margin-bottom:10px;">
                      Call Us
                    </a>
                    <a href="https://wa.me/${BUSINESS_WHATSAPP_LINK}" style="display:inline-block; background:#eef5ff; color:#154a97; text-decoration:none; padding:14px 24px; border-radius:999px; font-size:14px; font-weight:700; margin-bottom:10px;">
                      WhatsApp Us
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:18px 32px; background:#f9fbfd; border-top:1px solid #e8eef5; text-align:center;">
                    <p style="margin:0; font-size:13px; color:#7b8794; line-height:1.7;">
                      Thank you for choosing ${BUSINESS_NAME}.<br />
                      Reliable pickup, expert care, and fresh results every time.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </div>
    `,
  });
};