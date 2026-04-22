/**
 * GET /api/example
 */
export async function getAll(_req, res, next) {
  try {
    // TODO: replace with real DB query
    const data = [
      { id: 1, name: 'Item One' },
      { id: 2, name: 'Item Two' },
    ]
    res.json({ success: true, data })
  } catch (err) {
    next(err)
  }
}

/**
 * GET /api/example/:id
 */
export async function getById(req, res, next) {
  try {
    const { id } = req.params
    // TODO: replace with real DB query
    const item = { id: Number(id), name: `Item ${id}` }
    res.json({ success: true, data: item })
  } catch (err) {
    next(err)
  }
}
