# Course Management API

A comprehensive RESTful API for managing online courses with user authentication, role-based authorization, and purchase functionality. Built with Node.js, Express.js, and MongoDB.

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Installation Guide](#-installation-guide)
- [Environment Setup](#-environment-setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Security Features](#-security-features)
- [Error Handling](#-error-handling)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Project Overview

This Course Management API is designed to power online learning platforms similar to Udemy, Coursera, or any educational marketplace. It provides a robust backend system that handles:

- **User Management**: Registration, authentication, and profile management
- **Course Management**: Complete CRUD operations for courses with advanced filtering
- **Purchase System**: Secure course purchasing with transaction tracking  
- **Admin Panel**: Administrative tools for platform management
- **Security**: JWT-based authentication with refresh tokens and role-based access control

### Who is this for?
- Developers building online learning platforms
- Educational institutions creating course management systems
- Entrepreneurs launching course marketplaces
- Students learning backend development with real-world examples

## ✨ Features

### 🔐 Authentication & Authorization
- **JWT-based Authentication** with access and refresh tokens
- **Role-based Access Control** (User and Admin roles)
- **Secure Password Hashing** using bcrypt
- **Token Refresh Mechanism** for seamless user experience
- **Logout Functionality** with token invalidation

### 📚 Course Management
- **Complete CRUD Operations** for courses
- **Advanced Search & Filtering** by title, category, level, price range
- **Pagination Support** for better performance
- **Admin-only Course Creation** and management
- **Course Status Management** (active/inactive)
- **Student Enrollment Tracking**

### 💰 Purchase System
- **Secure Course Purchasing** for authenticated users
- **Duplicate Purchase Prevention** 
- **Purchase History Tracking**
- **Automatic Enrollment** upon successful purchase
- **Payment Status Management**

### 🛡️ Security & Validation
- **Input Validation** using Joi schemas
- **SQL Injection Protection** through Mongoose ODM
- **CORS Configuration** for cross-origin requests
- **Error Handling Middleware** for consistent error responses
- **Rate Limiting Ready** architecture

### 📊 Additional Features
- **Health Check Endpoint** for monitoring
- **Comprehensive Logging** with Morgan
- **Environment-based Configuration**
- **RESTful API Design** following best practices
- **Scalable Architecture** with MVC pattern

## 🛠️ Tech Stack

- **Runtime**: Node.js (v14+)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: Joi
- **Password Hashing**: bcryptjs
- **Environment Variables**: dotenv
- **HTTP Logging**: Morgan
- **CORS**: cors middleware

## 📦 Installation Guide

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14.0 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas account) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** (for version control) - [Download here](https://git-scm.com/)
- **Code Editor** (VS Code recommended) - [Download here](https://code.visualstudio.com/)

### Step 1: Clone or Create Project

**Option A: Clone from repository**
```bash
git clone <repository-url>
cd course-management-api
```

**Option B: Create from scratch**
```bash
mkdir course-management-api
cd course-management-api
```

### Step 2: Initialize Project

```bash
# Initialize package.json
npm init -y

# Install production dependencies
npm install express mongoose bcryptjs jsonwebtoken joi dotenv cors morgan

# Install development dependencies
npm install --save-dev nodemon

# Create folder structure
mkdir controllers middleware models routes utils
```

### Step 3: Create Project Files

Create the following folder structure:
```
course-management-api/
├── controllers/
│   ├── authController.js
│   ├── courseController.js
│   └── purchaseController.js
├── middleware/
│   ├── auth.js
│   ├── validation.js
│   └── errorHandler.js
├── models/
│   ├── User.js
│   ├── Course.js
│   └── Purchase.js
├── routes/
│   ├── auth.js
│   ├── courses.js
│   ├── purchases.js
│   └── users.js
├── utils/
│   └── jwt.js
├── server.js
├── package.json
├── .env
├── .env.example
└── README.md
```

Copy all the code from the provided artifacts into their respective files.

## 🔧 Environment Setup

### Create Environment Files

**1. Create `.env` file in the root directory:**
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/course-management

# JWT Configuration
JWT_ACCESS_SECRET=your_super_secure_access_secret_key_minimum_32_characters_long
JWT_REFRESH_SECRET=your_super_secure_refresh_secret_key_minimum_32_characters_long
JWT_ACCESS_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
```

**2. Create `.env.example` file for reference:**
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration  
MONGODB_URI=mongodb://localhost:27017/course-management

# JWT Configuration
JWT_ACCESS_SECRET=your_jwt_access_secret_here
JWT_REFRESH_SECRET=your_jwt_refresh_secret_here
JWT_ACCESS_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
```

**3. Create `.gitignore` file:**
```gitignore
# Dependencies
node_modules/

# Environment variables
.env

# Logs
*.log
npm-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
node_modules/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
```

### Important Security Notes

⚠️ **JWT Secrets**: 
- Use strong, random secrets (minimum 32 characters)
- Never commit secrets to version control
- Use different secrets for access and refresh tokens
- In production, use environment-specific secrets

⚠️ **MongoDB URI**: 
- For local development: `mongodb://localhost:27017/course-management`
- For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/course-management`

## 🚀 Running the Application

### Step 1: Start MongoDB

**For Local MongoDB:**
```bash
# Start MongoDB service
mongod

# Or on macOS with Homebrew:
brew services start mongodb-community

# Or on Windows:
net start MongoDB
```

**For MongoDB Atlas:**
- No local MongoDB startup required
- Ensure your connection string is correct in `.env`

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Application

**Development Mode (with auto-restart):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

### Step 4: Verify Installation

If successful, you should see:
```
✅ MongoDB connected successfully
🚀 Server is running on port 5000
📱 Health check: http://localhost:5000/api/health
```

**Test the health endpoint:**
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "success": true,
  "message": "Course Management API is running!",
  "timestamp": "2023-12-01T10:30:00.000Z"
}
```

## 📖 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication

All protected routes require an Authorization header:
```
Authorization: Bearer <your-access-token>
```

---

## 🔐 Authentication Endpoints

### Register User
Creates a new user account.

**Endpoint:** `POST /api/auth/register`  
**Access:** Public

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "64a1b2c3d4e5f6789012345",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "createdAt": "2023-12-01T10:30:00.000Z",
      "updatedAt": "2023-12-01T10:30:00.000Z"
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Validation Rules:**
- `name`: Required, 2-50 characters
- `email`: Required, valid email format, unique
- `password`: Required, minimum 6 characters
- `role`: Optional, either "user" or "admin" (defaults to "user")

---

### Login User
Authenticates a user and returns tokens.

**Endpoint:** `POST /api/auth/login`  
**Access:** Public

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "_id": "64a1b2c3d4e5f6789012345",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "purchasedCourses": []
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Response (401 Unauthorized):**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

### Refresh Token
Gets a new access token using a refresh token.

**Endpoint:** `POST /api/auth/refresh`  
**Access:** Public

**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### Logout User
Invalidates refresh tokens for the user.

**Endpoint:** `POST /api/auth/logout`  
**Access:** Private (requires authentication)

**Request Headers:**
```
Authorization: Bearer <access-token>
```

**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

### Get User Profile
Retrieves the authenticated user's profile information.

**Endpoint:** `GET /api/auth/profile`  
**Access:** Private

**Request Headers:**
```
Authorization: Bearer <access-token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user": {
      "_id": "64a1b2c3d4e5f6789012345",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "purchasedCourses": [
        {
          "_id": "64b2c3d4e5f67890123456",
          "title": "JavaScript Fundamentals",
          "price": 49.99,
          "instructor": "Jane Smith"
        }
      ],
      "createdAt": "2023-12-01T10:30:00.000Z"
    }
  }
}
```

---

## 📚 Course Endpoints

### Get All Courses
Retrieves a list of all active courses with filtering and pagination support.

**Endpoint:** `GET /api/courses`  
**Access:** Public

**Query Parameters:**
- `page` (number): Page number for pagination (default: 1)
- `limit` (number): Number of courses per page (default: 10, max: 50)
- `search` (string): Search in title, description, and instructor
- `category` (string): Filter by category (case-insensitive)
- `level` (string): Filter by level (Beginner, Intermediate, Advanced)
- `minPrice` (number): Minimum price filter
- `maxPrice` (number): Maximum price filter
- `sortBy` (string): Sort field (title, price, createdAt, enrolledStudents)
- `sortOrder` (string): Sort order (asc, desc) - default: desc

**Example Request:**
```bash
GET /api/courses?search=javascript&level=Beginner&minPrice=10&maxPrice=100&page=1&limit=5&sortBy=price&sortOrder=asc
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "courses": [
      {
        "_id": "64b2c3d4e5f67890123456",
        "title": "JavaScript Fundamentals",
        "description": "Learn JavaScript from scratch with hands-on examples and projects",
        "price": 49.99,
        "instructor": "Jane Smith",
        "category": "Programming",
        "level": "Beginner",
        "duration": "10 hours",
        "enrolledStudents": 234,
        "isActive": true,
        "createdAt": "2023-11-01T09:00:00.000Z",
        "updatedAt": "2023-11-15T14:30:00.000Z"
      }
    ],
    "pagination": {
      "current": 1,
      "pages": 3,
      "total": 15
    }
  }
}
```

---

### Get Course by ID
Retrieves detailed information about a specific course.

**Endpoint:** `GET /api/courses/:id`  
**Access:** Public

**Parameters:**
- `id` (string): Course ObjectId

**Example Request:**
```bash
GET /api/courses/64b2c3d4e5f67890123456
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "course": {
      "_id": "64b2c3d4e5f67890123456",
      "title": "JavaScript Fundamentals",
      "description": "Learn JavaScript from scratch with hands-on examples and projects. This comprehensive course covers variables, functions, objects, DOM manipulation, and modern ES6+ features.",
      "price": 49.99,
      "instructor": "Jane Smith",
      "category": "Programming",
      "level": "Beginner",
      "duration": "10 hours",
      "enrolledStudents": 234,
      "isActive": true,
      "createdAt": "2023-11-01T09:00:00.000Z",
      "updatedAt": "2023-11-15T14:30:00.000Z"
    }
  }
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Course not found"
}
```

---

### Create Course
Creates a new course. Only accessible by admin users.

**Endpoint:** `POST /api/courses`  
**Access:** Admin only

**Request Headers:**
```
Authorization: Bearer <admin-access-token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Advanced React Development",
  "description": "Master React with hooks, context, Redux, and testing. Build production-ready applications.",
  "price": 99.99,
  "instructor": "John Expert",
  "category": "Web Development",
  "level": "Advanced",
  "duration": "25 hours"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Course created successfully",
  "data": {
    "course": {
      "_id": "64c3d4e5f67890123457",
      "title": "Advanced React Development",
      "description": "Master React with hooks, context, Redux, and testing. Build production-ready applications.",
      "price": 99.99,
      "instructor": "John Expert",
      "category": "Web Development",
      "level": "Advanced",
      "duration": "25 hours",
      "enrolledStudents": 0,
      "isActive": true,
      "createdAt": "2023-12-01T15:45:00.000Z",
      "updatedAt": "2023-12-01T15:45:00.000Z"
    }
  }
}
```

**Validation Rules:**
- `title`: Required, 3-100 characters, unique
- `description`: Required, 10-1000 characters
- `price`: Required, number >= 0
- `instructor`: Required, 2-50 characters
- `category`: Optional, max 30 characters
- `level`: Optional, one of: Beginner, Intermediate, Advanced
- `duration`: Optional string

---

### Update Course
Updates an existing course. Only accessible by admin users.

**Endpoint:** `PUT /api/courses/:id`  
**Access:** Admin only

**Parameters:**
- `id` (string): Course ObjectId

**Request Headers:**
```
Authorization: Bearer <admin-access-token>
Content-Type: application/json
```

**Request Body:** (same as create course - all fields optional for update)
```json
{
  "title": "Advanced React Development - Updated",
  "price": 89.99,
  "description": "Updated description with new content and features"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Course updated successfully",
  "data": {
    "course": {
      "_id": "64c3d4e5f67890123457",
      "title": "Advanced React Development - Updated",
      "description": "Updated description with new content and features",
      "price": 89.99,
      "instructor": "John Expert",
      "category": "Web Development",
      "level": "Advanced",
      "duration": "25 hours",
      "enrolledStudents": 15,
      "isActive": true,
      "createdAt": "2023-12-01T15:45:00.000Z",
      "updatedAt": "2023-12-02T09:30:00.000Z"
    }
  }
}
```

---

### Delete Course
Deletes a course permanently. Only accessible by admin users.

**Endpoint:** `DELETE /api/courses/:id`  
**Access:** Admin only

**Parameters:**
- `id` (string): Course ObjectId

**Request Headers:**
```
Authorization: Bearer <admin-access-token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Course deleted successfully"
}
```

---

## 💰 Purchase Endpoints

### Purchase Course
Allows an authenticated user to purchase a course.

**Endpoint:** `POST /api/purchases`  
**Access:** Private (authenticated users)

**Request Headers:**
```
Authorization: Bearer <access-token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "courseId": "64b2c3d4e5f67890123456"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Course purchased successfully",
  "data": {
    "purchase": {
      "_id": "64d4e5f67890123458",
      "userId": {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "John Doe",
        "email": "john@example.com"
      },
      "courseId": {
        "_id": "64b2c3d4e5f67890123456",
        "title": "JavaScript Fundamentals",
        "instructor": "Jane Smith",
        "price": 49.99
      },
      "amount": 49.99,
      "purchaseDate": "2023-12-01T16:00:00.000Z",
      "paymentStatus": "completed",
      "paymentMethod": "credit_card",
      "createdAt": "2023-12-01T16:00:00.000Z"
    }
  }
}
```

**Error Responses:**

**Course Not Found (404):**
```json
{
  "success": false,
  "message": "Course not found or inactive"
}
```

**Already Purchased (400):**
```json
{
  "success": false,
  "message": "You have already purchased this course"
}
```

---

### Get User Purchases
Retrieves all purchases made by the authenticated user.

**Endpoint:** `GET /api/purchases/my`  
**Access:** Private

**Request Headers:**
```
Authorization: Bearer <access-token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "purchases": [
      {
        "_id": "64d4e5f67890123458",
        "courseId": {
          "title": "JavaScript Fundamentals",
          "description": "Learn JavaScript from scratch",
          "instructor": "Jane Smith",
          "price": 49.99
        },
        "amount": 49.99,
        "purchaseDate": "2023-12-01T16:00:00.000Z",
        "paymentStatus": "completed",
        "createdAt": "2023-12-01T16:00:00.000Z"
      }
    ]
  }
}
```

---

### Get All Purchases (Admin)
Retrieves all purchases in the system with pagination. Admin access only.

**Endpoint:** `GET /api/purchases`  
**Access:** Admin only

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Results per page (default: 10)

**Request Headers:**
```
Authorization: Bearer <admin-access-token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "purchases": [
      {
        "_id": "64d4e5f67890123458",
        "userId": {
          "name": "John Doe",
          "email": "john@example.com"
        },
        "courseId": {
          "title": "JavaScript Fundamentals",
          "instructor": "Jane Smith",
          "price": 49.99
        },
        "amount": 49.99,
        "purchaseDate": "2023-12-01T16:00:00.000Z",
        "paymentStatus": "completed",
        "createdAt": "2023-12-01T16:00:00.000Z"
      }
    ],
    "pagination": {
      "current": 1,
      "pages": 5,
      "total": 47
    }
  }
}
```

---

### Get Purchase by ID
Retrieves details of a specific purchase.

**Endpoint:** `GET /api/purchases/:id`  
**Access:** Private (own purchases) or Admin

**Parameters:**
- `id` (string): Purchase ObjectId

**Request Headers:**
```
Authorization: Bearer <access-token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "purchase": {
      "_id": "64d4e5f67890123458",
      "userId": {
        "name": "John Doe",
        "email": "john@example.com"
      },
      "courseId": {
        "title": "JavaScript Fundamentals",
        "description": "Learn JavaScript from scratch",
        "instructor": "Jane Smith",
        "price": 49.99
      },
      "amount": 49.99,
      "purchaseDate": "2023-12-01T16:00:00.000Z",
      "paymentStatus": "completed",
      "paymentMethod": "credit_card",
      "createdAt": "2023-12-01T16:00:00.000Z"
    }
  }
}
```

---

## 👥 User Management Endpoints (Admin Only)

### Get All Users
Retrieves all users with pagination. Admin access only.

**Endpoint:** `GET /api/users`  
**Access:** Admin only

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Results per page (default: 10)

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "John Doe",
        "email": "john@example.com",
        "role": "user",
        "purchasedCourses": [
          {
            "title": "JavaScript Fundamentals",
            "price": 49.99
          }
        ],
        "createdAt": "2023-11-01T10:00:00.000Z"
      }
    ],
    "pagination": {
      "current": 1,
      "pages": 3,
      "total": 25
    }
  }
}
```

### Get User by ID
Retrieves a specific user's details. Admin access only.

**Endpoint:** `GET /api/users/:id`  
**Access:** Admin only

### Delete User
Deletes a user account. Admin access only.

**Endpoint:** `DELETE /api/users/:id`  
**Access:** Admin only

---

## 🏥 System Endpoints

### Health Check
Checks if the API is running properly.

**Endpoint:** `GET /api/health`  
**Access:** Public

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Course Management API is running!",
  "timestamp": "2023-12-01T10:30:00.000Z"
}
```

---

## 🗄️ Database Schema

### User Schema
```javascript
{
  _id: ObjectId,
  name: String (required, 2-50 chars),
  email: String (required, unique, valid email),
  password: String (required, hashed with bcrypt),
  role: String (enum: ['user', 'admin'], default: 'user'),
  refreshTokens: [{
    token: String,
    createdAt: Date (expires after 7 days)
  }],
  purchasedCourses: [ObjectId] (references Course),
  createdAt: Date,
  updatedAt: Date
}
```

### Course Schema
```javascript
{
  _id: ObjectId,
  title: String (required, 3-100 chars),
  description: String (required, 10-1000 chars),
  price: Number (required, >= 0),
  instructor: String (required, 2-50 chars),
  category: String (optional, max 30 chars),
  duration: String (optional),
  level: String (enum: ['Beginner', 'Intermediate', 'Advanced']),
  isActive: Boolean (default: true),
  enrolledStudents: Number (default: 0),
  createdAt: Date,
  updatedAt: Date
}

// Indexes:
// - Text index on title, description, instructor for search
```

### Purchase Schema
```javascript
{
  _id: ObjectId,
  userId: ObjectId (required, references User),
  courseId: ObjectId (required, references Course),
  amount: Number (required, >= 0),
  purchaseDate: Date (default: Date.now),
  paymentStatus: String (enum: ['pending', 'completed', 'failed', 'refunded']),
  paymentMethod: String (default: 'credit_card'),
  createdAt: Date,
  updatedAt: Date
}

// Indexes:
// - Compound unique index on userId + courseId (prevents duplicate purchases)
```

## 🔒 Security Features

### Authentication Security
- **JWT Tokens**: Secure token-based authentication
- **Access Tokens**: Short-lived (15 minutes) for API access
- **Refresh Tokens**: Longer-lived (7 days) for token renewal
- **Token Rotation**: New refresh token issued on each refresh
- **Secure Logout**: Tokens invalidated on logout

### Password Security
- **bcrypt Hashing**: Passwords hashed with 12 salt rounds
- **No Plain Text Storage**: Passwords never stored in plain text
- **Minimum Length**: 6 character minimum requirement
- **Password Exclusion**: Passwords never returned in API responses

### Authorization Security
- **Role-based Access**: User and Admin roles with different permissions
- **Route Protection**: Middleware validates authentication on protected routes
- **Admin-only Actions**: Course management restricted to admin users
- **Ownership Validation**: Users can only access their own data

### Input Security
- **Joi Validation**: All inputs validated with comprehensive schemas
- **SQL Injection Protection**: Mongoose ODM prevents SQL injection
- **XSS Protection**: Input sanitization prevents cross-site scripting
- **Type Validation**: Strong typing prevents type confusion attacks

## ❌ Error Handling

### Error Response Format
All errors follow a consistent format:
```json
{
  "success": false,
  "message": "Human-readable error message",
  "details": "Additional error details (optional)"
}
```

### HTTP Status Codes

| Code | Meaning | Usage |
|------|---------|--------|
| 200 | OK | Successful GET, PUT, DELETE |
| 201 | Created | Successful POST (resource created) |
| 400 | Bad Request | Validation errors, invalid input |
| 401 | Unauthorized | Missing or invalid authentication token |
| 403 | Forbidden | Insufficient permissions (e.g., user trying admin action) |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Duplicate data (e.g., email already exists) |
| 500 | Internal Server Error | Unexpected server errors |

### Common Error Scenarios

**Validation Errors (400 Bad Request):**
```json
{
  "success": false,
  "message": "Validation error",
  "details": "\"email\" must be a valid email"
}
```

**Authentication Errors (401 Unauthorized):**
```json
{
  "success": false,
  "message": "Access token required"
}
```

**Authorization Errors (403 Forbidden):**
```json
{
  "success": false,
  "message": "Admin access required"
}
```

**Resource Not Found (404 Not Found):**
```json
{
  "success": false,
  "message": "Course not found"
}
```

**Duplicate Data (409 Conflict):**
```json
{
  "success": false,
  "message": "email already exists"
}
```

## 🧪 Testing

### Manual Testing with cURL

**1. Health Check:**
```bash
curl http://localhost:5000/api/health
```

**2. Register a User:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

**3. Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

**4. Get Courses:**
```bash
curl http://localhost:5000/api/courses
```

**5. Create Course (Admin only):**
```bash
curl -X POST http://localhost:5000/api/courses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ADMIN_ACCESS_TOKEN" \
  -d '{
    "title": "Test Course",
    "description": "This is a test course description",
    "price": 29.99,
    "instructor": "Test Instructor",
    "category": "Programming",
    "level": "Beginner"
  }'
```

**6. Purchase Course:**
```bash
curl -X POST http://localhost:5000/api/purchases \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_USER_ACCESS_TOKEN" \
  -d '{
    "courseId": "COURSE_ID_HERE"
  }'
```

### Testing with Postman

**1. Import Collection:**
Create a Postman collection with the following environment variables:
- `baseUrl`: `http://localhost:5000/api`
- `accessToken`: (will be set after login)
- `refreshToken`: (will be set after login)

**2. Set Up Authentication:**
For protected routes, use Bearer Token authentication with `{{accessToken}}`.

**3. Test Flow:**
1. Register or Login to get tokens
2. Test public endpoints (courses, health check)
3. Test protected endpoints (profile, purchases)
4. Test admin endpoints (create/update/delete courses)
5. Test error scenarios (invalid data, unauthorized access)

### Automated Testing Setup

**Install Testing Dependencies:**
```bash
npm install --save-dev jest supertest mongodb-memory-server
```

**Sample Test File (tests/auth.test.js):**
```javascript
const request = require('supertest');
const app = require('../server');
const User = require('../models/User');

describe('Authentication Endpoints', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  test('POST /api/auth/register - should register new user', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.body.data.user.email).toBe(userData.email);
    expect(response.body.data.accessToken).toBeDefined();
  });

  test('POST /api/auth/login - should login user', async () => {
    // Create user first
    const user = new User({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    });
    await user.save();

    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      })
      .expect(200);

    expect(response.body.success).toBe(true);
    expect(response.body.data.accessToken).toBeDefined();
  });
});
```

## 🚀 Deployment

### Environment Variables for Production

Create a production `.env` file:
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/course-management-prod
JWT_ACCESS_SECRET=extremely_long_and_secure_production_access_secret_64_chars_minimum
JWT_REFRESH_SECRET=extremely_long_and_secure_production_refresh_secret_64_chars_minimum
JWT_ACCESS_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
```

### Deployment Platforms

#### **Heroku Deployment**

**1. Install Heroku CLI and login:**
```bash
npm install -g heroku
heroku login
```

**2. Create Heroku app:**
```bash
heroku create your-course-api
```

**3. Set environment variables:**
```bash
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI="your_mongodb_atlas_connection_string"
heroku config:set JWT_ACCESS_SECRET="your_access_secret"
heroku config:set JWT_REFRESH_SECRET="your_refresh_secret"
```

**4. Deploy:**
```bash
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

#### **Railway Deployment**

1. Push your code to GitHub
2. Visit [Railway.app](https://railway.app)
3. Connect your GitHub repository
4. Add environment variables in the Railway dashboard
5. Deploy automatically

#### **Render Deployment**

1. Push your code to GitHub
2. Visit [Render.com](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Add environment variables
6. Deploy

#### **DigitalOcean App Platform**

1. Push your code to GitHub
2. Visit DigitalOcean App Platform
3. Create a new app from GitHub
4. Configure build and run commands
5. Add environment variables
6. Deploy

### Database Setup for Production

**MongoDB Atlas (Recommended):**

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (M0 tier is free)
3. Create database user with read/write permissions
4. Add your deployment platform's IP to the IP whitelist (or use 0.0.0.0/0 for all IPs)
5. Get connection string and add to environment variables

**Connection String Format:**
```
mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority
```

### Pre-deployment Checklist

- [ ] All environment variables set correctly
- [ ] MongoDB Atlas cluster configured and accessible
- [ ] JWT secrets are secure and different from development
- [ ] CORS configuration updated for production domain
- [ ] Package.json has correct start script
- [ ] No console.log statements in production code
- [ ] Error handling covers all edge cases
- [ ] Rate limiting configured (if needed)

### Post-deployment Testing

**1. Health Check:**
```bash
curl https://your-deployed-api.com/api/health
```

**2. Register Test User:**
```bash
curl -X POST https://your-deployed-api.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "email": "test@example.com", "password": "test123"}'
```

**3. Monitor Logs:**
Check your deployment platform's logs for any errors.

## 🛠️ Development Tools & Scripts

### Package.json Scripts

Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "seed": "node scripts/seedData.js",
    "create-admin": "node scripts/createAdmin.js"
  }
}
```

### Useful Development Scripts

**Create Admin User (scripts/createAdmin.js):**
```javascript
const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123456',
      role: 'admin'
    });
    
    await adminUser.save();
    console.log('✅ Admin user created successfully');
    console.log('Email: admin@example.com');
    console.log('Password: admin123456');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    process.exit(1);
  }
};

createAdmin();
```

**Seed Sample Data (scripts/seedData.js):**
```javascript
const mongoose = require('mongoose');
const Course = require('../models/Course');
require('dotenv').config();

const sampleCourses = [
  {
    title: 'JavaScript Fundamentals',
    description: 'Learn JavaScript from scratch with hands-on examples',
    price: 49.99,
    instructor: 'John Smith',
    category: 'Programming',
    level: 'Beginner',
    duration: '10 hours'
  },
  {
    title: 'React.js Advanced',
    description: 'Master React with hooks, context, and advanced patterns',
    price: 99.99,
    instructor: 'Jane Doe',
    category: 'Web Development',
    level: 'Advanced',
    duration: '20 hours'
  },
  // Add more sample courses...
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('📊 Connected to MongoDB');
    
    await Course.deleteMany({});
    console.log('🗑️ Cleared existing courses');
    
    const courses = await Course.insertMany(sampleCourses);
    console.log(`✅ Added ${courses.length} sample courses`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
```

### Running Development Scripts

```bash
# Create admin user
npm run create-admin

# Seed sample data
npm run seed

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 🔧 Troubleshooting

### Common Issues and Solutions

**1. MongoDB Connection Issues**

**Problem:** `MongooseServerSelectionError`
```
Solutions:
- Check if MongoDB service is running locally
- Verify MONGODB_URI in .env file
- For MongoDB Atlas: Check IP whitelist and credentials
- Ensure network connectivity
```

**2. JWT Token Issues**

**Problem:** `secretOrPrivateKey is required`
```
Solutions:
- Ensure JWT_ACCESS_SECRET and JWT_REFRESH_SECRET are in .env
- Check that dotenv is loaded before using JWT functions
- Verify secrets are at least 32 characters long
```

**3. Port Already in Use**

**Problem:** `EADDRINUSE: address already in use :::5000`
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5000 | xargs kill -9

# Or use a different port
PORT=3000 npm run dev
```

**4. CORS Issues**

**Problem:** Frontend cannot access API
```javascript
// Update server.js
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'https://your-frontend-domain.com'
  ],
  credentials: true
}));
```

**5. Validation Errors**

**Problem:** Unexpected validation failures
```
Solutions:
- Check Content-Type header is 'application/json'
- Verify JSON format (no trailing commas)
- Ensure all required fields are included
- Check field types match schema requirements
```

**6. Password Hashing Issues**

**Problem:** Cannot login after registration
```
Solutions:
- Check bcrypt is properly installed
- Verify password hashing in User model pre-save hook
- Ensure comparePassword method is working
- Check password minimum length requirement
```

### Debug Mode

Enable debug logging by setting NODE_ENV to development:
```bash
NODE_ENV=development npm run dev
```

### Health Monitoring

Monitor your API health with these checks:
- Database connectivity: `/api/health`
- Response times: Use tools like New Relic or DataDog
- Error rates: Monitor application logs
- Memory usage: Use process monitoring tools

## 📈 Performance Optimization

### Database Optimization

**1. Indexes:**
```javascript
// Already implemented indexes:
- User.email (unique)
- Course text index (title, description, instructor)
- Purchase compound index (userId + courseId)

// Additional recommended indexes:
Course.createIndex({ category: 1, level: 1 });
Course.createIndex({ price: 1 });
Course.createIndex({ createdAt: -1 });
Purchase.createIndex({ createdAt: -1 });
```

**2. Query Optimization:**
- Use lean() for read-only queries
- Implement field selection with select()
- Use aggregation pipelines for complex queries
- Implement proper pagination

**3. Connection Pooling:**
```javascript
// In server.js, optimize mongoose connection
mongoose.connect(process.env.MONGODB_URI, {
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
});
```

### API Optimization

**1. Response Caching:**
```javascript
// Install and configure redis for caching
npm install redis

// Example caching middleware
const redis = require('redis');
const client = redis.createClient();

const cache = (duration) => {
  return async (req, res, next) => {
    const key = req.originalUrl;
    const cached = await client.get(key);
    
    if (cached) {
      return res.json(JSON.parse(cached));
    }
    
    res.sendResponse = res.json;
    res.json = (body) => {
      client.setex(key, duration, JSON.stringify(body));
      res.sendResponse(body);
    };
    
    next();
  };
};

// Use on routes
router.get('/courses', cache(300), getAllCourses); // Cache for 5 minutes
```

**2. Rate Limiting:**
```javascript
npm install express-rate-limit

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});

app.use('/api/', limiter);
```

**3. Compression:**
```javascript
npm install compression

const compression = require('compression');
app.use(compression());
```

## 🔮 Future Enhancements

### Planned Features

**1. Payment Integration:**
- Stripe payment processing
- PayPal integration
- Local payment gateways (bKash for Bangladesh)
- Payment webhooks handling
- Refund management

**2. File Upload System:**
- Course thumbnail uploads
- Video content management
- PDF material uploads
- AWS S3 or Cloudinary integration

**3. Advanced Course Features:**
- Course chapters/lessons structure
- Video progress tracking
- Quizzes and assessments
- Certificate generation
- Course reviews and ratings

**4. Real-time Features:**
- Socket.IO integration
- Real-time notifications
- Live chat support
- Course enrollment notifications

**5. Analytics & Reporting:**
- User behavior tracking
- Sales analytics
- Course performance metrics
- Revenue reporting
- Student progress analytics

**6. Email System:**
- Welcome email on registration
- Purchase confirmation emails
- Course completion certificates
- Marketing email campaigns
- Password reset functionality

### Scalability Improvements

**1. Microservices Architecture:**
- Split into user service, course service, payment service
- API Gateway implementation
- Service discovery

**2. Database Scaling:**
- Read replicas for MongoDB
- Database sharding strategies
- Caching layer with Redis

**3. Infrastructure:**
- Docker containerization
- Kubernetes orchestration
- CDN for static assets
- Load balancing

## 📚 Additional Resources

### Learning Resources
- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/guide/)
- [MongoDB University](https://university.mongodb.com/)
- [JWT.io](https://jwt.io/) - JWT token debugger
- [Postman Learning Center](https://learning.postman.com/)

### Useful Tools
- [MongoDB Compass](https://www.mongodb.com/products/compass) - GUI for MongoDB
- [Postman](https://www.postman.com/) - API testing tool
- [VS Code](https://code.visualstudio.com/) - Code editor
- [Git](https://git-scm.com/) - Version control
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) - Deployment tool

### Community & Support
- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js) - Q&A
- [Node.js Community](https://nodejs.org/community/) - Official community
- [MongoDB Community Forums](https://community.mongodb.com/) - Database help
- [Express.js Community](https://expressjs.com/community.html) - Framework support

## 🤝 Contributing

We welcome contributions to improve this Course Management API! Here's how you can help:

### How to Contribute

1. **Fork the Repository**
   ```bash
   git fork https://github.com/your-username/course-management-api
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Follow existing code style and patterns
   - Add appropriate comments and documentation
   - Write tests for new features

4. **Test Your Changes**
   ```bash
   npm test
   npm run dev # Test manually
   ```

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: your feature description"
   ```

6. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Contribution Guidelines

- **Code Style**: Follow existing patterns and use meaningful variable names
- **Documentation**: Update README.md and add inline comments for complex logic
- **Testing**: Add tests for new features and ensure existing tests pass
- **Security**: Never commit sensitive data (API keys, passwords)
- **Performance**: Consider performance implications of changes

### Areas for Contribution

- Bug fixes and performance improvements
- Additional API endpoints
- Enhanced security features
- Test coverage improvements
- Documentation enhancements
- Integration with third-party services

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

```
MIT License

Copyright (c) 2025 Course Management API

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Support & Contact

### Getting Help

- **Documentation**: Check this README for comprehensive guides
- **Issues**: Create an issue on GitHub for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Email**: contact@coursemanagementapi.com (if applicable)

### Reporting Issues

When reporting issues, please include:
- Node.js and npm versions
- Operating system
- Steps to reproduce the issue
- Expected vs actual behavior
- Error messages and stack traces
- Environment details (local/production)

### Feature Requests

We love hearing your ideas! When requesting features:
- Explain the use case and problem it solves
- Provide examples of how it would work
- Consider backward compatibility
- Think about potential security implications

---

## 🎉 Conclusion

Congratulations! You now have a comprehensive Course Management API that includes:

✅ **Complete Authentication System** with JWT tokens  
✅ **Role-based Authorization** (User/Admin)  
✅ **Full Course CRUD Operations** with advanced filtering  
✅ **Secure Purchase System** with transaction tracking  
✅ **Production-ready Security** features  
✅ **Comprehensive Error Handling**  
✅ **Detailed Documentation** and examples  
✅ **Deployment-ready Configuration**  

This API serves as an excellent foundation for building online learning platforms, educational marketplaces, or any course-based application. The modular architecture makes it easy to extend with additional features as your platform grows.

### Next Steps
1. **Deploy to Production** using your preferred platform
2. **Build a Frontend** with React, Vue, or Angular
3. **Add Payment Processing** with Stripe or PayPal
4. **Implement Email Services** for user notifications
5. **Add File Upload** capabilities for course materials
6. **Scale with Caching** and performance optimizations

Happy coding! 🚀

---

*Built with ❤️ using Node.js, Express.js, and MongoDB*

