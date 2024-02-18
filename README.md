# WEB2-LAB2

## Email Sender Application

### Description
This application is a simple, web-based email sender built with Node.js, Express, and Nodemailer. It allows users to send emails directly from a web interface, leveraging the Gmail SMTP server for email delivery.

### Setup
#### Prerequisites
1. Node.js installed on your machine.
2. A Gmail account for sending emails.

### Installation

Clone the repository or download the source code.

Navigate to the project directory and install dependencies: npm install nodemailer dotenv express body-parser

### Set up environment variables:

#### Create a .env file in the root of your project directory with the following content, replacing your_email@gmail.com and your_password with your Gmail account details:

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_password

### Running the Application

#### Start the application by running the following command in the terminal:

node app.js

Access the application by navigating to http://localhost:3000 in your web browser.

### Usage

1. Fill in the Email Form:

To: Enter the recipient's email address.
Subject: Enter the subject of your email.
Message: Write your email content.

2. Send the Email: Click the "Send Email" button to send your email. You will receive a confirmation message in the web interface once the email is successfully sent.
