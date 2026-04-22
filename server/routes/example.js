import { Router } from 'express'
import { getAll, getById } from '../controllers/exampleController.js'

const router = Router()

// GET /api/example
router.get('/', getAll)

// GET /api/example/:id
router.get('/:id', getById)

export default router
