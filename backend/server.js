const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const http = require("http");
const socketIo = require("socket.io");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

const app = express();
const server = http.createServer(app);

// ✅ Ensure "uploads" folder exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
  console.log("📂 uploads folder created");
}

// ✅ Initialize Socket.io and configure CORS
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",  // Change to your frontend URL after deploy
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
const allowedOrigins = [
  "http://localhost:3000",
  "https://inkspireblog.vercel.app/" 
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));


// ✅ Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Routes
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactRoute = require("./routes/contact");

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoute);

// ✅ Basic route
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK ---✅ the site is Running");
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
