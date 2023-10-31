const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for specific origins or "*" to allow all origins
app.use(cors({
  origin: "https://yourfrontendapp.com", // Replace with your frontend app's URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
}));

// Serve static files from the "client/build" directory
app.use(express.static(path.join(__dirname, "client", "build")));

// Sanitize against NoSQL query injections
app.use(mongoSanitize());

app.get("/api/", (req, res) => {
  return res.status(200).json({
    status: "success",
  });
});

app.get("*", (req, res) => {
  // This handles routes that do not match. Make sure to serve your SPA's index.html.
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
