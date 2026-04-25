import rateLimit from 'express-rate-limit'

export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again after 1 hour.'
  },
  standardHeaders: true,
  legacyHeaders: false
})

export const careerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: {
    success: false,
    message: 'Too many applications from this IP. Please try again after 1 hour.'
  },
  standardHeaders: true,
  legacyHeaders: false
})