# 🚀 Personal Portfolio Website

Full-stack portfolio with React frontend, Node.js/Express backend, and MongoDB database.

---

## 📁 Project Structure

```
portfolio/
├── frontend/          ← React app (Vite)
│   ├── src/
│   │   ├── App.jsx    ← Main component
│   │   └── App.css    ← All styles
│   ├── package.json
│   └── vite.config.js
│
└── backend/           ← Node.js + Express API
    ├── models/
    │   ├── Project.js ← MongoDB Project schema
    │   └── Contact.js ← MongoDB Contact schema
    ├── routes/
    │   ├── projects.js ← /api/projects (CRUD)
    │   └── contact.js  ← /api/contact
    ├── server.js       ← Entry point
    └── package.json
```

---

## ⚙️ Setup & Run Locally

### 1. MongoDB Setup (Free)
- Go to https://www.mongodb.com/atlas → Create free account
- Create a cluster → Get connection string
- It looks like: `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/portfolio`

### 2. Backend Setup
```bash
cd portfolio/backend
npm install
cp .env.example .env
# Edit .env and paste your MONGO_URI
npm run dev    # runs on http://localhost:5000
```

### 3. Frontend Setup
```bash
cd portfolio/frontend
npm install
cp .env.example .env
# VITE_API_URL=http://localhost:5000/api (already set)
npm run dev    # runs on http://localhost:3000
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/projects | Get all projects |
| POST   | /api/projects | Add a project |
| PUT    | /api/projects/:id | Update a project |
| DELETE | /api/projects/:id | Delete a project |
| POST   | /api/contact | Save contact message |
| GET    | /api/contact | View all messages |

### Add a Project (via terminal):
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My App",
    "description": "A cool full-stack app I built",
    "techStack": ["React", "Node.js", "MongoDB"],
    "liveUrl": "https://myapp.vercel.app",
    "githubUrl": "https://github.com/you/myapp"
  }'
```

---

## 🚀 Deployment

### Frontend → Vercel (Free)
1. Push frontend folder to GitHub
2. Go to vercel.com → Import project
3. Set environment variable: `VITE_API_URL=https://your-backend.railway.app/api`
4. Deploy!

### Backend → Railway (Free)
1. Push backend folder to GitHub
2. Go to railway.app → New Project → Deploy from GitHub
3. Add environment variables: `MONGO_URI`, `PORT=5000`, `CLIENT_URL=https://your-vercel-app.vercel.app`
4. Deploy!

---

## ✅ Checklist for Submission

- [x] Frontend: HTML, CSS, JavaScript (React.js)
- [x] Backend: Node.js + Express.js
- [x] Database: MongoDB (store project details)
- [x] REST API with full CRUD
- [x] Contact form saves to DB
- [x] Deploy-ready for Vercel + Railway/Render
- [ ] Your name, projects, and links added
- [ ] Deployed live URL ready
