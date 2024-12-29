# MERN Book Store Project

## Description
A CRUD application for managing books in a store. This project uses the MERN stack (MongoDB, Express, React, and Node.js) to demonstrate the functionality of adding, reading, updating, and deleting books in a seamless single-page application (SPA).

---

## Features
- **CRUD Operations**: Create, Read, Update, and Delete books.
- **Frontend**:
  - React for building dynamic user interfaces.
  - React Router for single-page application navigation.
  - Tailwind CSS for responsive and modern styling.
  - Notistack for notifications.
- **Backend**:
  - Node.js and Express for server-side logic.
  - MongoDB with Mongoose for database interactions.
  - MVC (Model-View-Controller) architecture for scalability and maintainability.
- **Others**:
  - Axios for API requests.
  - CORS for cross-origin resource sharing.

---

## Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Notistack
- Axios

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- CORS

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- MongoDB database setup

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/book-store.git
   cd book-store
   ```

2. **Install dependencies**
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Environment Setup**
   - Create a `.env` file in the backend folder and add the following:
     ```env
     DB_USER=username
     DB_PASSWORD=password
     ```

4. **Run the application**
   - Start the backend:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend:
     ```bash
     cd frontend
     npm start
     ```

---



## API Endpoints

### Books
| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| GET    | `/api/books`     | Fetch all books    |
| GET    | `/api/books/:id` | Fetch a book by ID |
| POST   | `/api/books`     | Add a new book     |
| PUT    | `/api/books/:id` | Update a book      |
| DELETE | `/api/books/:id` | Delete a book      |

---


## Acknowledgments
- [FreeCodeCamp](https://www.youtube.com/@freecodecamp)
- [DevEmpower](https://www.youtube.com/@DevEmpower)

