const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body-parser to increase the request body size limit
app.use(bodyParser.json({ limit: '50mb' })); // Adjust limit as needed

app.post('/data', (req, res) => {
  const data = req.body;
  // ... process data ...
  res.send('Data received');
});
