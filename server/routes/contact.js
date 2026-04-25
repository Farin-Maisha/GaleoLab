import { Router } from 'express'
import { body } from 'express-validator'
import { submitContact } from '../controllers/contactController.js'
import { contactLimiter } from '../middleware/rateLimiter.js'

const router = Router()

const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name must be under 100 characters'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),

  body('projectType')
    .trim()
    .notEmpty().withMessage('Project type is required'),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
    .isLength({ max: 2000 }).withMessage('Message must be under 2000 characters'),

  body('phone')
    .optional()
    .trim()
    .isLength({ max: 20 }).withMessage('Phone number too long')
]

router.post('/', contactLimiter, contactValidation, submitContact)

export default router