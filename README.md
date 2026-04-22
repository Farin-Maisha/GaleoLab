# GaleoLab

A React + Express project with a clean client/server structure.

## Project Structure

```
├── client/          # React frontend (Vite)
│   └── src/
│       ├── components/layout/   # BaseLayout, Navbar, Footer
│       └── pages/               # Home, AboutUs, Services, NotFound
├── server/          # Express backend
│   ├── controllers/ # Business logic
│   ├── middleware/  # Error handling, auth, etc.
│   └── routes/      # Route definitions
├── .gitignore
└── package.json     # Root scripts
```

## Getting Started

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Configure environment

```bash
cp server/.env.example server/.env
# Edit server/.env with your values
```

### 3. Run in development

```bash
# Run both client + server concurrently
npm run dev

# Or individually:
npm run client   # http://localhost:3000
npm run server   # http://localhost:5000
```

## API

| Method | Endpoint           | Description        |
|--------|--------------------|--------------------|
| GET    | `/api/health`      | Health check       |
| GET    | `/api/example`     | Get all items      |
| GET    | `/api/example/:id` | Get item by ID     |

## Adding a New Page

1. Create `client/src/pages/MyPage.jsx` + `MyPage.module.css`
2. Add the route in `client/src/App.jsx`
3. Add the link in `client/src/components/layout/Navbar.jsx`

## Adding a New API Route

1. Create `server/controllers/myController.js`
2. Create `server/routes/my.js`
3. Register in `server/index.js` → `app.use('/api/my', myRouter)`
