
const express = require('express');
const tasksRouter = require('./routes/tasks');

const {
  logger,
  notFound,
  errorHandler
} = require('./middleware');

const app = express();
const PORT = 3000;

// Middleware
app.use(logger);

// Middleware to read JSON request bodies
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the To-Do List API!',
    student: 'Student 001',
    project: 'Task Management System'
  });
});

// Mount task routes
app.use('/tasks', tasksRouter);

// Wildcard route - capture file path segments
app.get('/files/*path', (req, res) => {
  res.status(200).json({
    requestedPath: req.params.path
  });
});
// Handle unknown routes
app.use(notFound);

// Central error handler (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
