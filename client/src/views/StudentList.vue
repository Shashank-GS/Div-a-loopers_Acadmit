<template>
  <div class="StudentList">
    <Navbar></Navbar>
    <section>
      <h5>Student List</h5>
      <div class="card">
        <div class="details">
          <h1>Name: {{ StudentName[0] }}</h1>
          <h2>Rank: {{ Rank }}</h2>
          <h3>Contact: {{ Contact }}</h3>
        </div>
        <div class="btn">
          <button>View Details</button>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "StudentList",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      StudentName: ["Rahul Prasad", "Lorem Ipsum"],
      Rank: "45",
      Contact: "9382328373",
    };
  },
};
</script>
<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: "poppins";
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  margin: 3% 45% 3% 0%;
  padding: 1.4%;
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
.StudentList {
  height: 100%;
  position: relative;
}
h5 {
  margin-top: 2%;
  font-size: 2rem;
  font-family: "Montserrat";
  font-weight: bolder;
}
.card h1 {
  font-size: 1.2rem;
}
h2 {
  font-size: 1rem;
  font-weight: lighter;
}

h3 {
  font-size: 1rem;
  font-weight: lighter;
}
.details {
  margin-left: 3%;
}
.btn {
  justify-self: end;
  align-self: center;
  margin-right: 10%;
}
button {
  background-color: #000d3a;
  color: white;
  padding: 5px 20px;
  border-radius: 5px;
  font-size: "poppins";
}
</style>
