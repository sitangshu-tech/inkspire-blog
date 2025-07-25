// App.js
import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { io } from "socket.io-client";

// Components
import Navbar from "./components/Navbar";

// Pages
import EducationalBlog from "./pages/EducationalBlog";
import AuthPage from "./pages/AuthPage";
import BlogDashboard from "./pages/BlogDashboard";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import FaqPage from "./pages/FaqPage"; // Adjust path as needed
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsPage";
import TermsPage from "./pages/TermsPage";

// Socket setup
export const socket = io("http://localhost:5000", { transports: ["websocket"] });

// Optional: create context to share token globally (if needed)
export const AuthContext = createContext();

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Sync token if it changes in localStorage (e.g., after login)
  useEffect(() => {
    const checkToken = () => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    };
    window.addEventListener("storage", checkToken);
    return () => window.removeEventListener("storage", checkToken);
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <Router>
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<EducationalBlog />} />
            <Route path="/login" element={<AuthPage />} />
            <Route
              path="/blogs/:id"
              element={token ? <BlogDetail /> : <Navigate to="/login" />}
            />
            <Route path="/dashboard" element={token ? <BlogDashboard /> : <Navigate to="/login" />} />
            <Route path="/create" element={token ? <CreateBlog /> : <Navigate to="/login" />} />
            <Route path="/blogs/edit/:id" element={token ? <EditBlog /> : <Navigate to="/login" />} />
            <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsPage />} />

          </Routes>
        </div>

        <Footer /> {/* ✅ Properly placed outside Routes */}
      </Router>


    </AuthContext.Provider >
  );
}

export default App;