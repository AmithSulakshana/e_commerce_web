const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post("/", async (req, res) => {
    const { email } = req.body;

    let config = {
        service: 'gmail',
        auth: {
            user: 'r.a.sulakshana@gmail.com',
            pass: 'kzqv msxv whmz klms'
        }
    }

    let transporter = nodemailer.createTransport(config);

    const mailOptions = {
        from: 'r.a.sulakshana@gmail.com',
        to: email,
        subject: 'Your Order',
        html: `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #ffffff;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333333;
                    }
                    p {
                        color: #666666;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Thank you for your order!</h1>
                    <p>This is a confirmation email for your recent order.</p>
                    <p>If you have any questions or concerns, please feel free to contact us.</p>
                    <p>Best regards,</p>
                    <p>Shop.Com</p>
                </div>
            </body>
            </html>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ success: false, error: "Failed to send email" });
        } else {
            console.log("Email sent:", info.response);
            res.status(200).json({ success: true, message: "Email sent successfully" });
        }
    });
});

module.exports = router;
