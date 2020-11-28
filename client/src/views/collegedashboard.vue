<template>
  <div class="college">
    <Navbar></Navbar>
    <section>
      <h1>Enter your College Details</h1>
      <form @submit.prevent="shift" action="">
        <div class="collegedetails">
          <div class="form-group">
            <label for="Cname">Name of College</label><br />
            <input type="text" id="Cname" required v-model="Cform.Cname" />
          </div>
          <div class="form-group">
            <label for="Cloc">Location</label><br />
            <input type="text" id="Cloc" required v-model="Cform.Location" />
          </div>
          <div class="form-group">
            <label for="email">Email</label><br />
            <input type="email" id="email" required v-model="Cform.Email" />
          </div>
          <div class="form-group">
            <label for="offeredUGprogram">Enter UG program</label><br />
            <select
              required
              name="offeredUGprogram"
              v-model="Cform.UGprogram"
              class="UGprogram"
            >
              <option value="BE">BE</option>
              <option value="MBBS">MBBS</option>
              <option value="BSC">BSC</option>
              <option value="BCOM">BCOM</option>
            </select>
          </div>
          <div class="form-group">
            <label for="Cutoff">Cutoff ( % / CGPA )</label><br />
            <input type="number" id="Cutoff" required v-model="Cform.cutoff" />
          </div>
          <div class="form-group">
            <label for="tseats">Total Seats</label><br />
            <input type="number" id="tseats" required v-model="Cform.Tseats" />
          </div>
          <div class="form-group">
            <label for="Exam">Examination considered for admission</label><br />
            <select
              required
              name="examsQualified"
              v-model="Cform.Exam"
              id="Exam"
            >
              <option value="GCET">GCET</option>
              <option value="NEET">NEET</option>
              <option value="JEEmains">JEE mains</option>
              <option value="HSSC">HSSC 12th</option>
            </select>
          </div>
          <div class="form-group end">
            <input type="submit" value="Register College" class="button" />
          </div>
        </div>
      </form>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar 2.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "Collegedashboard",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      Cform: {
        Cname: null,
        Location: null,
        UGprogram: null,
        cutoff: null,
        Tseats: null,
        Exam: null,
        Email: null,
      },
    };
  },
  methods: {
    shift() {
      this.$router.push("/StudentList");
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="text"],
input[type="email"],
input[type="number"] {
  background-color: rgb(235, 235, 235);
  border: 1px solid rgb(207, 207, 207);
  border-radius: 5px;
  padding: 0.7%;
  margin-top: 0.5%;
  font-family: "Montserrat";
}
#Exam,
.UGprogram {
  background-color: rgb(235, 235, 235);
  border: 1px solid rgb(207, 207, 207);
  border-radius: 5px;
  padding: 0.7%;
  margin-top: 0.5%;
  width: 15%;
}
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
.college {
  height: 100%;
  position: relative;
}
.form-group {
  margin-bottom: 2%;
}
.button {
  margin-top: 2%;
  background-color: #000d3a;
  color: white;
  padding: 1%;
  border-radius: 5px;
  font-size: "poppins";
}
</style>