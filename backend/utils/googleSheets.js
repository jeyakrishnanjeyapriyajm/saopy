const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  credentials: {
    project_id: process.env.GOOGLE_PROJECT_ID,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function appendContactRow(data) {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  console.log("GOOGLE_SHEET_ID:", process.env.GOOGLE_SHEET_ID);

  const sheetInfo = await sheets.spreadsheets.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
  });

  console.log(
    "Available sheet tabs:",
    sheetInfo.data.sheets.map((s) => s.properties.title)
  );

  const values = [
    [
      new Date().toISOString(),
      data.full_name || "",
      data.phone_number || "",
      data.email || "",
      data.service_type || "",
      data.pickup_address || "",
      data.message || "",
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:G",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values,
    },
  });
}

module.exports = { appendContactRow };