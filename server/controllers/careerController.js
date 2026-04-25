import { validationResult } from 'express-validator'
import pool from '../db.js'

export async function submitApplication(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(e => ({
        field: e.path,
        message: e.msg
      }))
    })
  }

  const { name, email, role, portfolioUrl, message } = req.body

  try {
    const result = await pool.query(
      `INSERT INTO applications (name, email, role, portfolio_url, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [name, email, role, portfolioUrl || null, message || null]
    )

    return res.status(201).json({
      success: true,
      message: 'Application received! We will review it and reach out soon.',
      data: {
        id: result.rows[0].id,
        submittedAt: result.rows[0].created_at
      }
    })
  } catch (err) {
    console.error('Application submission error:', err.message)
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    })
  }
}