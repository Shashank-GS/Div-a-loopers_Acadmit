const express = require('express')

const Router = new express.Router()
require("../db/conn"); 
const Student = require("../models/student");

  Router.post("/student", async (req, res) => {
    try {
      const studentUser = new Student(req.body);
      const createStudent = await studentUser.save();
      res.status(201).send(createStudent);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  Router.get("/student", async (req, res) => {
    try {
      const studentsData = await Student.find(); 
      res.send(studentsData);
    } catch (e) {
      res.send(e);
    }
  });
  
  Router.delete("/student/:id", async(req,res)=>{
      try{
          // const _id= req.params.id;
          const deleteStudent= await Student.findByIdAndDelete(req.params.id);
          if(!req.params.id){
              return res.status(400).send();
          }
          res.send(deleteStudent);
      }
      catch(e){
          res.status(500).send(e);
      }
  })
  
  Router.patch("/student/:id", async(req,res)=>{
      try{
          const _id= req.params.id;
          const updateStudent= await Student.findByIdAndUpdate(_id, req.body,{
              new: true
          });
          
          res.send(updateStudent);
      }
      catch(e){
          res.status(400).send(e);
      }
  })
  
  // const createDocument1 = async () => {
  //   try {
  //     const student1 = new Student({
  //       firstName: "Sharad",
  //       lastName: "Naik",
  //       email: "sharuhv78784@gmail.com",
  //       age: 19,
  //       gender: "M",
  //     religion: "Hindu",
  //       caste: "GEN",
  //       contactNo: 8536876394,
  //      placeOfBirth: "Margao",
  //       dateOfBirth: { year: 2006, month: 0, day: 9 },
  //       adhaarNo: 345678765347,
  //       stream: "Science",
  //       fatherName: "Shivraj",
  //       motherName: "Sharvari",
  //       guardianContactNo: 8269875683,
  //          studentAddress:{
  //             address: "H.no:273 , Raiwant Street",
  //             city: "Margao",
  //             district: "South-Goa",
  //             state: "Goa",
  //             country: "India", 
  //             pinCode: 403721,
              
  //          } , 
  
  //       photograph: "",
  //       signImage: "",
  //     });
  //     const result = await student1.save();
  //     console.log(result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  
  // createDocument1(); 
  

  module.exports = Router   
  
  