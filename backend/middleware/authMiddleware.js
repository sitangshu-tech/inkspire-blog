// backend/middleware/authMiddleware.js

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    const decoded = jwt.verify(
      token,
      process.env.jwt_SECRET // ✅ Hardcoded (but consider using .env in production)
    );

    // ✅ Set both `id` and `_id` on req.user
    req.user = {
      id: decoded.id,
      _id: decoded.id,
    };

    next();
  } catch (error) {
    console.error("JWT Verify Error:", error.message);
    return res.status(401).json({ message: "Invalid or Expired Token" });
  }
};

module.exports = authMiddleware;
