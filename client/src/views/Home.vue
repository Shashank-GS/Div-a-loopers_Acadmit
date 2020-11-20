<template>
  <div class="home">
  <div class="background-img">
  <Navbar></Navbar>
    <div class="overlay">
      <h1>
        ACADMIT.
      </h1>
      <div class="motto">Easy way to get admission in your dream college</div>
    </div>
  </div>
  <div class="About section">
    <h1><span >What is Acadmit?</span></h1>
  </div>
  </div>
</template>

<script>
// // @ is an alias to /src
import Navbar from '@/components/navbar1.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  .background-img{
    background-image: url(../assets/Hero_img.png);
    width: 100%;
    height: 60vh;
    background-size:cover ;
  }
  .overlay {
  width: 100%;
  height: 51vh;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.4);
  color:white;
  h1{
    position: absolute;
    height: 20rem;
    left: 5%;
    top: 15%;
    font-family: Abril Fatface;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    letter-spacing: 0.16em;
  }
  .motto{
    position: relative;
    left: 5%;
    top: 45%;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
  }
}
</style>
