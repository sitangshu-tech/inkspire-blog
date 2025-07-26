

# 🖋️ Inkspire – A Modern Blogging Platform

**Inkspire** is a full-stack blogging platform built with the **MERN (MongoDB, Express, React, Node.js)** stack. It offers a clean, responsive, and interactive user experience, allowing users to create, view, react to, and manage blog posts efficiently.

---

## 🚀 Features

### 👥 Authentication
- Secure login and registration with JWT-based authentication
- Protected routes (dashboard, profile, create blog)
- Auto-logout on token expiry

### 📝 Blog System
- Create, edit, and delete blog posts
- Like/unlike blogs with real-time UI update
- Filter blogs by category
- Live search and sorting by latest

### 📦 Commenting
- Comment on blogs with user context
- Auto-updating comment section

### 🔄 Real-Time Features
- Live reaction updates using **Socket.io**
- Instant blog updates without page reload

### 🧑 User Profiles
- View user profile details
- Link posts to their authors
- Profile-based blog filtering

### 🧭 Navigation & UI
- Fully responsive layout (mobile-first design)
- Dynamic category dropdown
- Creative and clean blog cards with metadata
- Beautiful header and footer components

### 📄 Static Pages
- About Us
- Team
- Privacy Policy
- Terms & Conditions
- Contact Us

---

## 🛠️ Tech Stack

### Frontend:
- **React** (v19+)
- **React Router DOM** (v7+)
- **Bootstrap 5** + **Custom CSS**
- **Axios**
- **React Icons**
- **Moment.js** for date formatting
- **Socket.io Client**

### Backend:
- **Node.js & Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JWT for Auth**
- **Socket.io for real-time**

---

## 📁 Project Structure

frontend/ └── src/ ├── components/ ├── pages/ ├── services/ ├── styles/ └── App.js, index.js, etc.

backend/ ├── controllers/ ├── routes/ ├── models/ ├── middlewares/ └── server.js

---

## 🔐 Environment Variables

### Frontend `.env`

REACT_APP_API_BASE_URL=https://your-backend-url.com/api

### Backend `.env`

PORT=5000 MONGODB_URI=your-mongodb-atlas-uri JWT_SECRET=your-secret-key

---

## ⚙️ Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/inkspire-blog.git
cd inkspire-blog

2. Backend Setup

cd backend
npm install
npm run dev

3. Frontend Setup

cd ../frontend
npm install
npm start


---

🌐 Deployment Status

🖥️ Frontend (React): [Under Construction - Deploying to Vercel]

⚙️ Backend (Node.js): [Under Construction - Deploying to Render]

🌍 Database: MongoDB Atlas



---

🔮 Upcoming Features

Admin dashboard (manage users/posts)

Social login (Google/GitHub)

Blog bookmarks and save-for-later

Rich text editor with media support

Image optimization and CDN delivery

Notifications for likes/comments

Email verification & password reset

Dark mode toggle 🌙



---

👨‍💻 Author

Sitangshu Maji
📬 Reach me on LinkedIn
💻 Personal Blog: Coming soon on Inkspire


---

📝 License

This project is licensed under the MIT License. See the LICENSE file for details.


---

❤️ Contributions

If you'd like to contribute to Inkspire, feel free to fork this repo, create a branch, and open a PR.
New contributors, designers, or collaborators are always welcome!

---



