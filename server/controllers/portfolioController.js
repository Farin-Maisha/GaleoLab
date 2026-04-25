import pool from '../db.js'

export async function getProjects(req, res) {
  try {
    const result = await pool.query(
      `SELECT id, title, category, description, metric, image_url, is_featured
       FROM projects
       ORDER BY sort_order ASC, created_at DESC`
    )

    return res.json({
      success: true,
      data: result.rows
    })
  } catch (err) {
    console.error('Portfolio fetch error:', err.message)
    return res.status(500).json({
      success: false,
      message: 'Could not fetch projects'
    })
  }
}