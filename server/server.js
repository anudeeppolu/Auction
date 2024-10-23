const morgan = require('morgan');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const auctionRoutes = require('./routes/auctionRoutes');
const bidRoutes = require('./routes/bidRoutes');

dotenv.config();

console.log('MongoDB URI:', process.env.MONGO_URI);
console.log('JWT Secret:', process.env.JWT_SECRET);
console.log('Server Port:', process.env.PORT);

connectDB();
const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Custom token for coloring the status code
morgan.token('status-color', (req, res) => {
  if (res.statusCode >= 200 && res.statusCode < 300) {
    return '\x1b[32m' + res.statusCode + '\x1b[0m'; // Green for success
  } else {
    return '\x1b[31m' + res.statusCode + '\x1b[0m'; // Red for error
  }
});

// Use custom morgan format
app.use(morgan(':method :url :status-color - :response-time ms'));

// Define your routes
app.use('/api/auth', authRoutes);
app.use('/api/auctions', auctionRoutes);
app.use('/api/bids', bidRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
