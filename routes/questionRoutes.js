const express = require('express');
const { createOption } = require('../controllers/optionController');
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
// create options
route.post('/:id/options/create',createOption);


module.exports = route;