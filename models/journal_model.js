//Schema
var mongoose = require('mongoose');

var journalSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    _id:{
        type:String,
        required:true,
        unique:true,
    },
  
    
});
// Export Contact model
var Journal = mongoose.model('journal', journalSchema);
module.exports = Journal;