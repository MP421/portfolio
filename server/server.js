import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const app = express();
app.use(bodyParser.json());
app.use(cors());

const sendEmail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Message from ${name}`,
    text: message,
  };

  return await transporter.sendMail(mailOptions);
};

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const info = await sendEmail(name, email, message);
    console.log('Email sent successfully:', info.response);
    res.status(200).send('Email sent: ' + info.response);
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).send('Failed to send email: ' + error.message);
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
