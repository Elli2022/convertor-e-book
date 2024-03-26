import axios from 'axios';

type Event = {
  body: string;
};

exports.handler = async (event: Event) => {
  const { email } = JSON.parse(event.body); // User's email address from the form
  const MAILGUN_API_KEY: string | undefined = process.env.MAILGUN_API_KEY; // Your Mailgun API key
  const MAILGUN_DOMAIN: string | undefined = process.env.MAILGUN_DOMAIN; // Your Mailgun domain
  const FROM_EMAIL: string = 'wordpress@convertor.se'; // The email address you're sending from

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server configuration error" })
    };
  }

  const url = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

  try {
    await axios.post(
      url,
      new URLSearchParams({
        from: `Exciting News <${FROM_EMAIL}>`,
        to: email, // Use the user's email address here
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
    // Assert the error type
    if (axios.isAxiosError(error)) {
      // Now TypeScript knows error is an AxiosError, which has the response property
      return {
        statusCode: error.response?.status || 500,
        body: JSON.stringify({ message: error.response?.data.message || "An unknown error occurred" })
      };
    } else {
      // Error was not an AxiosError, handle or re-throw
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "An unknown error occurred" })
      };
    }
  }
};
