/**
 * 404 – route not found
 */
export function notFound(req, res, next) {
  const error = new Error(`Not found: ${req.originalUrl}`)
  error.status = 404
  next(error)
}

/**
 * Global error handler
 */
export function errorHandler(err, _req, res, _next) {
  const status = err.status || 500
  const isDev  = process.env.NODE_ENV !== 'production'

  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error',
    // Only expose stack trace in development
    ...(isDev && { stack: err.stack }),
  })
}
