# Hello World API

A simple RESTful API built with Node.js and Express that demonstrates basic CRUD (Create, Read, Update, Delete) operations on a greeting message.

---

## Table of Contents

- [Features](#features)
- [How It Works](#how-it-works)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)
- [Logging](#logging)
- [License](#license)

---

## Features

- Simple REST API with CRUD operations
- In-memory storage for a greeting message
- JSON request/response format
- Console logging for update and delete actions
- Easy to extend for learning or prototyping

---

## How It Works

- **Import Express module:**  
    Loads the Express library for building the API.

- **Create Express app:**  
    Initializes an Express application.

- **Enable JSON parsing middleware:**  
    Allows the app to parse incoming JSON request bodies.

- **Initialize greeting variable:**  
    Stores the greeting message in memory.

- **CREATE endpoint (`POST /hello`):**  
    - Receives a new greeting in the request body.
    - Sets the `greeting` variable to the provided value or defaults to "Hello, World!".
    - Responds with status 201 and the new greeting.

- **READ endpoint (`GET /hello`):**  
    - Returns the current value of the `greeting` variable as JSON.

- **UPDATE endpoint (`PUT /hello`):**  
    - Receives an updated greeting in the request body.
    - Stores the old greeting for logging.
    - Updates the `greeting` variable to the new value (or keeps the old one if not provided).
    - Logs the old and new greetings to the console.
    - Responds with a message and the updated greeting.

- **DELETE endpoint (`DELETE /hello`):**  
    - Logs the current greeting before deletion.
    - Sets the `greeting` variable to an empty string.
    - Logs that the greeting was deleted.
    - Responds with a message confirming deletion.

- **Start the server:**  
    - Sets the port to 3000.
    - Starts listening for requests.
    - Logs a message to the console indicating the server is running and the URL.

---

## File Structure

hello-world-api/  
├── index.js # Main API server file  
├── package.json # Node.js project metadata and dependencies  
└── README.md  

---

## Getting Started

1. **Clone the repository:**
     ```bash
     git clone https://github.com/yourusername/hello-world-api.git
     cd hello-world-api
     ```

2. **Install dependencies:**
     ```bash
     npm install
     ```

3. **Start the server:**
     ```bash
     node index.js
     ```

4. **The API will be running at:**  
     http://localhost:3000

---

## API Endpoints

| Method | Endpoint  | Description               | Request Body Example              |
|--------|-----------|--------------------------|-----------------------------------|
| POST   | /hello    | Create/set a greeting    | `{ "greeting": "Hi there!" }`     |
| GET    | /hello    | Read the current greeting| _None_                            |
| PUT    | /hello    | Update the greeting      | `{ "greeting": "Hello, API!" }`   |
| DELETE | /hello    | Delete the greeting      | _None_                            |

---

## Usage Examples

**Create a greeting:**

```bash
curl -X POST -H "Content-Type: application/json" -d '{"greeting":"Hi there!"}' http://localhost:3000/hello
```

**Read the greeting:**

```bash
curl http://localhost:3000/hello
```

**Update the greeting:**

> **Update the greeting:**
>
> ```
> curl -X PUT -H "Content-Type: application/json" -d '{"greeting":"Hello, API!"}' http://localhost:3000/hello
> ```

**Delete the greeting:**

> **Delete the greeting:**
>
> ```
> curl -X DELETE http://localhost:3000/hello
> ```

---

## Logging

When you update or delete the greeting, the server logs the old and new values to the console for traceability.

---

## License

MIT License

---

Happy coding!
