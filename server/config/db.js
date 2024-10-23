const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Ensure you're using the correct environment variable name
    await mongoose.connect(process.env.MONGO_URI, { // Change MONGODB_URI to MONGO_URI
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
