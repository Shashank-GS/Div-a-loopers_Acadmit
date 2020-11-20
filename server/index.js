const express = require("express"); 
const bodyParser = require("body-parser");
const cors = require("cors"); 
const app = express(); 

const StudentRoutes = require('./routes/studentroutes') ;  
const CollegeRoutes = require('./routes/collegeroutes') ; 



// middleware
app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({extended:false}));
app.use(cors()); 

app.use(StudentRoutes);
app.use(CollegeRoutes); 

const port = process.env.PORT || 5000; 


// const static_path = path.join(__dirname, "../public");
// app.use(express.static(static_path));

app.listen(port, () =>
  console.log(`server Started successfully on port ${port}`)
);



