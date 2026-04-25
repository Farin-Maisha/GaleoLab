import pkg from 'pg'
import 'dotenv/config'
const { Pool } = pkg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

pool.on('connect', () => {
  console.log('✅ Database connected')
})

pool.on('error', (err) => {
  console.error('❌ Database error:', err.message)
})

export default pool