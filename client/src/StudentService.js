import axios from "axios" ; 

const url = "http://localhost:5000/student/";  

class StudentService{
    static AddStudent (student) {
        return axios.post(url, student)
      }
}
export default StudentService ;   