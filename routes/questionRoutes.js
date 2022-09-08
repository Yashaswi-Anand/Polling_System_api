const express = require('express');
const { createQuestion, deleteQuestion, getQuestionsById, getAllQuestions } = require('../controllers/questionController');
const route = express.Router();

// create question
route.post('/create',createQuestion);
// get all questions
route.get('/questions',getAllQuestions);
// get question by id
route.get('/:id',getQuestionsById);
// delete question
route.delete('/:id/delete', deleteQuestion);


module.exports = route;