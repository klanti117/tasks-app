# 📋 Task Tracker API – Express.js Lab

## 📖 Description

This is a beginner-friendly **Express.js** lab build and test a simple **RESTful API** for managing tasks. In just 20 minutes, students will create **GET**, **POST**, and **DELETE** routes using **JavaScript** and test them with Postman—reinforcing both backend fundamentals and core principles of the software development life cycle (SDLC).

---

## 🧠 What You'll Learn

- How to use Express.js to build a simple backend
- How RESTful APIs work (`GET`, `POST`, `DELETE`)
- How to test your routes using Postman
- How to apply SDLC phases: Plan → Implement → Test → Iterate

---

## 🔍 Project Walkthrough

This repository contains the scaffolding for a simple **Express.js** app that implements a **RESTful Task API**.

The server is created and listens on port 8080. The setup, the base route responds with a simple text message when you visit http://localhost:8080 in your browser.

Here's how it's structured:

```bash
    tasks-app/
    ├── server.js      # Main Express app file with route definitions
    ├── data.js        # In-memory mock data for tasks
    ├── package.json   # Node.js project metadata and dependencies
    └── README.md      # Lab instructions and documentation
```

---

## 📦 Setup Instructions

1. Clone this repository:

   ```bash
   git clone https://github.com/klanti117/tasks-app.git
   cd tasks-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   npm run devStart
   ```

4.Visit the server at:

```bash
  http://localhost:8080
```

---

## 🔌 API Endpoints

| HTTP Method | Route        | Description                                |
| ----------- | ------------ | ------------------------------------------ |
| GET         | `/tasks`     | Get all tasks                              |
| GET         | `/tasks/new` | Renders a simple form to create a new user |
| POST        | `/tasks/new` | Add a new task                             |
| DELETE      | `/tasks/:id` | Delete task by ID                          |

---

## 🧪 Lab Tasks

From the list below, some tasks are already completed in the starter code. As you review each task, identify which phase of the Software Development Life Cycle (SDLC) it belongs to.

| Tasks | Identity the SDLC Phase |
| 1. (Done) Initialize a Node.js project with `npm init` | {Your Answer} |
| 2. (Done) Install Express (`npm install express`) | {Your Answer} |
| 3. (Done) Set up `server.js` and configure a basic Express server | {Your Answer} |
| 4. (Pending) Create an in-memory array of tasks (in `data.js`) | {Your Answer} |
| 5. (Pending) Build a `GET /tasks` route to return all tasks | {Your Answer} |
| 6. (Pending) Build a `GET /tasks/new` route to render a basic form to add a task | {Your Answer} |
| 7. (Pending) Build a a `POST /tasks/new` route to add a new task | {Your Answer} |
| 8. (Pending) Build a DELETE `/tasks/:id` route to remove a task by ID | {Your Answer} |
| 9. (Pending) Test all routes using Postman or browser | {Your Answer} |
| 10. (Extra Credit) (Stretch) Add a `PUT /tasks/:id` route to update a task | {Your Answer} |
| 11. (Extra Credit) Add a `PUT /tasks/:id` route to update a task | {Your Answer} |
| 12. (Extra Credit) Refactor the code to follow DRY principles and improve clarity | {Your Answer} |

---
