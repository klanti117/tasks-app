# 📋 Task Tracker API – Express.js Lab

This is a 20-minute hands-on lab to practice building a RESTful API using **Express.js** and **JavaScript**.

---

## 🧠 What You'll Learn

- How to use Express.js to build a simple backend
- How RESTful APIs work (`GET`, `POST`, `DELETE`)
- How to test your routes using Postman
- How to apply SDLC phases: Plan → Implement → Test → Iterate

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

## 🔌 API Endpoints

| HTTP Method | Route        | Description       |
| ----------- | ------------ | ----------------- |
| GET         | `/tasks`     | Get all tasks     |
| POST        | `/tasks`     | Add a new task    |
| DELETE      | `/tasks/:id` | Delete task by ID |

## 💡 Extra Challenges (Stretch Goals)

Add a PUT /tasks/:id route to edit a task
