function doPost(e) {
    try {
        // Open the Google Sheet by URL
        // your edit link goes here
        const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/..../edit?usp=sharing").getSheetByName("Ivi");
        
        // Extract data from the POST request
        const data = e.parameter;

        // Append a new row to the sheet with form data
        // here is where you will add your rows: avoid strings for int's
        sheet.appendRow([
            data["example-name"],     // example Name
            data["example-phone"],   // example Phone
        ]);

        // Email the data
        const recipient = "example@example.com"; // you add your email here
        const subject = "New Form Submission";
        const htmlBody = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        .email-header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 2px solid #f0f0f0;
        }
        .email-header h2 {
            color: #007BFF;
        }
        .email-body {
            padding: 20px 0;
        }
        .email-body ul {
            list-style-type: none;
            padding: 0;
        }
        .email-body li {
            margin-bottom: 10px;
        }
        .email-body strong {
            color: #555;
        }
        .email-footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            border-top: 2px solid #f0f0f0;
            padding-top: 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h2>New Form Submission Received</h2>
        </div>
        <div class="email-body">
            <p> you have a new submission <p>
            <!-- you can also include fields like as follows -->
            <!--ul>
                <li><strong>example Name:</strong> ${data["example-name"]}</li>
                <li><strong>example Phone:</strong> ${data["example-phone"]}</li>
            </ul-->
        </div>
        <div class="email-footer">
            <p>Thank you for using our service.</p>
        </div>
    </div>
</body>
</html>
        `;
        MailApp.sendEmail({
            to: recipient,
            subject: subject,
            htmlBody: htmlBody
        });

        // Return a success response
        return ContentService.createTextOutput(
            JSON.stringify({ result: "success", message: "Data submitted and email sent successfully" })
        ).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Handle errors and send error response
        return ContentService.createTextOutput(
            JSON.stringify({ result: "error", message: error.message })
        ).setMimeType(ContentService.MimeType.JSON);
    }
}
