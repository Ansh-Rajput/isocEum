const contactModel = require("../modles/contactQueryModel");
const transporter = require("../utils/emailUtility");


const contactUs = async (req, res) => {
    try {
        const { email,number,name,message } = req.body;

        // Create a new subscriber
        const contact = new contactModel({ email,number,name,message });
        await contact.save();

        // Send a confirmation email
        const mailOptions = {
            from: email,
            to: process.env.MY_EMAIL,
            subject: 'Contact Us query',
            text: `Name: ${name}\nNumber: ${number}\nQuery: ${message}
            `,
        };

        const mailOptions2 = {
            from: process.env.MY_EMAIL,
            to: email,
            subject: 'Contact Us query',
            text: "We have received your query our team will contact you shortly.",
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        transporter.sendMail(mailOptions2, (error, info) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(201).json({ message: 'Query Send' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = contactUs;
