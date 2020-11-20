const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    //  Personal Details
    
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already Present"],
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      required: true,
    },
    caste: {
      type: String,
    },
    contactNo: {
      type: Number,
      required: true, 
      unique: true,
    },
    placeOfBirth: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Object,
      required: true,
    }, 
    adhaarNo: {
      type: String,
      required: true,
      unique: true,
    },
  // Acedemic Details
  stream: {
      type: String,
      required: true,
    },
  
    // Guardians details
    fatherName: {
      type: String,
    },
    motherName: {
      type: String,
    },
    guardianContactNo: {
      type: Number,
      unique: true,
      required: true,
    },
   
  //   Students Address ... 
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
    resultHSSC:{
      type: Number, 
      required: true,
    },
    resultSSC:{
      type: Number, 
      required: true,
    },
    photograph: {
      data: Buffer,
      contentType: String,
    },
    signImage: {
      data: Buffer,
      contentType: String,
    },
  });
  
  const Student = new mongoose.model("Student", studentSchema);
  
 module.exports= Student;
