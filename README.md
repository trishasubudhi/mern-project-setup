# MERN Project Setup (Backend Starter Template)

A reusable backend starter template built with Express.js, MongoDB, Mongoose, EJS, and ES Modules.

This project provides a clean and scalable folder structure that can be used as the foundation for future web applications.

---

## Features

* Express.js server setup
* ES Modules support
* MongoDB integration with Mongoose
* Environment variable configuration using dotenv
* EJS templating engine
* Express EJS Layouts support
* Static asset handling
* Modular routing structure
* Scalable project architecture

---

## Project Structure

```text
mern-project-setup/
│
├── controllers/
│   └── index.js
│
├── models/
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/
│   ├── layouts/
│   │   └── layout.ejs
│   └── index.ejs
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* Express EJS Layouts
* Dotenv
* Nodemon

---

## Installation

### Clone the repository

```bash
git clone https://github.com/trishasubudhi/mern-project-setup.git
```

### Navigate to project directory

```bash
cd mern-project-setup
```

### Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory.

Example:

```env
DATABASE_URL=mongodb://127.0.0.1:27017/demoDB
PORT=3000
```

---

## Running MongoDB

Ensure MongoDB is installed and running locally.

Default MongoDB connection:

```env
DATABASE_URL=mongodb://127.0.0.1:27017/demoDB
```

Check available databases:

```bash
mongosh
```

```javascript
show dbs
```

---

## Running the Project

Start the application:

```bash
npm start
```

Runs:

```bash
node server.js
```

For development:

```bash
npm run devStart
```

Runs:

```bash
nodemon server.js
```

---

## Database Connection

Mongoose is used to establish a connection with MongoDB.

Example:

```javascript
mongoose.connect(process.env.DATABASE_URL);
```

Connection events:

```javascript
db.on("error", console.error.bind(console, "Connection error:"));

db.once("open", () => {
    console.log("Connected to MongoDB");
});
```

---

## Routing

Routes are organized separately for better maintainability in controllers folder.

Example:

```javascript
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

export default router;
```

---

## Views

The project uses EJS as the templating engine.

Layout support is provided through Express EJS Layouts.

Example:

```javascript
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");
```

---

## Static Files

Public assets such as CSS, JavaScript, and images are served from the `public` folder.

```javascript
app.use(express.static("public"));
```

---

## Future Improvements

* Authentication and Authorization
* REST API Support
* File Uploads
* Session Management
* Flash Messages
* Form Validation
* React Frontend Integration
* Full MERN Stack Architecture

---

## Purpose

This repository serves as a reusable starter template for future Express and MongoDB projects. It helps reduce setup time and provides a consistent project structure for scalable development.

---

## Author

**Trisha Subudhi**

Feel free to fork, use, and customize this template for your own projects.
