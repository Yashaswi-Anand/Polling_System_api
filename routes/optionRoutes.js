const express = require('express');
const { getOptions, deleteOption, voteIncrement } = require('../controllers/optionController');
const route = express.Router();


// get all options
route.get('/options', getOptions);
//  delete option by id
route.delete('/:id/delete', deleteOption);
// increment vote
route.get('/:id/add_vote',voteIncrement);

module.exports = route