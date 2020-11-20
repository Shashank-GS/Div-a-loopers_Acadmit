<template>
    <form class="form" @submit="login">
        <h2>Login</h2>
        <label>
        <span>Email Address:</span>
        <input type="email" />
        </label>
        <label>
        <span>Password:</span>
        <input type="password"/>
        </label>
        <button class="submit" type="submit" >Sign In</button>
        <p class="question">New here?</p>
        <router-link to="/signup">Sign Up</router-link>
    </form>
</template>

<script>
export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    login(){

    }
  }
}
</script>

<style lang="scss" scoped>
.form input,
button {
  border: none;
  outline: none;
  background: none;
}
.form {
  position: relative;
  height: 100%;
  padding: 30px 30px;
}
.form h2 {
  width: 100%;
  font-size: 30px;
  text-align: center;
}

.form label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}

.form label span {
  font-size: 14px;
  font-weight: 600;
  color: #505f75;
  text-transform: uppercase;
}

.form input {
  display: block;
  width: 100%;
  margin-top: 5px;
  font-size: 16px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(109, 93, 93, 0.4);
  text-align: center;
  font-family: Poppins, sans-serif;
}

.form button {
  display: block;
  margin: 30px auto 0px auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.submit {
  text-transform: uppercase;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  background: -webkit-linear-gradient(left, #000D3A, black);
}

.submit:hover {
  background: -webkit-linear-gradient(left, black, #000D3A);
}

.question {
  margin-top: 40px;
  margin-bottom: -10px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #0c0101;
}
.form a {
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: #0c0101;
  cursor: pointer;
  position: relative;
  top: 15px;
  left: 43.5%;
}
@media (max-width: 600px) {
  .form label,
  .form button {
    width: 80%;
  }
}
</style>