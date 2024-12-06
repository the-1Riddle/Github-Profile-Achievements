
# Submit an HTML Form to Google Sheet

When creating a web app, storing and managing data is a crucial step. While traditional web servers can host your app, you might need a cost-effective and straightforward solution for data storage. Google Sheets can be an excellent choice for this purpose, requiring no additional tools or purchases.

This guide will show you how to connect an HTML form to Google Sheets to store submitted data seamlessly, but if you just need the code you can head straight to the ---> [file](https://github.com/the-1Riddle/Github-Profile-Achievements/blob/htmp_to_spreadsheet/G-Sheet_connection_toHtml/code.gs).

## Table of Contents

#step-4-connect-apps-script-link-to-form-action

- Step 1: [Create an HTML Form](#step-1-create-an-html-form)
- Step 2: [Create a Google Sheet and Add Apps Script](#step-2-create-a-google-sheet-and-add-apps-script)
- Step 3: [Deploy Apps Script](#step-3-deploy-apps-script)
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

| Add the Script Code:|
|---|
|![script](https://github.com/user-attachments/assets/1cd34f81-fe26-40ba-a1a5-b03c06e8a78a)|

#### The codes functionality

  1. In this line, we have declared Google Sheet through the URL in the MySheets variable.
  
  2. In this line, we have pointed to the first sheet in MySheet.
  
  3. doPost(e) This method is used in Web Apps when we send data from form through the post method then the doPost function is called by Apps Script.
  
  4. We have sent the value of multiple columns which have more than one value i.e. there are many Qty, Rate and Amt arrays, so we have used e.parameters. By doing this, whatever data has been sent will be received in the Inv variable.
  
  5. Whatever data we have taken in a variable, has been stored on the sheet using InvSheet.appendRow. You can type the value of all the columns by separating them with a comma (,).
  
  6. In this line we have retrieved the value from the array containing Qtys, and using the index we can retrieve the value from other arrays as well.
  
  7. The line from where the request has come has been replicated, the message given from here will be displayed on your form.

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

|||
|--|--|
|![xyz](https://github.com/user-attachments/assets/438de53c-624c-471c-ae52-71b77c8ab89d)|![Capture8](https://github.com/user-attachments/assets/22d31b79-e16d-4e20-a41f-5f08f8acc71b)|

After giving all the permissions, you are finally provided with a web app URL. You have to copy this link, and the work of Apps Script will be over. Now you have to go to the HTML Form that you created first to connect it with the app script.

![Capture11](https://github.com/user-attachments/assets/3b9760c6-5ff2-4a2d-92ee-d1eb4c3993ae)

## Step 4: Connect Apps Script Link to Form Action

You will have to give a Web App Link on the Action Attribute of whatever HTML Form you have created, another way to do this would be to pass it over a js script on your HTML like this:

```js
```

By giving the link, your form is now connected to Apps Script and is ready to send data to Google Sheet and the connection is complete.
