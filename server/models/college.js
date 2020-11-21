const mongoose = require("mongoose");
const collegeSchema = new mongoose.Schema({
    collegeId:{
        type: Number,
        required: true,
        unique:  true
    }, 

  collegeName: {
    type: String,
    required: true,
  },
  offeredUGProgram: {
    type: String,
    required: true,
  },
  examsQualified:{
    type: String, 
    required: true,
  },
  collegeaddress: {
      type: Object,
  },
  rank: {
    type: Number,
  }

});
const College = new mongoose.model("college", collegeSchema); 
module.exports = College; 