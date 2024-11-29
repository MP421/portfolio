import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fullstackspecialisttoday@gmail.com',
      pass: 'joshponijvcmlmim'
    }
  });

  const mailOptions = {
    from: email,
    to: 'fullstackspecialisttoday@gmail.com',
    subject: `Message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Email sent successfully:', info.response);
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

export default app;