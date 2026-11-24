
const { requireAuth } = require('../middleware');
const express = require('express');
const router = express.Router();

// Our temporary task database
let tasks = [
  {
    id: 1,
    title: 'Study Express Routing',
    priority: 'High',
    done: false,
    category: 'College',
    dueDate: '2026-11-15'
  },
  {
    id: 2,
    title: 'Complete Programming Assignment',
    priority: 'High',
    done: false,
    category: 'College',
    dueDate: '2026-11-18'
  },
  {
    id: 3,
    title: 'Clean the bedroom',
    priority: 'Low',
    done: true,
    category: 'Personal',
    dueDate: '2026-11-14'
  },
  {
    id: 4,
    title: 'Buy groceries',
    priority: 'Medium',
    done: false,
    category: 'Personal',
    dueDate: '2026-11-16'
  },
  {
    id: 5,
    title: 'Practice JavaScript',
    priority: 'Medium',
    done: false,
    category: 'Learning',
    dueDate: '2026-11-20'
  }
];

 // GET tasks by optional category
router.get('/category{/:name}', (req, res) => {
  const category = req.params.name;

  if (!category) {
    return res.status(200).json(tasks);
  }

  const filteredTasks = tasks.filter(
    task => task.category.toLowerCase() === category.toLowerCase()
  );

  res.status(200).json(filteredTasks);
});

// GET all tasks
router.get('/', (req, res) => {
  res.status(200).json(tasks);
});


// POST - Create a new task
router.post('/', (req, res) => {
  const { title, priority, done, category, dueDate } = req.body;

  // Validate required fields
  if (
    !title ||
    !priority ||
    typeof done !== 'boolean' ||
    !category ||
    !dueDate
  ) {
    return res.status(400).json({
      message: 'Please provide all required task fields'
    });
  }

// Generate a new ID automatically
  const newId = tasks.length > 0
    ? Math.max(...tasks.map(task => task.id)) + 1
    : 1;

  const newTask = {
    id: newId,
    title,
    priority,
    done,
    category,
    dueDate
  };

  tasks.push(newTask);

  res.status(201).json({
    message: 'Task created successfully',
    task: newTask
  });
});

router.route('/:id')

// GET one task
.get(async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const task = tasks.find(task => task.id === id);

  if (!task) {
    const error = new Error('Task not found');
    error.status = 404;
    throw error;
  }

  res.status(200).json(task);
})

// UPDATE one task
.put((req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const { title, priority, done, category, dueDate } = req.body;

  if (
    !title ||
    !priority ||
    typeof done !== 'boolean' ||
    !category ||
    !dueDate
  ) {
    return res.status(400).json({
      message: 'Please provide all required task fields'
    });
  }

  task.title = title;
  task.priority = priority;
  task.done = done;
  task.category = category;
  task.dueDate = dueDate;

  res.status(200).json({
    message: 'Task updated successfully',
    task
  });
})

// DELETE one task (authentication required)
.delete(requireAuth, (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  res.status(200).json({
    message: 'Task deleted successfully',
    task: deletedTask[0]
  });
});

module.exports = router;
