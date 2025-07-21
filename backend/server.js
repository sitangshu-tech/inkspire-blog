// backend/server.js


const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const http = require("http");
const socketIo = require("socket.io"); // ✅ Import Socket.io
const contactRoute = require("./routes/contact");
// ✅ Express app and HTTP server
const app = express();
const server = http.createServer(app);
require('dotenv').config();


// ✅ Initialize Socket.io and configure CORS
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// ✅ Attach io instance to app so it’s accessible in routes
app.set("io", io);

// ✅ Connect to MongoDB
connectDB();

// ✅ Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// ✅ Serve uploaded images
app.use("/uploads", express.static("uploads"));

// ✅ Routes
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

// ✅ Basic route
app.get("/", (req, res) => {
  res.send("API is running on localhost ✅");
});

// ✅ Socket.io connection event
io.on("connection", (socket) => {
  console.log("🟢 New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`✅ Server running at :${PORT}`)
);
