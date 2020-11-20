<template>
  <div class="search">
    <Navbar></Navbar>
    <div class="top">
      <h1>Search Institutes..</h1>
      <div class="inputgrid">
        <div class="first">
          <label for="UGprogram">Enter UG program</label><br />
          <select name="UGprogram" v-model="UGprogram" id="UGprogram">
            <option value="BE">BE</option>
            <option value="MBBS">MBBS</option>
            <option value="BSci">BSci</option>
            <option value="BCom">BCom</option>
          </select>
        </div>
        <div class="second">
          <label for="Exam">Enter Exam Answered</label><br />

          <select name="Exam" v-model="Exam" id="Exam">
            <option value="GCET">GCET</option>
            <option value="NEET">NEET</option>
            <option value="JEEmains">JEE mains</option>
            <option value="BCom">/option> </option></select
          >
        </div>
        <div class="">
          <label for="Rank">Enter Rank</label><br />
          <input type="number" v-model="rank" />
        </div>
      </div>
    </div>
    <button>Show Results</button>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Navbar from "@/components/navbar1.vue";
export default {
  name: "search",
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Abril+Fatface&display=swap");
.top h1 {
  font-family: "Montserrat";
  text-align: center;
  font-weight: lighter;
  padding-top: 4%;
  margin-top: 1px;
  padding-bottom: 2%;
}
.top {
  padding: 0% 4% 4% 4%;
  color: white;
  background-color: #000d3a;
}
.inputgrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
}
label {
  font-family: "poppins";
  font-size: 1.2rem;
}
</style>
