import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorHandler.js'

// Routes
import contactRouter from './routes/contact.js'
import careerRouter from './routes/career.js'
import portfolioRouter from './routes/portfolio.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV })
})

// API Routes
app.use('/api/contact', contactRouter)
app.use('/api/career', careerRouter)
app.use('/api/portfolio', portfolioRouter)

// Error handling
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})