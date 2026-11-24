# To-Do List API

## Project Information

- **Student:** Student 001
- **Project:** Task Management System
- **Project Type:** REST API
- **Technology:** Node.js and Express 5
- **Data Storage:** In-memory JavaScript array

## Description

The To-Do List API is a RESTful API built using Node.js and Express 5. It allows users to manage tasks through HTTP requests.

The API supports creating, retrieving, updating, and deleting tasks. It also provides category filtering, wildcard path handling, authentication middleware, request logging, and centralized error handling.

All task data is stored temporarily in a JavaScript array. No database or frontend is used.

## Project Structure

```text
todo-list-api/
├── index.js
├── middleware.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── routes/
    └── tasks.js
```

## Installation

1. Clone or download the project.
2. Open the project folder in your terminal.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The API runs at:

`http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Welcome message |
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/:id` | Retrieve a task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task (authentication required) |
| GET | `/tasks/category` | Retrieve all tasks |
| GET | `/tasks/category/:name` | Filter tasks by category |
| GET | `/files/*path` | Capture wildcard file path |
| ANY | Unknown routes | Return 404 error |

## Task Object Structure

Each task contains:

- `id`: Unique task identifier
- `title`: Task title
- `priority`: Task priority
- `done`: Completion status
- `category`: Task category
- `dueDate`: Task deadline

## Authentication

The DELETE endpoint requires an authentication header.

| Header | Value |
|---|---|
| `x-auth-token` | `mysecrettoken` |

Without a valid token, the API returns HTTP 401 Unauthorized.

## HTTP Status Codes

- `200 OK`: Request completed successfully.
- `201 Created`: New task successfully created.
- `400 Bad Request`: Required task fields are missing or invalid.
- `401 Unauthorized`: Authentication token is missing or invalid.
- `404 Not Found`: Requested task or route does not exist.
- `500 Internal Server Error`: Unexpected server error.

## Middleware

The project uses:

- **Logger:** Logs incoming HTTP methods and URLs.
- **Authentication:** Protects the DELETE endpoint.
- **Not Found Handler:** Handles unknown routes.
- **Error Handler:** Centralizes error responses.

## Technologies Used

- Node.js
- Express 5
- JavaScript
- Nodemon
- Postman or Thunder Client for API testing

## Notes

- Task data is stored in memory and resets when the server restarts.
- This project does not use a database.
- This project does not include a frontend.
