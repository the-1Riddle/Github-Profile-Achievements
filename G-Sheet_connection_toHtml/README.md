
# Submit an HTML Form to Google Sheet

When creating a web app, storing and managing data is a crucial step. While traditional web servers can host your app, you might need a cost-effective and straightforward solution for data storage. Google Sheets can be an excellent choice for this purpose, requiring no additional tools or purchases.

This guide will show you how to connect an HTML form to Google Sheets to store submitted data seamlessly, but if you just need the code you can head straight to the ---> [file](https://github.com/the-1Riddle/Github-Profile-Achievements/blob/htmp_to_spreadsheet/G-Sheet_connection_toHtml/code.gs).

## Table of Contents

- Step 1: [Create an HTML Form](#step-1-create-an-html-form)
- Step 2: [Create a Google Sheet and Add Apps Script](#step-2-create-a-google-sheet-and-add-apps-script)
- Step 3: [Deploy Apps Script](#step-3-deploy-apps-script)
- Step 4: [Connect Apps Script Link to Form Action](#step-4-connect-apps-script-link-to-form-action)
- Step 5: [Conclusion](#conclusion)

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
  
  > [!NOTE]<br>
  > 1. Ensure that the email you are using for the sheet is the default email in the next step, else your script app will fail to load.
  > 2. All column header names must be the same as the HTML **Input names**.

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
In the `Code.gs` file add the following script:

```gs
function doPost(e) {
    try {
        // Open the Google Sheet by URL
        const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/.../edit?usp=sharing").getSheetByName("Sheet1");
        
        // Extract data from the POST request
        const data = e.parameter;

        // Append a new row to the sheet with form data
        sheet.appendRow([
            data["name"],     // same as name field in the sheet
            data["email"],   // same as email field in the sheet
            data["message"]  // same as message field in the sheet
        ]);

        // Return a successful response
        return ContentService.createTextOutput(
            JSON.stringify({ result: "success", message: "Data submitted successfully" })
        ).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Handle errors and send error response
        return ContentService.createTextOutput(
            JSON.stringify({ result: "error", message: error.message })
        ).setMimeType(ContentService.MimeType.JSON);
    }
}
```

#### The codes functionality

  1. doPost(e), This method is used in Web Apps when we want to send data from  the form through the post method then the doPost function is called by Apps Script.
  
  2. in line three, we have declared Google Sheet through the URL in the sheet variable where we use the `getSheetByName("Sheet1")` method to ensure that we target the sheet named _Sheet1_ within the spreadsheet.
  
  3. We have sent the value of multiple columns which have more than one value i.e. name, so we have used the `e.parameters` object to contain key-value pairs sent in the POST request and accessible as _e.parameter["name"]_, etc. By doing this, whatever data has been sent will be received.
  
  4. The `sheet.appendRow` method is used to append a new row to the sheet, It accepts an array of values, with each value corresponding to a column in the row. For instance, the _name_ field is added to the first column, _email_ to the second, and _message_ to the third. You can type the value of all the columns by separating them with a comma (,).
  
  5. In line 15, we check if the data is successfully added to the sheet, where we create a success message using `JSON.stringify` to convert the results to JSON object and send the response back with a _success_ status.
  
  6. In line 19, we check if an error occurs, and if yes, a JSON response with an _error_ status and the error message is sent back.

So now that you know how it all functions, go to your Google sheet and click on the share button; click on the dropdown where it is written view then change it to editor, after copying the link and on your script, replace `Your Google Sheet URL` with the URL you have copied of your spreadsheet. If your sheet’s name is not `Sheet1`, then update `getSheetByName("Sheet1")` on the script accordingly then save the script.

  | spreadsheet link|
  |---|
  |![Capture](https://github.com/user-attachments/assets/06c7732f-0578-4a8d-9fb9-20c7d62083f3)|

## Step 3: Deploy Apps Script

It's now time to deploy the project, to do this: you have to click on the **`Deploy`** button. After that, you have to click on `New deployment`. By doing this the following window will open.

  ![Capture6](https://github.com/user-attachments/assets/a6056260-ecce-4bdd-8974-73884eb52802)

On the above screen, click on the **Setting icon**, then select **`Web App`**. After, give a description name to the new deployment, giving access to anyone then click on deploy. The following window will pop up where you'll have to permit authorised access by clicking on the `Authorize Access` button.

  ![Capture7](https://github.com/user-attachments/assets/0ce39915-3b61-40cd-8dc1-0e37e140560c)

Using the script in this way is not safe, there are security issues, that is why here Google gives you a warning and informs you that whatever you are doing is unsafe, still if you want to authorize it then select the (unsafe) option by clicking advanced then `go to unsafe`.

  ![xyz](https://github.com/user-attachments/assets/438de53c-624c-471c-ae52-71b77c8ab89d)
  ![Capture8](https://github.com/user-attachments/assets/22d31b79-e16d-4e20-a41f-5f08f8acc71b)

After giving all the permissions, you are finally provided with a web app URL. You have to copy this link, and the work of Apps Script will be over. Now you have to go to the HTML Form that you created first to connect it with the app script.

  ![Capture11](https://github.com/user-attachments/assets/3b9760c6-5ff2-4a2d-92ee-d1eb4c3993ae)

## Step 4: Connect Apps Script Link to Form Action

You will have to give a Web App Link on the Action Attribute of whatever HTML Form you have created, another way to do this would be to pass it over a js script on your HTML like this:

```js
<script>
const scriptURL = 'your copied app link';
    const form = document.forms['submit-to-google-sheet'];

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success!', data);
            alert("Form submitted successfully!");
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("There was an error submitting the form.");
        });
    });
</script>
```
or just pass it in the HTML directly like this:

```html
<form method="POST" action="your copied app link">
  <!-- other fields -->
</form>
```

By giving the link, your form is now connected to Apps Script and is ready to send data to Google Sheet and the connection is complete.

## Conclusion

By following this guide, you’ve successfully integrated an HTML form with Google Sheets, enabling seamless data collection without the need for complex backend infrastructure. This approach not only simplifies your workflow but also provides a cost-effective solution for storing and managing form submissions.

The flexibility of Google Apps Script allows for further customization, such as sending email notifications, adding data validation, or even triggering workflows based on submissions. With this setup, you're equipped to handle basic data collection tasks efficiently.

found this helpful? be sure to give it a star, you can also submit an [issue](https://github.com/the-1Riddle/Github-Profile-Achievements/issues) if you got a bug or with a PR if you would like to contribute something.
