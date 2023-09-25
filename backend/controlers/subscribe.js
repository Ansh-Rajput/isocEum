const Subscriber = require("../modles/subscription");
const transporter = require("../utils/emailUtility");


const subscribe = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if the email already exists
        const existingSubscriber = await Subscriber.findOne({ email });

        if (existingSubscriber) {
            return res.status(400).json({ message: 'Email already subscribed.' });
        }

        // Create a new subscriber
        const subscriber = new Subscriber({ email });
        await subscriber.save();

        // Send a confirmation email
        const mailOptions = {
            from: process.env.MY_EMAIL,
            to: email,
            subject: 'Subscription Confirmation',
            text: 'You have subscribed to our newsletter.',
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(201).json({ message: 'Subscription successful.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

const unsubscribe = async (req, res) => {
    try {
        const { email } = req.body;

        // Update the subscriber's status to unsubscribed
        await Subscriber.findOneAndUpdate({ email }, { subscribed: false });

        res.json({ message: 'Unsubscription successful.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = {unsubscribe,subscribe};
