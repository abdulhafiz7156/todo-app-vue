<template>
  <div class="container df_jscpb_ai header__div">
    <div class="header__logo__div">
      <img :src="require('@/assets/images/logo.png')" alt="">
    </div>
    <div class="header__login__and__signup df_ai">
      <div class="header__login">
        <router-link to="/login" class="active__header_a" v-if="this.user === null">Login</router-link>
        <router-link to="/todo" class="active__header_a" v-else>Login</router-link>
      </div>
      <div class="header__signup">
        <router-link to="/register" v-if="this.user === null">Register</router-link>
        <router-link to="/todo"  v-else>Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "./Header.css"
import axios from "axios";

export default {
  name: "Header",
  data(){
    return {
      userToken: this.$cookies.get('token'),
      user: null
    }
  },
  methods: {
    getUserAndLogin() {
      let options = {
        url: 'http://127.0.0.1:8000/api/profile/',
        method: 'GET',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `token ${this.userToken}`,
        },
      };
      axios(options)
          .then(response =>  {
            this.user = response.data
          })
          .catch((error) => {
            console.log(error)
          })
    }
  },
  mounted() {
    this.getUserAndLogin()
  }
}
</script>