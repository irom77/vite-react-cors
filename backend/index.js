// backend/index.js
const express = require('express');
// const cors = require('cors');

const app = express();
const PORT = 8080;

// Middleware to check if the request is local
const localOnly = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  if (ip === '::1' || ip === '::ffff:127.0.0.1' || ip === '127.0.0.1') {
    next();
  } else {
    res.status(403).send('Access denied');
  }
};
const allowLocalRequestsOnly = (req, res, next) => {
  const localIPs = ['::1', '127.0.0.1']; // Add more IPs if needed
  const requestIP = req.ip;

  if (localIPs.includes(requestIP)) {
    next(); // Allow the request
  } else {
    res.status(403).send('Access denied'); // Deny the request
  }
};
// Enable CORS for all routes
// app.use(cors()); 
// Apply the middleware to all routes
app.use(localOnly);
// app.use(allowLocalRequestsOnly);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
