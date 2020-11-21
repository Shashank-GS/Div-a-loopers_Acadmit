<template>
  <div class="acc">
    <Navbar></Navbar>
    <section>
      <h1>College Name</h1>
      <h2>
        Fill the required details and click apply to submit the application form
      </h2>
      <form action="" id="createaccount" @submit.prevent="applys">
        <h1>Student Details</h1>
        <div class="studentdetails">
          <div class="form-group">
            <label for="firstName">First Name </label><br />
            <input
              type="text"
              id="firstName"
              required
              v-model="studentform.firstName"
            />
          </div>
          <div class="form-group">
            <label for="lastName">Last name </label><br />
            <input
              type="text"
              id="lastName"
              required
              v-model="studentform.lastName"
            />
          </div>
          <div class="form-group">
            <label for="email">Email </label><br />
            <input
              type="email"
              id="email"
              required
              v-model="studentform.email"
            />
          </div>
          <div class="form-group">
            <label for="contactNo">Contact no.</label><br />
            <input
              type="tel"
              id="contactNo"
              required
              v-model="studentform.contactNo"
            />
          </div>
          <div class="form-group">
            <label for="age">Age </label><br />
            <input type="text" id="age" required v-model="studentform.age" />
          </div>
          <div class="form-group">
            <label for="gender">Gender </label><br />
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              v-model="studentform.gender"
            />
            <label for="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              v-model="studentform.gender"
            />
            <label for="female">Female</label>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              v-model="studentform.gender"
            />
            <label for="other">Other</label>
            <!-- <label for="Gender">Gender</label><br />
            <select id="Gender" v-model="form.gender">
              <option disabled value="">Please select one</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select> -->
          </div>
          <div class="form-group">
            <label for="Caste">Caste</label><br />
            <select id="Caste" v-model="studentform.caste">
              <option disabled value="">Please select one</option>
              <option>General</option>
              <option>SC</option>
              <option>ST</option>
              <option>OBC</option>
            </select>
          </div>
          <div class="form-group">
            <label for="placeOfBirth">Place Of Birth </label><br />
            <input
              type="text"
              id="placeOfBirth"
              required
              v-model="studentform.placeOfBirth"
            />
          </div>
          <div class="form-group">
            <label for="dateOfBirth">Date Of Birth </label><br />
            <input
              type="date"
              id="dateOfBirth"
              required
              v-model="studentform.dateOfBirth"
            />
          </div>
          <div class="form-group">
            <label for="adhaarNo">Adhaar No. </label><br />
            <input
              type="text"
              id="adhaarNo"
              required
              v-model="studentform.adhaarNo"
            />
          </div>
        </div>

        <h1>Guardian Details</h1>
        <div class="guardiandetails">
          <div class="form-group">
            <label for="fatherName">Father's Name </label><br />
            <input
              type="text"
              id="fatherNname"
              required
              v-model="studentform.fatherName"
            />
          </div>
          <div class="form-group">
            <label for="motherName">Mother's Name </label><br />
            <input
              type="text"
              id="motherName"
              required
              v-model="studentform.motherName"
            />
          </div>
          <div class="form-group">
            <label for="guardianContactNo">Contact no.</label><br />
            <input
              type="tel"
              id="guardianContactNo"
              required
              v-model="studentform.guardianContactNo"
            />
          </div>
        </div>
        <h1>Residential Details</h1>
        <div class="residentialdetails">
          <div class="form-group">
            <label for="country">Country</label><br />
            <input
              type="text"
              id="country"
              required
              v-model="studentform.country"
            />
          </div>
          <div class="form-group">
            <label for="state">State</label><br />
            <input
              type="text"
              id="state"
              required
              v-model="studentform.state"
            />
          </div>
          <div class="form-group">
            <label for="city">City</label><br />
            <input type="text" id="city" required v-model="studentform.city" />
          </div>
        </div>
        <h1>Educational Details</h1>
        <div class="residentialdetails">
          <div class="form-group">
            <label for="stream">Stream</label><br />
            <select id="stream" v-model="studentform.stream">
              <option disabled value="">Please select one</option>
              <option>Science</option>
              <option>Commerce</option>
              <option>Arts</option>
              <option>Deploma</option>
            </select>
          </div>
          <div class="form-group">
            <label for="resultHSSC">HSSC Percentage/CGPA</label><br />
            <input
              type="text"
              id="resultHSCC"
              required
              v-model="studentform.resultHSSC"
            />
          </div>
          <div class="form-group">
            <label for="resultSSC">SSC Percentage/CGPA</label><br />
            <input
              type="text"
              id="resultSSC"
              required
              v-model="studentform.resultSSC"
            />
          </div>
        </div>
        <div class="fileupload">
          <label for="file" class="file">Upload HSCC Marksheet</label><br />
          <input type="file" ref="file" @change="selectFile" required />
        </div>
        <div class="fileupload">
          <label for="file" class="file">Upload SCC Marksheet</label><br />
          <input type="file" ref="file" @change="selectFile" required />
        </div>
        <div class="fileupload">
          <label for="file" class="file">Upload Leaving Certificate </label
          ><br />
          <input type="file" ref="file" @change="selectFile" required />
        </div>
        <hr />
        <div class="form-group end">
          <input type="submit" value="Apply" class="button" />
        </div>
      </form>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/footer.vue";
import axios from 'axios'; 
export default {
  name: "CollegeForm",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      loginemail:this.$route.params.email, 
      studentform: {
        firstName: null,
        lastName: null,
        email: null,
        age: null,
        gender: null,
        caste: null,
        contactNo: null,
        placeOfBirth: null,
        dateOfBirth: null,
        adhaarNo: null,
        stream: null,
        fatherName: null,
        motherName: null,
        guadianContactNo: null,
        country: null,
        state: null,
        city: null,
        resultHSSC: null,
        resultSSC: null,
      },
    };
  },
  mounted() {
    const url= "http://localhost:5000/student/"
    const loginnow=this.loginemail
    axios.get(`${url}${loginnow}`)
    .then((response)=>{
      console.log(this.studentform)
      console.log(response.data);
      this.studentform= response.data[0] ; 
    })
    .catch((err)=>{
      console.log(err)
    })
  },
  methods:{
      applys(){
        alert('Application sent successfully'),
        this.$router.push('/search')
      }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Abril+Fatface&display=swap");
section {
  margin-left: 3%;
  margin-right: 3%;
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 212.109px;
  margin-top: 2%;
}
.acc {
  height: 100%;
  position: relative;
}
input,
select {
  margin-bottom: 30px;
}

section h1 {
  font-size: 2rem;
  font-family: "Montserrat";
  font-weight: bold;
}
section h2 {
  font-family: "Montserrat";
  font-weight: lighter;
  font-size: 1.4rem;
}
button {
  background-color: #000d3a;
  color: white;
  padding: 0.5%;
  border-radius: 5px;
  font-size: "poppins";
}
.content {
  margin-top: 3%;
}
.content h1 {
  font-size: 1.3rem;
  font-weight: lighter;
  margin-bottom: 2%;
}
.content ul li {
  margin-bottom: 2%;
}
.studentdetails {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.guardiandetails {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.residentialdetails {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
form h1 {
  font-size: 1.3rem;
  margin-top: 2%;
  margin-bottom: 2%;
}

.button {
  background-color: #000d3a;
  color: white;
  padding: 1%;
  border-radius: 5px;
  font-size: "poppins";
}
.end {
  text-align: center;
  margin: 4%;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
input[type="date"] {
  padding: 2.6%;
  background-color: rgb(235, 235, 235);
  border: 1px solid rgb(207, 207, 207);
  border-radius: 5px;
  width: 50%;
  margin-top: 2%;
  font-family: "Montserrat";
}
input[type="submit"] {
  font-size: 1rem;
  font-family: "Montserrat";
  padding: 1% 3%;
}

#Gender,
#Caste,
#stream {
  padding: 2%;
  background-color: rgb(235, 235, 235);
  border: 1px solid rgb(207, 207, 207);
  border-radius: 5px;
  width: 50%;
  margin-top: 2%;
}
#gender {
  padding-bottom: 5px;
}
option {
  font-size: 1rem;
}
input[type="file"] {
  margin-top: 1.3%;
}
</style>