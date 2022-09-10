const Question = require('../models/Question');

// create a question
exports.createQuestion = async (req,res) =>{
    try {
        const question = await Question.findOne({question: req.body.question});

        if(question){
            return res.status(400).json({message: 'This question is already exist.'});
        }

        const newQuestion = await Question.create(req.body);

        if(!newQuestion){
            return res.status(400).json({message: 'Question creation error.'});
        }
        return res.status(200).json({ message: 'Question added successful.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// get question by id
exports.getQuestionsById = async(req,res) =>{
    try {
        const questionId = req.params.id;
        const question = await Question.findOne({"_id": questionId}).populate('options');;
        
        if(!question){
            return res.status(400).json({message: 'No questions found...'});
        }

        return res.status(200).json({questionData: question,message: 'Question fetch successfully.'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// get all questions
exports.getAllQuestions = async (req,res) => {

    try {
        const questionList = await Question.find().populate('options');
        if(questionList.length == 0){
            return res.status(400).json({message: 'No questions found...'});
        }
        return res.status(200).json({questionList, message: "Questions fetched successfully."})
    } catch (error) {
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// delete question using id
exports.deleteQuestion = async(req,res) =>{
    try {
        const questionId = req.params.id; 
        const question = await Question.findByIdAndDelete({"_id": questionId});

        if(!question){
            return res.status(400).json({message: 'Error deleting question.'});
        }
        return res.status(200).json({message: 'Question delete successfully.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}