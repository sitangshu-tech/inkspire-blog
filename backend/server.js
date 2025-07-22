// backend/server.js

const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const connectDB = require("./config/db");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactRoute = require("./routes/contact");

// ✅ Initialize Express and HTTP server
const app = express();
const server = http.createServer(app);

// ✅ Allowed origins (for CORS and Socket.io)
const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:3000",
];

// ✅ Setup Socket.io
const io = socketIo(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// ✅ Attach io to app for access in routes/controllers
app.set("io", io);

// ✅ Connect to MongoDB Atlas
connectDB();

// ✅ Middleware
app.use(express.json());
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// ✅ Serve uploaded static files (images)
app.use("/uploads", express.static("uploads"));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoute);

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("🌍 Inkspire Backend API is Live!");
});

// ✅ Socket.io connection
io.on("connection", (socket) => {
  console.log("🟢 New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
