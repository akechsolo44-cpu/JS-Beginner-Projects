
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const requireAuth = (req, res, next) => {
  const token = req.headers['x-auth-token'];

  if (token !== 'mysecrettoken') {
    return res.status(401).json({
      message: 'Unauthorized: Invalid or missing token'
    });
  }

  next();
};

const notFound = (req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
};

module.exports = {
  logger,
  requireAuth,
  notFound,
  errorHandler
};
