# MERN Stack E-Commerce Platform

A professional, full-stack e-commerce solution featuring a customer-facing storefront, a dedicated administrative dashboard, and a robust RESTful API. This project is built using the MERN stack and optimized for high-performance deployments on Vercel.

## 🚀 Live Links
- **Frontend Store:** https://e-commerce-platform-plum.vercel.app
- **Admin Dashboard:** https://e-commerce-platform-admin.vercel.app
- **Backend API:** https://e-commerce-backend-teal-five.vercel.app

---

## 🏗️ Project Architecture
This repository is structured as a **monorepo** for easier management of the entire ecosystem:

* **`/frontend`**: Customer-facing application (React + Vite).
* **`/admin`**: Management interface for products, orders, and inventory (React + Vite).
* **`/backend`**: Centralized API and database logic (Node.js + Express).

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React, Tailwind CSS, Vite, Axios, React Router |
| **Admin** | React, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Cloud Storage** | Cloudinary (Image management) |
| **Deployment** | Vercel |

---

## ⚙️ Local Development Setup

### 1. Clone the Project
```bash
git clone [https://github.com/Goutham-IITJ/E-commerce-platform.git](https://github.com/Goutham-IITJ/E-commerce-platform.git)
cd E-commerce-platform

```

### 2. Environment Variables

You will need to set up `.env` files in their respective directories:

**Backend (`/backend/.env`):**

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key
CLOUDINARY_NAME=your_cloud_name
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

```

**Frontend & Admin (`/frontend/.env` & `/admin/.env`):**

```env
VITE_BACKEND_URL=http://localhost:4000

```

### 3. Installation & Execution

Open three terminals and run the following in each folder:

```bash
# In /backend, /frontend, and /admin
npm install
npm run dev

```

---

## 🚀 Deployment Highlights

* **Architecture**: Decoupled Frontend and Admin apps to ensure independent scaling and zero-conflict builds.
* **Environment Management**: Configured with `VITE_BACKEND_URL` to allow seamless switching between local and production APIs.
* **Case Sensitivity**: Optimized for Linux-based CI/CD (Vercel) by enforcing strict naming conventions for components.

---

## 👨‍💻 Author

**Goutham A. S.** *IIT Jodhpur | Bash/CLI Developer Intern @ AfterQuery*
