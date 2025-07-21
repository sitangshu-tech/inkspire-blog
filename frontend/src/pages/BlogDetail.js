import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../services/api";
import "../styles/home.css";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Load user
        const storedUser = localStorage.getItem("user");
        let currentUserId = "";
        if (storedUser && storedUser !== "undefined") {
          const user = JSON.parse(storedUser);
          currentUserId = user._id;
          setUserId(currentUserId);
        }

        // Load blog
        const res = await axios.get(`/blogs/${id}`);
        setBlog(res.data.blog);

        // Debug: log both
        console.log("Fetched blog author:", res.data.blog.author?._id);
        console.log("Current userId:", currentUserId);
      } catch (error) {
        console.error("Error loading blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handlePostComment = async () => {
    if (!comment.trim()) return;

    try {
      const res = await axios.post(`/blogs/${id}/comments`, { text: comment });
      setBlog((prev) => ({
        ...prev,
        comments: [...(prev.comments || []), res.data],
      }));
      setComment("");
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  const handleEdit = () => navigate(`/edit/${id}`);
  const handleBack = () => navigate("/dashboard");

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!blog) return <p className="text-center mt-5">Blog not found.</p>;

  const isAuthor = userId === blog.author?._id;

  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      <button
        className="btn btn-link mb-3 text-muted"
        onClick={handleBack}
        style={{ textDecoration: "none" }}
      >
        ← Back to Blogs
      </button>

      <div className="text-center mb-4">
        <img
          src={`http://localhost:5000${blog.image}`}
          alt={blog.title}
          className="img-fluid rounded"
          style={{
            borderRadius: "20px",
            maxHeight: "400px",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>

      <span
        className="badge mb-2"
        style={{
          backgroundColor: "#ede9fe",
          color: "#7c3aed",
          fontSize: "0.8rem",
          padding: "0.4rem 0.8rem",
          borderRadius: "1rem",
        }}
      >
        {blog.category}
      </span>

      <h2 className="fw-bold mt-2">{blog.title}</h2>

      <p className="text-muted mb-2">
        By: {blog.author?.name || "Anonymous"} |{" "}
        <span title={new Date(blog.createdAt).toLocaleString()}>
          {new Date(blog.createdAt).toLocaleDateString()}
        </span>
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{blog.content}</p>

      {/* ✅ Edit/Delete only for author */}
      {isAuthor && (
        <div className="text-end mb-3">
          <button className="btn btn-outline-primary me-2" onClick={handleEdit}>
            ✏️ Edit Blog
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={async () => {
              const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
              if (confirmDelete) {
                try {
                  const token = localStorage.getItem("token");
                  await axios.delete(`/blogs/${blog._id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                  });
                  navigate("/dashboard");
                } catch (err) {
                  console.error("Delete failed:", err.response?.data || err.message);
                  alert("Failed to delete blog.");
                }
              }
            }}
          >
            🗑️ Delete
          </button>
        </div>
      )}

      <hr className="my-4" />

      {/* Comments */}
      <h5 className="fw-bold mb-3">Comments</h5>
      {blog.comments && blog.comments.length > 0 ? (
        blog.comments.map((c, idx) => (
          <div key={idx} className="mb-2">
            <strong>{c.name}</strong>: {c.text}
          </div>
        ))
      ) : (
        <p className="text-muted">No comments yet. Be the first to comment!</p>
      )}

      <div className="mt-3">
        <textarea
          className="form-control mb-2"
          rows={3}
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="btn"
          style={{ backgroundColor: "#7c3aed", color: "#fff" }}
          onClick={handlePostComment}
        >
          🚀 Post Comment
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
