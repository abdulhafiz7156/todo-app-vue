<template>
  <div class="login__div__big df_jsc_ai">
    <div class="login__div__form">
      <div class="login__div__form__child">
        <img src="../../assets/images/logo.png" alt="">
        <div class="form">
          <p>Signin</p>
          <div class="df_jsc">
            <input type="text" placeholder="Username" v-model="this.loginFormData.username">
            <p v-if="this.emptyFields.username">This field is required</p>
            <input type="password" placeholder="Password" v-model="this.loginFormData.password">
            <p v-if="this.emptyFields.password">Minimal length of password is 6 letters (numbers, symbols)</p>
            <p v-if="this.emptyFields.usernameOrPasswordWrong">Password or username wrong. Please try again</p>
          </div>
          <button @click="login()" class="base__button__in__home__page">Signin</button>
        </div>
        <div class="login__div__hr__to__signup">
          <hr>
          <p>Not have account ? <router-link to="/register">Signup</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./Login.css"
import axios from "axios";
import router from "@/router";

export default {
  name: "Login",
  data(){
    return {
      loginFormData: {
        username: '',
        password: '',
      },
      emptyFields: {
        password: false,
        username: false,
        usernameOrPasswordWrong: false
      }
    }
  },
  methods: {
    login() {
      let options = {
        url: 'http://127.0.0.1:8000/api/login/',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: {
          username: this.loginFormData.username,
          password: this.loginFormData.password
        }
      };
      if (this.loginFormData.password.length >= 6) {
        if (this.loginFormData.username.length >= 4) {
          axios(options)
              .then(response => {
                console.log(response)
                this.$store.state.userToken = response.data.token
                router.push({ name: "todo" });
                this.$cookies.set('token' , response.data.token, "1m")
              })
              .catch((error)=> {
                if (error.request.status === 403) {
                  this.emptyFields.usernameOrPasswordWrong = true
                  this.emptyFields.password = false
                  this.emptyFields.username = false
                }
              })
          } else {
          this.emptyFields.username = true
        }} else {
          this.emptyFields.password = true
        }
    }
  }
}
</script>

<style scoped>

</style>