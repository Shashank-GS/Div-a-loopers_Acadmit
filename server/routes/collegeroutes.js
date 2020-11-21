const express = require('express')

const Router = new express.Router()
require("../db/conn"); 
const College = require("../models/college");

Router.get("/college", async (req, res) => {
  try {
    const collegesData = await College
    .find({$or:[{offeredUGProgram: req.body.offeredUGProgram},{examsQualified: req.body.examsQualified},{rank:  req.body.rank}]}); 
   console.log(collegesData) 
    res.send(collegesData); 
  } catch (e) { 
    res.send(e);
  }
});



// const createDocument = async () => {
//   try {
//     const college1 = new College({
//         collegeId:80, 
//       collegeName: "Goa Medical College",
//         offeredUGProgram: "MBBS",
//         examsQualified:"NEET",
//         collegeaddress: {
//             taluka: "Ponda" ,
//             state: "Goa" ,
//             country: "India" 
//         },
//         rank: 300 , 
        
      
//     });
//     const result = await college1.save();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// createDocument();





module.exports = Router 
