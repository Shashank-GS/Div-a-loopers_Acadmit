<template>
  <div>
    <div class="card">
      <div class="details">
        <h1>{{ CollegeName[0] }}</h1>
        <h2>Location: {{ Location }}</h2>
        <h3>Course: {{ Course }}</h3>
      </div>
      <div class="btn">
        <button @click="apply">Apply</button>
      </div>
    </div>
    <div class="card">
      <div class="details">
        <h1>{{ CollegeName[1] }}</h1>
        <h2>Location: {{ Location }}</h2>
        <h3>Course: {{ Course }}</h3>
      </div>
      <div class="btn">
        <button @click="apply">Apply</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginemail: this.$route.params.email,
      CollegeName: [
        "Goa College Of Engineering (GEC)",
        "Padre Conceicanv College Of Engineering (PCCE)",
      ],
      Location: "Ponda, Goa-India",
      Course: "BE (4yrs)",
    };
  },
  methods: {
    apply() {
      this.$router.push({
        name: "CollegeForm",
        params: { email: this.loginemail },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  display: grid;
  padding: 1.4%;
  grid-template-columns: 1fr 1fr;
  font-family: "poppins";
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  margin: 3% 45% 3% 4%;
}
h1 {
  font-size: 1rem;
}
h2 {
  font-size: 0.8rem;
  font-weight: lighter;
}

h3 {
  font-size: 0.7rem;
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
