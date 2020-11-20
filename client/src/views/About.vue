<template>
  <div class="about">
    <Navbar></Navbar>
    <section>
      <h1>Welcome Lorem</h1>
      <h2>Create an account to proceed further</h2>
      <button v-if="show == false" @click.prevent="showform">
        Create account
      </button>
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
section {
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 212.109px;
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
</style>