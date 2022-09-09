const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options:[{
        type: mongoose.Types.ObjectId,
        ref: 'Option',
    }]
})

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;