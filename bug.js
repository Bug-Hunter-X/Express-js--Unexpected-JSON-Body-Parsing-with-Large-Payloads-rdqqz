const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // ... process data ...
  res.send('Data received');
});

// Problem: Unexpected request body parsing behavior with large JSON payloads
// If the JSON payload sent to the POST /data endpoint exceeds the default Node.js buffer limit,
the request body might be truncated or parsed incorrectly, leading to unexpected behavior and potential errors.
// This is not always apparent in smaller tests, making it a harder-to-catch bug.