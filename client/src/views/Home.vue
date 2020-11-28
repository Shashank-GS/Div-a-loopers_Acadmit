<template>
  <div class="home">
    <div class="background-img">
      <Navbar></Navbar>
      <div class="overlay">
        <h1>ACADMIT.</h1>
        <div class="motto">Easy way to get admission in your dream college</div>
        <button @click="signup">Sign Up</button>
      </div>
    </div>
    <div class="About_section">
      <h1><span>What is Acadmit?</span></h1>
      <div class="content">
        <p>
          Acadmit is an undergraduate application process managament system
          which allows the student to complete his/her application process at
          the comfort of home. This portal also allows the colleges to get the
          list of students willing to take admission along with their documents.
        </p>
      </div>
    </div>
    <div class="Step_section">
      <h1><span>5 Simple Steps</span></h1>
      <div class="step_container">
        <ul class="progressor">
          <li>Login</li>
          <li>Create Profile</li>
          <li>Search Colleges</li>
          <li>Apply Online</li>
          <li>Get Admission</li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <p>We search results from over 1000+ institutes all over India</p>
      <a href="#">View Institues ></a>
    </div>
    <Footer />
  </div>
</template>

<script>
// // @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    signup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Abril+Fatface&display=swap");
.home {
  min-height: 100%;
}
.background-img {
  background-image: url(../assets/Hero_img.png);
  width: 100%;
  height: 60vh;
  background-size: cover;
}
.overlay {
  width: 100%;
  height: 51vh;
  background-size: cover;
  background-color: rgba(5, 5, 5, 0.28);
  color: white;
  h1 {
    position: relative;
    height: 20rem;
    left: 5%;
    top: 15%;
    font-family: Abril Fatface;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    letter-spacing: 0.16em;
  }
  .motto {
    position: relative;
    left: 5%;
    top: -60%;
    font-family: Poppins;
    font-weight: 400;
    font-size: 27px;
  }
  button {
    position: absolute;
    top: 38%;
    left: 5%;
    width: 118px;
    height: 48px;
    font-size: 18px;
    background: #000d3a;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 6px;
  }
}
.About_section {
  width: 50%;
  margin: 100px auto;
  text-align: center;
  color: #000d3a;
  h1 {
    font-family: Poppins;
    font-style: medium;
    font-size: 2rem;
    font-weight: 1000;
    position: relative;
  }
  h1:before {
    content: " ";
    display: block;
    width: 120px;
    height: 1px;
    background: #000d3a;
    left: 8%;
    top: 50%;
    position: absolute;
  }
  h1:after {
    content: " ";
    display: block;
    width: 120px;
    height: 1px;
    background: #000d3a;
    right: 8%;
    top: 50%;
    position: absolute;
  }
  .content p {
    font-family: Montserrat;
  }
}
.Step_section {
  width: 50%;
  margin: -50px auto;
  text-align: center;
  color: #000d3a;
  h1 {
    font-family: Poppins;
    font-style: medium;
    font-size: 2rem;
    font-weight: 1000;
    position: relative;
  }
  h1:before {
    content: " ";
    display: block;
    width: 120px;
    height: 1px;
    background: #000d3a;
    left: 10%;
    top: 50%;
    position: absolute;
  }
  h1:after {
    content: " ";
    display: block;
    width: 120px;
    height: 1px;
    background: #000d3a;
    right: 10%;
    top: 50%;
    position: absolute;
  }
}
.progressor {
  margin-left: -5%;
  margin-top: 4rem;
}
.progressor li {
  font-family: Montserrat;
  font-size: 17px;
  list-style: none;
  float: left;
  width: 20%;
  position: relative;
  text-align: center;
}
.progressor li:before {
  content: "";
  width: 20px;
  height: 20px;
  border: 5px solid #000d3a;
  border-radius: 50%;
  display: block;
  margin: 0 auto 10px auto;
  background-color: white;
}
.progressor li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #000d3a;
  top: 9px;
  left: -51%;
  z-index: -1;
}
.progressor li:first-child:after {
  content: none;
}
.bottom {
  position: absolute;
  width: 100%;
  height: 25vh;
  top: 145%;
  background: #e7e1e1;
  color: black;
  text-align: center;
  p {
    margin-top: 30px;
    font-family: Poppins;
    font-size: 35px;
  }
  a {
    text-decoration: none;
    font-size: 23px;
    font-family: Poppins;
    color: black;
    position: relative;
    top: -15px;
  }
}
Footer {
  position: relative;
  margin-top: 30%;
}
</style>
