<template>
  <div class="login__div__big df_jsc_ai">
    <div class="login__div__form">
      <div class="login__div__form__child">
        <img src="../../assets/images/logo.png" alt="">
        <div class="form">
          <p>Registration</p>
          <div class="df_jsc">
            <input type="text" placeholder="Name" v-model="this.signupData.name" :class='this.formRequiredFields.EmptyName ? "active__password" : ""'>
              <p v-if="this.formRequiredFields.EmptyName" >This field is required</p>
            <input type="text" placeholder="Username" v-model="this.signupData.username" :class='this.formRequiredFields.EmptyUserName ? "active__password" : ""'>
            <p v-if="this.formRequiredFields.EmptyUserName" class="">This field is required</p>
            <input type="password" placeholder="Password" v-model="this.signupData.password" :class='this.minLengthPassword ? "active__password" : ""'>
            <p v-if="this.formRequiredFields.minLengthPassword" class="minLengthPassword">Minimal length of password is 6 letters (numbers, symbols)</p>
          </div>
          <button class="base__button__in__home__page" @click="handleSubmit">Signup</button>
        </div>
        <div class="login__div__hr__to__signup">
          <hr>
          <p>Already have an account ? <router-link to="/login">Signin</router-link></p>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import "./Register.css"
import axios from "axios"
import router from "@/router";
// import VueCookies from "vue-cookies";

export default {
  name: "Register",
  data(){
    return {
      signupData: {
        name: '',
        username: '',
        password: ''
      },
      formRequiredFields: {
        EmptyName: false,
        EmptyUserName: false,
        minLengthPassword: false,
      }
    }
  },
  methods: {
    handleSubmit(){
      let options = {
        url: 'http://127.0.0.1:8000/register/',
        method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        data: {
          username: this.signupData.username,
          name: this.signupData.name,
          password: this.signupData.password
        }
      };
      if (this.signupData.password.length >= 6) {
        if (this.signupData.name.length >= 4){
          if (this.signupData.username.length >= 4){
            axios(options)
              .then(response => {
                console.log(response)
                router.push({ name: "todo" });
                this.$cookies.set('token' , response.data.token, "1m")
                // VueCookies.set('token' , response.data.token, "1m")
              });
          } else {
            this.formRequiredFields.EmptyUserName = true
            console.log(  "hello")
          }
        } else {
          this.formRequiredFields.EmptyName = true
        }
      } else {
        this.minLengthPassword = true
      }

    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>