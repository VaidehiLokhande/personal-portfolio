const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
require('./config/db');

const app = express();

// ✅ CORS (FINAL FIX)
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://personal-portfolio-one-gamma-13.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ ROUTES
app.use('/api/projects', require('./routes/projects'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API running ✅' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});