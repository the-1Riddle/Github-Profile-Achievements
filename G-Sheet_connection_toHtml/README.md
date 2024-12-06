
# Submit an HTML Form to Google Sheet

When creating a web app, storing and managing data is a crucial step. While traditional web servers can host your app, you might need a cost-effective and straightforward solution for data storage. Google Sheets can be an excellent choice for this purpose, requiring no additional tools or purchases.

This guide will show you how to connect an HTML form to Google Sheets to store submitted data seamlessly, but if you just need the code you can head straight to the ---> [file](https://github.com/the-1Riddle/Github-Profile-Achievements/blob/htmp_to_spreadsheet/G-Sheet_connection_toHtml/code.gs).

## Table of Contents

- Step 1: [Create an HTML Form]()
- Step 2: [Create a Google Sheet and Add Apps Script]()
- Step 3: [Deploy Apps Script]()
- Step 4: [Connect Apps Script Link to Form Action]()

## Step 1: Create an HTML Form

To start, create a basic HTML form that will send data to Google Sheets. Below is a sample structure for the form:

```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8">  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  
  <title>Submit Form to Google Sheet</title>  
</head>  
<body>  
  <h1>Submit Your Details</h1>  
  <form id="submit-form" action="Your Apps Script URL" method="POST">  
    <label for="name">Name:</label>  
    <input type="text" id="name" name="name" required><br><br>  

    <label for="email">Email:</label>  
    <input type="email" id="email" name="email" required><br><br>  

    <label for="message">Message:</label><br>  
    <textarea id="message" name="message" rows="5" required></textarea><br><br>  

    <button type="submit">Submit</button>  
  </form>  
</body>  
</html>
```

You will need to replace your Apps Script URL with the URL generated after deploying the Apps Script (covered in later steps).

## Step 2: Create a Google Sheet and Add Apps Script

Next, create a Google Sheet where the form submissions will be stored and add column headers (e.g., Name, Email, Message) to define the data fields.

```
https://docs.google.com/spreadsheets
```
#### Access Apps Script:
In your Google Sheet, click on the Extensions menu.
Select Apps Script from the dropdown.
 |---|
 |![Capture1](https://github.com/user-attachments/assets/94ce7905-e4b9-4ec3-b3eb-4cb6c6d9f9dc)|


#### Name the Project:
In the Apps Script interface, click Untitled Project at the top left.
Enter a name for your project, then click Rename.

![1](https://github.com/user-attachments/assets/17952f4e-3dc6-4033-9c20-71704e19ebff)

#### Add the Script Code:



