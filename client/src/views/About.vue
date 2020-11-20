<template>
  <div class="about">
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
      <form action="" v-if="show == true">
        <label for="fname">First name:</label><br />
        <input v-model="fname" type="text" /><br />
        <label for="lname">Last name:</label><br />
        <input v-model="lname" type="text" /><br />
        <label for="email">Email:</label><br />
        <input v-model="email" type="email" /><br />
        <label for="age">Age:</label><br />
        <input v-model="age" type="number" /><br />
        <label for="email">Email:</label><br />
        <input v-model="email" type="email" /><br />
        <label for="male">Gender:</label><br />
        <input type="radio" id="male" />
        <label for="male">Male</label><br />
        <input type="radio" id="female" name="gender" value="female" />
        <label for="female">Female</label><br />
        <input type="radio" id="other" name="gender" value="other" />
        <label for="other">Other</label>
      </form>
    </section>

    <Footer></Footer>
  </div>
</template>
<script>
// // @ is an alias to /src
import Footer from "@/components/footer.vue";
import Navbar from "@/components/navbar1.vue";

export default {
  name: "About",
  components: {
    Footer,
    Navbar,
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
        religion: null,
        caste: null,
        contact: null,
        POB: null,
        DOB: null,
        adhaarno: null,
        stream: null,
        fathername: null,
        mothername: null,
        guardcontno: null,
        country: null,
        state: null,
        city: null,
        pincode: null,
      },
    };
  },
  methods: {
    showform: function () {
      this.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Abril+Fatface&display=swap");
section {
  margin-left: 3%;
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 212.109px;
  margin-top: 2%;
}
.about {
  height: 100%;
  position: relative;
}
input,
select {
  margin-bottom: 30px;
}
form {
  margin-top: 30px;
  margin-left: 30px;
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
</style>