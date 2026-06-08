const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
require('./config/db'); // MySQL connection

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-portfolio.vercel.app"
  ],
  credentials: true
}));

// Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API running ✅' });
});

// Start Server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});