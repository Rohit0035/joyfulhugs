const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { firstName, lastName, email, phone, date, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'YOUR_EMAIL',
            pass: 'YOUR_PASSWORD',
        },
    });

    const mailOptions = {
        from: email,
        to: 'RECEIVER_EMAIL',
        subject: 'New Form Submission',
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        res.status(500).send('Failed to send email');
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
