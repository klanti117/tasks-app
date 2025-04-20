# 📋 Task Tracker API – Express.js Lab

## 📖 Description

This is a beginner-friendly **Express.js** lab designed to help students build and test a simple **RESTful API** for managing tasks. In just 20 minutes, students will create **GET**, **POST**, and **DELETE** routes using **JavaScript** and test them with Postman—reinforcing both backend fundamentals and core principles of the software development life cycle (SDLC).

---

## 🧠 What You'll Learn

- How to use Express.js to build a simple backend
- How RESTful APIs work (`GET`, `POST`, `DELETE`)
- How to test your routes using Postman
- How to apply SDLC phases: Plan → Implement → Test → Iterate

---

## 🔍 Project Walkthrough

This repository contains the scaffolding for a simple Express.js app that implements a RESTful Task API. Here's how it's structured:

```bash
    tasks-app/
    ├── server.js         # Main Express app file with route definitions
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

| HTTP Method | Route        | Description       |
| ----------- | ------------ | ----------------- |
| GET         | `/tasks`     | Get all tasks     |
| POST        | `/tasks`     | Add a new task    |
| DELETE      | `/tasks/:id` | Delete task by ID |

---

## 💡 Extra Challenges (Stretch Goals)

Add a PUT /tasks/:id route to edit a task
