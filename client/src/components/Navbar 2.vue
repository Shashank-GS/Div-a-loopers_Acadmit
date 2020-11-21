<template>
  <div class="Navbar">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#"
        ><img src="../assets/Logo.png" alt=""
      /></a>
      <button
        class="navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/search" class="nav-link">Institutes</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          <li class="nav-item">
            <router-link to="/profile" class="nav-link"
              >View Profile</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
img {
  height: 30px;
}
nav {
  background: #000d3a;
  color: white;
}
.navbar-toggler-icon {
  color: white;
}
</style>