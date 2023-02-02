<template>
  <div class="container df_jscpb_ai header__div">
    <div class="header__logo__div">
      <img :src="require('@/assets/images/logo.png')" alt="">
    </div>
    <div class="header__login__and__signup df_ai">
      <div class="header__login">
        <router-link to="/login" class="active__header_a">Login</router-link>
      </div>
      <div class="header__signup">
        <router-link to="/register">Signup</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "./Header.css"

export default {
  name: "Header"
}
</script>