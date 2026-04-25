import { Router } from 'express'
import { body } from 'express-validator'
import { submitApplication } from '../controllers/careerController.js'
import { careerLimiter } from '../middleware/rateLimiter.js'

const router = Router()

const applicationValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name too long'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),

  body('role')
    .trim()
    .notEmpty().withMessage('Role is required'),

  body('portfolioUrl')
    .optional()
    .trim()
    .isURL().withMessage('Portfolio must be a valid URL'),

  body('message')
    .optional()
    .trim()
    .isLength({ max: 2000 }).withMessage('Message too long')
]

router.post('/apply', careerLimiter, applicationValidation, submitApplication)

export default router