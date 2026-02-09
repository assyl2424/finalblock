# Online Clothing Store – Backend

This repository contains the backend part of the **Online Clothing Store** project developed for the **Web Technologies (Backend)** course.

The backend provides RESTful APIs for user authentication, authorization, and user profile management. It is designed to be integrated with a frontend client developed by another team member.

---

## Features

- User registration with encrypted passwords
- User login with JWT authentication
- Protected routes using JWT middleware
- User profile retrieval and update
- MongoDB Atlas cloud database
- Modular project structure (routes, controllers, models, middleware)

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- dotenv

---

## Project Structure

online-clothing-store-backend/
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── server.js
├── package.json
└── README.md
---

## Setup Instructions

1. Clone the repository:git clone https://github.com/Nagizkhanov/online-clothing-store-backend.git
2. Install dependencies:npm install
3. Create a `.env` file in the root directory:PORT=3000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODhkN2ViNDA4NWUxMDM1OGYyNWMwYyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcwNTc2NDk5LCJleHAiOjE3NzA2NjI4OTl9.CE00TpBHUxfO8JllfLpJqIlMB2b2ScIsWMkHNF-1JDE 
4. Run the server:npm run dev
---

## API Endpoints

### Authentication
- **POST /api/auth/register**  
  Register a new user

- **POST /api/auth/login**  
  Login user and receive JWT token

### User (Protected)
- **GET /api/users/profile**  
  Retrieve logged-in user profile

- **PUT /api/users/profile**  
  Update user profile information

---

## API Usage Example

For protected routes, include the JWT token in headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODhkN2ViNDA4NWUxMDM1OGYyNWMwYyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcwNTc2NDk5LCJleHAiOjE3NzA2NjI4OTl9.CE00TpBHUxfO8JllfLpJqIlMB2b2ScIsWMkHNF-1JDE 
---

## Notes for Team Integration

- This backend is designed to be consumed by a frontend client.
- All protected endpoints require a valid JWT token.
- Sensitive data is stored in environment variables and excluded from GitHub.

---

## Author

Backend developed by **Participant 1** as part of a team project.