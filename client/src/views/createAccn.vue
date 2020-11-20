<template>
  <div class="acc">
    <Navbar></Navbar>
    <section>
      <h1>Welcome Lorem !</h1>
      <h2>Create an account to proceed further</h2>
      <button v-if="show == false" @click.prevent="showform">
        Create account
      </button>
      <div class="content" v-if="show == false">
        <h1>Important!</h1>
        <ul>
          <li>
            This will require you to fill personal details such as name ,
            education , religion etc.
          </li>
          <li>
            This information will be used to fill the basic details of the
            admission form of college, make sure the details entered are correct
            and valid.
          </li>
          <li>
            You can edit your details anytime after creating your account.
          </li>
          <li>
            Your account details will be kept secure and will only be used for
            only filling admission form Only you have the editing rights of your
            account.
          </li>
        </ul>
      </div>

      <form
        v-if="show == true"
        action=""
        id="createaccount"
        @submit.prevent="onSubmit"
      >
        <h1>Student Details</h1>
        <div class="studentdetails">
          <div class="form-group">
            <label for="fname">First Name </label><br />
            <input type="text" id="fname" required v-model="form.fname" />
          </div>
          <div class="form-group">
            <label for="lname">Last name </label><br />
            <input type="text" id="lname" required v-model="form.lname" />
          </div>
          <div class="form-group">
            <label for="email">Email </label><br />
            <input type="email" id="email" required v-model="form.email" />
          </div>
          <div class="form-group">
            <label for="contact">Contact no.</label><br />
            <input type="tel" id="contact" required v-model="form.contact" />
          </div>
          <div class="form-group">
            <label for="age">Age </label><br />
            <input type="text" id="age" required v-model="form.age" />
          </div>
          <div class="form-group">
            <label for="Gender">Gender</label><br />
            <select id="Gender" v-model="form.gender">
              <option disabled value="">Please select one</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="Caste">Caste</label><br />
            <select id="Caste" v-model="form.caste">
              <option disabled value="">Please select one</option>
              <option>General</option>
              <option>SC</option>
              <option>ST</option>
              <option>OBC</option>
            </select>
          </div>
          <div class="form-group">
            <label for="POB">Place Of Birth </label><br />
            <input type="text" id="POB" required v-model="form.POB" />
          </div>
          <div class="form-group">
            <label for="DOB">Date Of Birth </label><br />
            <input type="date" id="DOB" required v-model="form.DOB" />
          </div>
          <div class="form-group">
            <label for="Adhar">Adhaar No. </label><br />
            <input type="text" id="Adhar" required v-model="form.adhaarno" />
          </div>
        </div>

        <h1>Guardian Details</h1>
        <div class="guardiandetails">
          <div class="form-group">
            <label for="faname">Father's Name </label><br />
            <input type="text" id="faname" required v-model="form.fathername" />
          </div>
          <div class="form-group">
            <label for="mname">Mother's Name </label><br />
            <input type="text" id="mname" required v-model="form.mothername" />
          </div>
          <div class="form-group">
            <label for="gcontact">Contact no.</label><br />
            <input type="tel" id="gcontact" required v-model="form.gcontact" />
          </div>
        </div>
        <h1>Residential Details</h1>
        <div class="residentialdetails">
          <div class="form-group">
            <label for="country">Country</label><br />
            <input type="text" id="country" required v-model="form.country" />
          </div>
          <div class="form-group">
            <label for="state">State</label><br />
            <input type="text" id="state" required v-model="form.state" />
          </div>
          <div class="form-group">
            <label for="city">City</label><br />
            <input type="text" id="state" required v-model="form.city" />
          </div>
        </div>
        <h1>Educational Details</h1>
        <div class="residentialdetails">
          <div class="form-group">
            <label for="stream">Stream</label><br />
            <select id="stream" v-model="form.stream">
              <option disabled value="">Please select one</option>
              <option>Science</option>
              <option>Commerce</option>
              <option>Arts</option>
              <option>Deploma</option>
            </select>
          </div>
          <div class="form-group">
            <label for="HSSC">HSSC Percentage/CGPA</label><br />
            <input type="text" id="HSCC" required v-model="form.HSSC" />
          </div>
          <div class="form-group">
            <label for="SSC">SSC Percentage/CGPA</label><br />
            <input type="text" id="SSC" required v-model="form.SSC" />
          </div>
        </div>
        <hr />
        <div class="form-group end">
          <input type="submit" value="Create Account" class="button" />
        </div>
      </form>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
// // @ is an alias to /src

import Navbar from "@/components/navbar1.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "createAccn",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      show: false,
      form: {
        fname: null,
        lname: null,
        email: null,
        age: null,
        gender: null,
        caste: null,
        contact: null,
        POB: null,
        DOB: null,
        adhaarno: null,
        stream: null,
        fathername: null,
        mothername: null,
        gcontact: null,
        country: null,
        state: null,
        city: null,
        HSSC: null,
        SSC: null,
      },
    };
  },
  methods: {
    showform: function() {
      this.show = true;
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
</style>
