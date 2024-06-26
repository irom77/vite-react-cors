// backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors()); // Enable CORS for all routes

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
