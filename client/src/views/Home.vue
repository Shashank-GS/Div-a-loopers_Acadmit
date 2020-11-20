<template>
  <div class="home">
  <Navbar></Navbar>
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
