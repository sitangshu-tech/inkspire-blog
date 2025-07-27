// backend/config/db.js

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("✅ MongoDB Atalas Connected...");
  } catch (error) {
    console.error("❌ MongoDB Atlas Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;