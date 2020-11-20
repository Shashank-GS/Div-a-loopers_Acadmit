<template>
    <div class="Login">
        <div class="Container-Login">
            <Form/>
        </div>   
    </div>
</template>

<script>
import Form from '@/components/LForm.vue'

export default {
  name: 'Login',
  components: {
    Form
  }
}
</script>

<style lang="scss" scoped>
.Login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(25rad, #000D3A, black);
  font-family: Poppins, sans-serif;
}
.Container-Login {
  overflow: hidden;
  position: relative;
  width: 560px;
  height: 480px;
  background: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}
@media (max-width: 600px) {
  .Container-Login{
    width: 80vw;
  }
}
</style>