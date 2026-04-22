import express from "express";
import twilio from "twilio";

const app = express();
app.use(express.urlencoded({ extended: false }));

// ✅ FIX: support BOTH GET and POST
app.all("/voice", (req, res) => {
  const response = new twilio.twiml.VoiceResponse();

  response.say("Hello, I am your AI assistant. Connecting your call.");

  response.dial("+919784503651");

  res.type("text/xml");
  res.send(response.toString());
});

// health check
app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
