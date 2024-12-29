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
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
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

## Directory Structure

### Backend
```
backend/
├── controllers/       # Business logic
├── models/            # Database schemas
├── routes/            # API routes
├── config/            # Database connection and configs
├── app.js             # Main server file
└── package.json       # Dependencies
```

### Frontend
```
frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Route-specific pages
│   ├── utils/         # Helper functions (e.g., Axios config)
│   ├── App.js         # Main application component
│   └── index.js       # React entry point
└── package.json       # Dependencies
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

## Screenshots
Add screenshots or gifs to showcase your app here.

---

## Future Improvements
- Add user authentication and authorization.
- Enhance the UI with more animations or features.
- Implement advanced search and filtering for books.
- Deploy the application.

---

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Acknowledgments
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)

