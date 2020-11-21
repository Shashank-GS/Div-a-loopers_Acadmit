import axios from "axios" ; 

const url = "http://localhost:5000/college/";  

class CollegeService{
    static SearchCollege (college) {
        return axios.get(url, college);
      }
}
export default CollegeService ; 