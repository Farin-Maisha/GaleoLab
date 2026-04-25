import { validationResult } from 'express-validator'
import pool from '../db.js'

export async function submitContact(req, res) {
  // Check validation errors
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

  const { name, email, phone, projectType, message } = req.body

  try {
    const result = await pool.query(
      `INSERT INTO contacts (name, email, phone, project_type, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [name, email, phone || null, projectType, message]
    )

    return res.status(201).json({
      success: true,
      message: 'Message received! We will get back to you within 24 hours.',
      data: {
        id: result.rows[0].id,
        submittedAt: result.rows[0].created_at
      }
    })
  } catch (err) {
    console.error('Contact submission error:', err.message)
    console.error('Full error:', err)
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again or email us directly.'
    })
  }
}