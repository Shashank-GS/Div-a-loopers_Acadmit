const express = require('express')

const Router = new express.Router()
require("../db/conn"); 
const College = require("../models/college");

Router.get("/college", async (req, res) => {
  try {
    const collegesData = await College.find();
    res.send(collegesData);
  } catch (e) {
    res.send(e);
  }
});



// const createDocument = async () => {
//   try {
//     const college1 = new College({
//         collegeId:73 , 
//       collegeName: "Goa College of Engineering",
//         offeredUGProgram: "Bachelor of Engineering",
//         examsQualified:"GCET",
//         collegeaddress: {
//             taluka: "Ponda" ,
//             state: "Goa" ,
//             country: "India" 
//         },
//         requiredPercentage: 55 , 
        
      
//     });
//     const result = await college1.save();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// createDocument();





module.exports = Router 
