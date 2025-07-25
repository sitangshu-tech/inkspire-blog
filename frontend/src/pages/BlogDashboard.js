// frontend/src/pages/BlogDashboard.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";
import BlogCard from "../components/BlogCard";
import { FaUser, FaSignOutAlt, FaPlus, FaSearch } from "react-icons/fa";
import "../styles/dash.css";

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      }
    };

    fetchBlogs();

    const handleFocus = () => fetchBlogs();
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  const filteredBlogs = blogs
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategory === "All" || blog.category === selectedCategory)
    );

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container py-4">
      {/* Responsive Topbar */}
      <div className="dashboard-topbar mb-4">
        <div className="profile-info">Welcome Back</div>

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="actions">
          <button className="btn btn-outline-secondary" onClick={() => navigate("/profile")}>
            <FaUser /> Profile
          </button>
          <button className="btn btn-outline-secondary" onClick={handleLogout}>
            <FaSignOutAlt /> Sign Out
          </button>
          <button className="btn btn-primary" onClick={() => navigate("/create")}>
            <FaPlus /> New Blog
          </button>
        </div>
      </div>

      <h2 className="fw-bold mb-4">All Blogs:</h2>

      {/* Category Filter */}
      <div className="mb-4 d-flex align-items-center gap-2 flex-wrap">
        <label htmlFor="categoryFilter" className="fw-semibold">
          Filter by Category:
        </label>
        <select
          id="categoryFilter"
          className="form-select w-auto"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Cards */}
      {filteredBlogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="row g-4">
          {filteredBlogs.map((blog) => (
            <div className="col-md-4" key={blog._id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogDashboard;