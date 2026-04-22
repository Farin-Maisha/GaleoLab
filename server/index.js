import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorHandler.js'

// ── Route imports ────────────────────────────────────
import exampleRouter from './routes/example.js'

const app = express()
const PORT = process.env.PORT || 5000

// ── Global Middleware ────────────────────────────────
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? 'https://yourdomain.com'   // swap with your real domain
    : 'http://localhost:3000',
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ── Health check ─────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV })
})

// ── Routes ───────────────────────────────────────────
app.use('/api/example', exampleRouter)

// ── Error handling (must be last) ────────────────────
app.use(notFound)
app.use(errorHandler)

// ── Start ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
