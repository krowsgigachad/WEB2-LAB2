require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle email sending
app.post('/send', (req, res) => {
    const { to, cc, bcc, subject, message, contentType } = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        // Decide content type based on user selection
        [contentType === 'html' ? 'html' : 'text']: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("Error: ", error);
            res.send(`Failed to send email: ${error.message}`);
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
