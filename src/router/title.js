const express = require('express');
const titleRouter = express.Router();
const titleController = require('../controller/title');

 ;
titleRouter.get('/api/title', titleController.getAlltitle);
titleRouter.get('/api/title/:id', titleController.detailTodo);
titleRouter.post('/api/title', titleController.createTodo);
titleRouter.delete('/api/title/:id', titleController.deleteTodo);


module.exports = titleRouter;