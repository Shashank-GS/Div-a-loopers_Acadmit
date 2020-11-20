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
      <form action="">
        <form
          v-if="show == true"
          action=""
          id="createaccount"
          @submit.prevent="onSubmit"
        >
          <div class="form-group">
            <label for="id">First Name </label>
            <input type="text" id="id" required v-model="form.fname" />
          </div>
          <div class="form-group">
            <label for="name">Last name </label>
            <input type="text" id="name" required v-model="form.lname" />
          </div>
          <div class="form-group">
            <label for="raitings">Email </label>
            <input type="email" id="ratings" required v-model="form.email" />
          </div>
          <div class="form-group">
            <label for="age">Age </label>
            <input type="text" id="age" required v-model="form.age" />
          </div>
          <div class="form-group">
            <input type="submit" value="Add Sailor" class="btn" />
          </div>
        </form>
      </form>
    </section>
  </div>
</template>
<script>
// // @ is an alias to /src

import Navbar from "@/components/navbar1.vue";

export default {
  name: "About",
  components: {
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
