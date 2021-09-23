const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
});
module.exports = mongoose.model("Todo",TodoSchema);