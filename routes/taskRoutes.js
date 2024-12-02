const express = require('express');

const taskRoutes = express.Router();
const {getTasks, addTask, updateTask, deleteTask} = require('../controllers/taskControllers')

taskRoutes.get('/get-tasks', getTasks);

taskRoutes.post('/add-task', addTask);

taskRoutes.put('/update-task/:id', updateTask);

taskRoutes.delete('/delete-task/:id',deleteTask);

module.exports = taskRoutes;