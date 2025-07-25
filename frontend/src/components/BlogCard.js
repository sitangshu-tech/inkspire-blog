import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import { socket } from "../app";
import "../styles/home.css";

const BlogCard = ({ blog, userId }) => {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(blog.reactions?.length || 0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedUserString = localStorage.getItem("user");
    let storedUser = null;
    try {
      if (storedUserString && storedUserString !== "undefined") {
        storedUser = JSON.parse(storedUserString);
      }
    } catch {}

    if (
      storedUser &&
      blog.reactions?.some((r) => r.user?.toString() === storedUser._id)
    ) {
      setLiked(true);
    }

    socket.on("reactionUpdated", ({ blogId, count }) => {
      if (blogId === blog._id) {
        setLikes(count);
      }
    });

    return () => {
      socket.off("reactionUpdated");
    };
  }, [blog]);

  const handleLike = async (e) => {
    e.stopPropagation();
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axios.post(
        `/blogs/${blog._id}/react`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data && typeof res.data.count === "number") {
        setLikes(res.data.count);
        setLiked((prev) => !prev);
      }
    } catch (err) {
      console.error("Error liking blog:", err.response?.data || err.message);
    }
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/blogs/edit/${blog._id}`);
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");

    try {
      await axios.delete(`/blogs/${blog._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Blog deleted successfully");
      window.location.reload();
    } catch (err) {
      console.error("Delete failed:", err.response?.data || err.message);
    }
  };

  return (
    <div
      className="blog-card bg-white rounded-4 shadow-sm h-100"
      onClick={() => navigate(`/blogs/${blog._id}`)}
    >
      <div className="blog-card-img-container">
        <img
          src={`http://localhost:5000${blog.image}`}
          alt={blog.title}
          className="w-100 h-100 blog-card-img"
        />
      </div>

      <span className="blog-card-category badge">{blog.category}</span>

      <h5 className="fw-bold mt-2 mb-1">{blog.title}</h5>

      <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
        {blog.content.slice(0, 100)}...
      </p>

      <p className="text-muted small mb-1">
        By: {blog.author?.name || blog.author?.fullName || "Anonymous"}
      </p>

      <div className="text-muted small mb-2">
        📅{" "}
        {new Date(blog.createdAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </div>

      <div className="d-flex align-items-center justify-content-between mt-2">
        <div className="d-flex align-items-center gap-2">
          <FaHeart
            onClick={handleLike}
            color={liked ? "red" : "gray"}
            style={{ cursor: "pointer" }}
          />
          <span>{likes}</span>
        </div>

        {userId && blog?.author && (
  userId.toString() === (blog.author._id || blog.author).toString() && (
    <div className="d-flex align-items-center gap-2">
      <FaEdit
        onClick={handleEdit}
        style={{ cursor: "pointer", color: "#007bff" }}
        title="Edit"
      />
      <FaTrash
        onClick={handleDelete}
        style={{ cursor: "pointer", color: "crimson" }}
        title="Delete"
      />
    </div>
  )
)}

      </div>
    </div>
  );
};

export default BlogCard;