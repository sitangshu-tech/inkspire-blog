import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";  // Unified axios with token handling

import "bootstrap/dist/css/bootstrap.min.css";
import BlogCard from "../components/BlogCard";
import "../styles/home.css";

const EducationalBlog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from backend
 useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs"); // or use "../services/api"
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  fetchBlogs();
}, []);



  return (
    <div className="container-fluid bg-light py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-dark">Inking Thoughts, Inspiring Souls. </h1>
        <p className="text-muted">
          Discover insightful articles on programming, data science, and technical writing.
          Learn from experts and share your knowledge with the community.
        </p>
        <div className="mt-3 d-flex justify-content-center gap-3">
          <button className="btn custom-btn-primary px-4" onClick={() => navigate("/login?mode=login")}>
            Sign In
          </button>
          <button className="btn custom-btn-outline px-4" onClick={() => navigate("/login?mode=register")}>
            Create Account
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container">
        <div className="row g-4">
          {blogs.map((blog) => (
            <div className="col-md-4" key={blog._id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationalBlog;
