# 🚗 CarRental - Full Stack Car Booking Platform

This is a full-stack Car Rental application built with **React**, **Node.js**, **Express**, and **MongoDB**. It allows users to book cars online, and owners can manage their listings and bookings. The application includes authentication, admin/owner dashboards, and booking management.

---

## 🔗 Live Demo
*Add your live deployment link here (e.g., Netlify, Vercel, Render)*

---

## 📂 Project Structure

CarRental/
│
├── client/ # Frontend (React)
│ ├── public/
│ └── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ ├── context/
│ └── main.jsx
│
├── server/ # Backend (Express & MongoDB)
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── index.js
│
└── README.md



---

## 🛠️ Features

### 🔒 Authentication
- User and Owner login/signup
- JWT-based token authentication
- Role-based access for user and owner

### 🚘 Car Management
- Owners can add, update, and delete cars
- Car listing with details and images
- Search and filter by location, price, etc.

### 📅 Booking System
- Users can book cars with pickup and return dates
- View and manage bookings (confirmed/pending)
- Owner dashboard to manage all bookings

### 📊 Dashboard
- Owner: Stats for bookings and car listings
- User: Booking history and active rentals
- Admin (optional): User and system control

---

## ⚙️ Tech Stack

| Frontend      | Backend     | Database | Tools & Libraries |
|---------------|-------------|----------|--------------------|
| React.js      | Node.js     | MongoDB  | Axios              |
| Tailwind CSS  | Express.js  | Mongoose | React Hot Toast    |
| React Router  | JWT         |          | Context API        |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- MongoDB (Local or Atlas)

### Clone the Repository

git clone https://github.com/priyankas77/CarRental-.git
cd CarRental-

### Setup Backend (Server)
cd server
npm install
# Create a .env file and add:
# MONGO_URI=your_mongo_db_connection_string
# JWT_SECRET=your_jwt_secret
npm start
