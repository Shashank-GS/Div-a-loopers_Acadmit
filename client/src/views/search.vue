<template>
  <div class="search">
    <Navbar></Navbar>
    <section>
      <div class="top">
        <form action=""  @submit.prevent="onShowResult">
          <div class="bckg">
            \
            <h1>Search Institutes..</h1>
            <div class="inputgrid">
              <div class="form-group first">
                <label for="offeredUGprogram">Enter UG program</label><br />
                <select
                  required
                  name="offeredUGprogram"
                  v-model="form.offeredUGprogram"
                  class="UGprogram"
                >
                  <option value="BE">BE</option>
                  <option value="MBBS">MBBS</option>
                  <option value="BSC">BSC</option>
                  <option value="BCOM">BCOM</option>
                </select>
              </div>
              <div class="form-group second">
                <label for="examsQualified">Enter Exam Answered</label><br />
                <select required name="examsQualified" v-model="form.examsQualified" id="Exam">
                  <option value="GCET">GCET</option>
                  <option value="NEET">NEET</option>
                  <option value="JEEmains">JEE mains</option>
                   <option value="HSSC">HSSC 12th</option> 
                </select>
              </div>
              <div class="form-group third">
                <label for="Rank">Enter Rank</label><br />
                <input
                  required
                  id="Rank"
                  type="number"
                  v-model="form.rank"
                />
              </div>
            </div>
          </div>

          <div class="form-group end">
            <input type="submit" value="Show result" class="button" />
          </div>
        </form>
      </div>

      <h4>
        Enter the details and click on show results to find list of Institutes
        in which you are elegible to get admission
      </h4>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Navbar from "@/components/Navbar 2.vue";
import CollegeService from '../CollegeService'
export default {
  name: "search",
  components: {
    Footer,
    Navbar,
  },
  data() {
    return {
      college:{
        collegeId:null,
        offeredUGProgram:null,
        examsQualified:null,
        collegeaddress:null
      },
      form: {
        offeredUGprogram: null,
        examsQualified: null,
        rank: null,
      },
    };
  },
   methods: {
    async onShowResult() { 
      try {
        await CollegeService.SearchCollege(this.form) 
        alert('Your data ready to search') 
        // this.studentform = null; 
      } catch (error) {
        alert(error)
      }
    },
   }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Abril+Fatface&display=swap");
h1 {
  font-family: "Montserrat";
  text-align: center;
  font-weight: lighter;
  padding-top: 4%;
  letter-spacing: 2px;
  margin-top: 1px;
  padding-bottom: 3%;
  margin-bottom: 0;
  color: white;
  font-size: 2.4rem;
}
.bckg {
  margin-top: 0.5px;
  background-color: #000d3a;
}

.inputgrid {
  color: white;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding-bottom: 4%;
}
label {
  font-family: "poppins";
  font-size: 1.2rem;
}
.UGprogram,
#Exam {
  padding: 2%;
  background-color: rgb(235, 235, 235);
  border: 1px solid rgb(207, 207, 207);
  border-radius: 5px;
  width: 100%;
  margin-top: 2%;
}
#Rank {
  padding: 2.6%;
  background-color: rgb(235, 235, 235);
  border: 1px solid rgb(207, 207, 207);
  border-radius: 5px;
  width: 100%;
  margin-top: 2%;
}
.UGprogram,
#Exam,
#Rank:focus {
  outline: none;
  border: 1px solid rgb(48, 48, 48);
}
.btn {
  text-align: center;
}
.button {
  margin-top: 3%;
  text-align: center;
  background-color: #000d3a;
  color: white;
  padding: 1% 2%;
  border-radius: 5px;
  font-size: "poppins";
}
h4 {
  text-align: center;
  font-family: "Montserrat";
  font-weight: lighter;
  margin-bottom: 5%;
  margin-top: 4%;
  font-size: 1.3rem;
}
section {
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 212.109px;
}
.search {
  height: 100%;
  position: relative;
}
.end {
  text-align: center;
}
</style>
