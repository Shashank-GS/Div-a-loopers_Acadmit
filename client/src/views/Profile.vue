<template>
  <div class="acc">
    <Navbar></Navbar>
    <section>
      <h1>Welcome {{ studentform.firstName + " " + studentform.lastName }}</h1>
      <h2>Your Account Details</h2>
      <button v-if="show == false" @click.prevent="showform">
        Edit Profile
      </button>
      <div v-if="show == false">
        <h1>Student Details</h1>
        <div class="studentdetails" v-bind:item="studentform">
          <div class="form-group">
            <label class="a" for="firstName">First Name: </label
            >{{ studentform.firstName }}
          </div>
          <div class="form-group">
            <label class="a" for="lastName">Last name: </label
            >{{ studentform.lastName }}
          </div>
          <div class="form-group">
            <label class="a" for="email">Email: </label>{{ studentform.email }}
          </div>
          <div class="form-group">
            <label class="a" for="contactNo">Contact no.:</label
            >{{ studentform.contactNo }}
          </div>
          <div class="form-group">
            <label class="a" for="age">Age: </label>{{ studentform.age }}
          </div>
          <div class="form-group">
            <label class="a" for="gender">Gender: </label
            >{{ studentform.gender }}
          </div>
          <div class="form-group">
            <label class="a" for="Caste">Caste:</label>{{ studentform.caste }}
          </div>
          <div class="form-group">
            <label class="a" for="placeOfBirth">Place Of Birth: </label
            >{{ studentform.placeOfBirth }}
          </div>
          <div class="form-group">
            <label class="a" for="dateOfBirth">Date Of Birth: </label
            >{{ studentform.dateOfBirth }}
          </div>
          <div class="form-group">
            <label class="a" for="adhaarNo">Adhaar No.: </label
            >{{ studentform.adhaarNo }}
          </div>
        </div>

        <h1>Guardian Details</h1>
        <div class="guardiandetails">
          <div class="form-group">
            <label class="a" for="fatherName">Father's Name: </label
            >{{ studentform.fatherName }}
          </div>
          <div class="form-group">
            <label class="a" for="motherName">Mother's Name: </label
            >{{ studentform.motherName }}
          </div>
          <div class="form-group">
            <label class="a" for="guardianContactNo">Contact no.:</label
            >{{ studentform.guardianContactNo }}
          </div>
        </div>
        <h1>Residential Details</h1>
        <div class="residentialdetails">
          <div class="form-group">
            <label class="a" for="country">Country:</label
            >{{ studentform.country }}
          </div>
          <div class="form-group">
            <label class="a" for="state">State:</label>{{ studentform.state }}
          </div>
          <div class="form-group">
            <label class="a" for="city">City:</label>{{ studentform.city }}
          </div>
        </div>
        <h1>Educational Details</h1>
        <div class="residentialdetails">
          <div class="form-group">
            <label class="a" for="stream">Stream:</label
            >{{ studentform.stream }}
          </div>
          <div class="form-group">
            <label class="a" for="resultHSSC">HSSC Percentage/CGPA:</label
            >{{ studentform.resultHSSC }}
          </div>
          <div class="form-group">
            <label class="a" for="resultSSC">SSC Percentage/CGPA:</label
            >{{ studentform.resultSSC }}
          </div>
        </div>
        <hr />
        <div class="form-group end">
          <input
            type="submit"
            value="Search Institutes"
            class="button"
            @click="viewinstitute"
          />
        </div>
      </div>
      <!-- <form
        v-if="show == true"
        action=""
        id="createaccount"
        @submit.prevent="onCreateAccount"
      >
        <h1>Student Details</h1>
        <div class="studentdetails">
          <div class="form-group">
            <label for="firstName">First Name </label><br />
            <input type="text" id="firstName" required v-model="studentform.firstName" />
          </div>
          <div class="form-group">
            <label for="lastName">Last name </label><br />
            <input type="text" id="lastName" required v-model="studentform.lastName" />
          </div>
          <div class="form-group">
            <label for="email">Email </label><br />
            <input type="email" id="email" required v-model="studentform.email" />
          </div>
          <div class="form-group">
            <label for="contactNo">Contact no.</label><br />
            <input type="tel" id="contactNo" required v-model="studentform.contactNo" />
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
            <input type="text" id="placeOfBirth" required v-model="studentform.placeOfBirth" />
          </div>
          <div class="form-group">
            <label for="dateOfBirth">Date Of Birth </label><br />
            <input type="date" id="dateOfBirth" required v-model="studentform.dateOfBirth" />
          </div>
          <div class="form-group">
            <label for="adhaarNo">Adhaar No. </label><br />
            <input type="text" id="adhaarNo" required v-model="studentform.adhaarNo" />
          </div>
        </div>

        <h1>Guardian Details</h1>
        <div class="guardiandetails">
          <div class="form-group">
            <label for="fatherName">Father's Name </label><br />
            <input type="text" id="fatherNname" required v-model="studentform.fatherName" />
          </div>
          <div class="form-group">
            <label for="motherName">Mother's Name </label><br />
            <input type="text" id="motherName" required v-model="studentform.motherName" />
          </div>
          <div class="form-group">
            <label for="guardianContactNo">Contact no.</label><br />
            <input type="tel" id="guardianContactNo" required v-model="studentform.guardianContactNo" />
          </div>
        </div>
        <h1>Residential Details</h1>
        <div class="residentialdetails">
          <div class="form-group">
            <label for="country">Country</label><br />
            <input type="text" id="country" required v-model="studentform.country" />
          </div>
          <div class="form-group">
            <label for="state">State</label><br />
            <input type="text" id="state" required v-model="studentform.state" />
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
            <input type="text" id="resultHSCC" required v-model="studentform.resultHSSC" />
          </div>
          <div class="form-group">
            <label for="resultSSC">SSC Percentage/CGPA</label><br />
            <input type="text" id="resultSSC" required v-model="studentform.resultSSC" />
          </div>
        </div>
        <hr />
        <div class="form-group end">
          <input type="submit" value="Update Profile" class="button" @click="update"/>
        </div>
      </form> -->
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
// // @ is an alias to /src

import Navbar from "@/components/Navbar 2.vue";
import Footer from "@/components/footer.vue";

// import StudentService from '../StudentService'
import axios from "axios";
export default {
  name: "createAccn",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      show: false,
      loginemail: this.$route.params.email,
      studentform: "",
      // studentform: {
      //   firstName: null,
      //   lastName: null,
      //   email: null,
      //   age: null,
      //   gender: null,
      //   caste: null,
      //   contactNo: null,
      //   placeOfBirth: null,
      //   dateOfBirth: null,
      //   adhaarNo: null,
      //   stream: null,
      //   fatherName: null,
      //   motherName: null,
      //   guadianContactNo: null,
      //     country: null,
      //     state: null,
      //     city: null,
      //   resultHSSC: null,
      //   resultSSC: null,
      // },
    };
  },
  mounted() {
    const url = "http://localhost:5000/student/";
    const loginnow = this.loginemail;
    axios
      .get(`${url}${loginnow}`)
      .then((response) => {
        console.log(this.studentform);
        console.log(response.data);
        this.studentform = response.data[0];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    showform: function () {
      this.show = true;
    },
    viewinstitute() {
      this.$router.push({ name: "search", params: { email: this.loginemail } });
    },
    update() {
      this.show = false;
    },
  },
};
</script>
<style lang="scss" scoped>
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
.a {
  font-weight: 600;
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
  margin-top: 30px;
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
  cursor: pointer;
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
  cursor: pointer;
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
</style>
