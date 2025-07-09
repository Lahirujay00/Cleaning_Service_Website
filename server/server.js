const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Create a transporter using your email service credentials
    let transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other services like 'Outlook365', 'SendGrid', etc.
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS // Your email password or app-specific password
        }
    });

    // Setup email data
    let mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: process.env.RECIPIENT_EMAIL, // List of recipients
        subject: `New Contact Form Submission from ${name}`, // Subject line
        html: `
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
