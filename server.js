import express from "express";
import pkg from "twilio";

const { twiml: Twiml } = pkg;

const app = express();
app.use(express.urlencoded({ extended: false }));

app.post("/voice", (req, res) => {
  const response = new Twiml.VoiceResponse();

  response.say("Hello, I am your AI assistant. How can I help you?");

  // transfer call
  response.dial("+919784503651");

  res.type("text/xml");
  res.send(response.toString());
});

app.listen(3000, () => console.log("Server running on port 3000"));