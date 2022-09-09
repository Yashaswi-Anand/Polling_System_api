const Option = require("../models/Option");
const Question = require("../models/Question");

// create a option
exports.createOption = async (req,res) => {
    try {
        const questionId = req.params.id;

        const option = await Option.findOne({text: req.body.text});
        if(option){
            return res.status(400).json({message: "Option already exist."});
        }

        const newOption = await Option.create(req.body);
        if(!newOption){
            return res.status(400).json({message: "Option creation error."});
        }

        const optionData = await Option.findOne({text: req.body.text});
        const optionId = optionData.id;
        const link_to_vote= `http://localhost:5000/option/${optionId}/add_vote`; 
        optionData.link_to_vote = link_to_vote;
        const question = await Question.findById(questionId);
        
        const length = question.options.length;
        if(length == 0){
            question.options[0] = optionId;
        }else{
            question.options[length] = optionId;
        }
        question.save();
        optionData.save();

       return res.status(200).json({message: 'option created successfully.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// get all options
exports.getOptions= async(req,res) =>{
    try {
        const options = await Option.find();
        if(options.length == 0){
            return res.status(400).json({message: 'No options available.'});
        }
        return res.status(200).json({options, message: 'Options fetch successfully.'});
    } catch (error) {
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// Increment the count add_vote
exports.voteIncrement = async (req,res) => {
    try {
        const optionId = req.params.id;
        const option = await Option.findByIdAndUpdate(
            optionId,{ $inc: {votes: 1}}
        );
        if(!option){
            return res.status(400).json({message: 'Invalid id'});
        }
        return res.status(200).json({message: 'Successfully voted !!!'});

    } catch (error) {
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// delete option using id
exports.deleteOption = async(req,res) =>{
    try {
        const optionId = req.params.id;
        const option = await Option.findByIdAndDelete({'_id': optionId});
        if(!option){
            return res.status(400).json({message: 'Option deleting error.'});
        }
        return res.status(200).json({message: 'Option deleting successfully.'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}