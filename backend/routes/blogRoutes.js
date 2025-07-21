const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Blog = require("../models/Blog");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

/**
 * CREATE Blog
 */
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

    const blog = new Blog({
      title,
      content,
      category,
      image: imagePath,
      author: req.user.id,
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error("Blog creation failed:", err);
    res.status(500).json({ message: "Blog creation failed" });
  }
});

/**
 * GET All Blogs
 */
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name email");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});

/**
 * GET Blog by ID
 */
// Get blog by ID and increment views
// GET /blogs/:id
// GET single blog (no view increment)
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate("author", "name email")
      .populate("author", "_id name email")

    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json({ blog });
  } catch (err) {
    console.error("Error fetching blog:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});




/**
 * UPDATE Blog
 */
router.put("/:id", auth, upload.single("image"), async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to update this blog" });
    }

    blog.title = req.body.title;
    blog.content = req.body.content;
    blog.category = req.body.category;

    if (req.file) {
      blog.image = `/uploads/${req.file.filename}`;
    } else if (req.body.image) {
      blog.image = req.body.image;
    }

    await blog.save();
    res.json({ message: "Blog updated successfully", blog });
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ message: "Failed to update blog" });
  }
});

/**
 * DELETE Blog
 */
router.delete("/:id", auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to delete this blog" });
    }

    if (blog.image) {
      const imagePath = path.join(__dirname, "..", blog.image);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    await blog.deleteOne();
    res.json({ message: "Blog and image deleted successfully" });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ message: "Failed to delete blog" });
  }
});

/**
 * POST Comment
 */
router.post("/:id/comments", auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const user = await User.findById(req.user.id);
    const comment = { name: user.name, text: req.body.text };
    blog.comments.push(comment);
    await blog.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: "Failed to post comment" });
  }
});

/**
 * POST Like/Unlike Reaction (Toggle)
 */
router.post("/:id/react", auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const userId = req.user._id.toString();

    const alreadyLiked = blog.reactions.some(
      (r) => r.user && r.user.toString() === userId
    );

    if (alreadyLiked) {
      // UNLIKE: remove user from reactions
      blog.reactions = blog.reactions.filter(
        (r) => r.user.toString() !== userId
      );
    } else {
      // LIKE: add user to reactions
      blog.reactions.push({ user: userId });
    }

    await blog.save();

    const io = req.app.get("io");
    if (io) {
      io.emit("reactionUpdated", {
        blogId: blog._id.toString(),
        count: blog.reactions.length,
      });
    }

    res.json({ count: blog.reactions.length });
  } catch (err) {
    console.error("Reaction failed:", err);
    res.status(500).json({ message: "Reaction failed" });
  }
});


module.exports = router;
