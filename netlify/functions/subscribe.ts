//netlify/functions/subscribe.ts
const axios = require('axios');

exports.handler = async (event:any) => {
  const { email } = JSON.parse(event.body); // Användarens e-postadress från formuläret
  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY; // Din Mailgun API-nyckel
  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN; // Din Mailgun domän
  const FROM_EMAIL = 'wordpress@convertor.se'; // E-postadressen som du skickar från

  const url = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

  try {
    const response = await axios.post(
      url,
      new URLSearchParams({
        from: `Exciting News <${FROM_EMAIL}>`,
        to: email, // Använd användarens e-postadress här
        subject: 'Welcome to Our Newsletter!',
        text: `Hello! You're now subscribed to our newsletter. You'll be the first to know about our updates.`, 
      }).toString(),
      {
        auth: {
          username: 'api',
          password: MAILGUN_API_KEY
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Subscription confirmation email sent successfully" })
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ message: error.response.data.message })
    };
  }
};
