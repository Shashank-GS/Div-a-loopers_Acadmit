const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`server Started successfully on port ${port}`)
);

// The data base connect setup
mongoose
  .connect(
    "mongodb+srv://shashank:shashank@cluster0.eidtw.mongodb.net/aceddb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log("There is some error while connect to database"+err));

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

  religion: {
    type: String,
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
  studentAddress: {
    type: Object ,
    required: true
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


const createDocument1 = async () => {
  try {
    const student1 = new Student({
      firstName: "Sharad",
      lastName: "Naik",
      email: "sharadn7874@gmail.com",
      age: 19,
      gender: "M",
    religion: "Hindu",
      caste: "GEN",
      contactNo: 8534588394,
     placeOfBirth: "Margao",
      dateOfBirth: { year: 2006, month: 0, day: 9 },
      adhaarNo: 345563762347,
      stream: "Science",
      fatherName: "Shivraj",
      motherName: "Sharvari",
      guardianContactNo: 82671238394,
         studentAddress:{
            address: "H.no:273 , Raiwant Street",
            city: "Margao",
            district: "South-Goa",
            state: "Goa",
            country: "India", 
            pinCode: 403721,
            
         } , 

      photograph: "",
      signImage: "",
    });
    const result = await student1.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument1(); 

app.post("/student", async (req, res) => {
  try {
    const studentUser = new Student(req.body);
    const createStudent = await studentUser.save();
    res.status(201).send(createStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/student", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

app.delete("/student/:id", async(req,res)=>{
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

app.patch("/student/:id", async(req,res)=>{
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

// the schema for the  Colleges

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
  requiredPercentage: {
    type: Number,
  }

});
const College = new mongoose.model("college", collegeSchema);

const createDocument = async () => {
    try {
      const college1 = new College({
          collegeId:14, 
        collegeName: "Goa College of Engineering",
          offeredUGProgram: "Bachelor of Engineering",
          examsQualified:"GCET",
          collegeaddress: {
              taluka: "Ponda" ,
              state: "Goa" ,
              country: "India" 
          },
          requiredPercentage: 55 , 
          
        
      });
      const result = await college1.save();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  
  createDocument();

app.get("/college", async (req, res) => {
  try {
    const collegesData = await College.find();
    res.send(collegesData);
  } catch (e) {
    res.send(e);
  }
});
