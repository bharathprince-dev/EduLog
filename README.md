# 📚 EduLog – Academic Tracker Platform

EduLog is a full-stack web application that empowers students to manage and track their academic journey efficiently. It provides tools to monitor course progress, assignment deadlines, and overall academic goals — all in one intuitive interface.

---

## 🚀 Features

- ✅ User authentication using JWT
- 🔐 Secure password hashing with bcrypt
- 📘 Course and assignment tracking
- 🧠 Academic goals management
- 🌐 RESTful API for seamless data communication
- 🛡️ Protected routes and session persistence
- 📱 Fully responsive UI for all devices

---

## 🛠️ Tech Stack

### ⚙️ Backend:
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcrypt** for secure password storage

### 🎨 Frontend:
- **React.js** (functional components + hooks)
- **TailwindCSS** for utility-first responsive design
- **Axios** for API integration
- **React Router DOM** for protected routing

---

## 🧩 Architecture Overview
- Client (React + Tailwind) → REST APIs → Express Server → MongoDB
---

## 🔐 Authentication Flow

1. User registers/logins via frontend.
2. Backend issues JWT upon successful authentication.
3. Token is stored securely on the client.
4. Protected routes check token validity on each request.

---

## 🛣️ API Endpoints

### 🧑 Auth Routes (`/api/auth`)

| Method | Endpoint             | Access         | Description                        |
|--------|----------------------|----------------|------------------------------------|
| POST   | `/register`          | Public         | Register a new user                |
| POST   | `/login`             | Public         | Login and receive JWT              |
| GET    | `/profile`           | Authenticated  | Get current user's profile         |
| PUT    | `/profile`           | Authenticated  | Update current user's profile      |
| POST   | `/upload-image`      | Public         | Upload a profile image             |

---

### 🧾 Report Routes (`/api/report`)

| Method | Endpoint             | Access       | Description                              |
|--------|----------------------|--------------|------------------------------------------|
| GET    | `/export/tasks`      | Admin only   | Export all tasks report (Excel/PDF)      |
| GET    | `/export/users`      | Admin only   | Export user-task report (Excel/PDF)      |

---

### ✅ Task Routes (`/api/tasks`)

| Method | Endpoint               | Access         | Description                                |
|--------|------------------------|----------------|--------------------------------------------|
| GET    | `/dashboard-data`      | Authenticated  | Admin dashboard data                       |
| GET    | `/user-dashboard-data` | Authenticated  | User-specific dashboard data               |
| GET    | `/`                    | Authenticated  | Get all tasks (admin/user scope)           |
| GET    | `/:id`                 | Authenticated  | Get task by ID                             |
| POST   | `/`                    | Admin only     | Create a new task                          |
| PUT    | `/:id`                 | Authenticated  | Update task details                        |
| DELETE | `/:id`                 | Admin only     | Delete a task                              |
| PUT    | `/:id/status`          | Authenticated  | Update task status                         |
| PUT    | `/:id/todo`            | Authenticated  | Update task checklist (todo list)          |

---

### 👤 User Routes (`/api/users`)

| Method | Endpoint     | Access       | Description                       |
|--------|--------------|--------------|-----------------------------------|
| GET    | `/`          | Admin only   | Get all registered users          |
| GET    | `/:id`       | Authenticated | Get user by ID                   |

> ⚠️ All routes marked **Authenticated** require a valid JWT token in the headers (e.g. `Authorization: Bearer <token>`).

---

## 🖼️ UI Highlights

- 📂 Dashboard for real-time tracking
- 📆 Task view and progress
- 🔐 Login & signup with form validation
- 🎯 Goal-setting interface
- 🌙 Dark mode support (optional feature)

---

## 📦 Installation

### Backend Setup

- ```bash
- cd server
- npm install
- npm run dev

---
### Frontend Setup
- cd client
- npm install
- npm run dev

---

# .env.example
- MONGO_URI=your_mongo_uri_here
- JWT_SECRET=your_jwt_secret_here
- PORT=8000
- ADMIN_INVITE_TOKEN=your_admin_token

