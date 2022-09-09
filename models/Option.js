const mongoose = require('mongoose');

const optionSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    votes:{
        type:Number,
        default:0
    },
    link_to_vote:{
        type:String,
        default: "",
    }
})

const Option = mongoose.model("Option", optionSchema);
module.exports = Option;