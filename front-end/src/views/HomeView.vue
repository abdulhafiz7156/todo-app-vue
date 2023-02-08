<template>
  <div class="home">
    <Header />
    <div class="first__block__bg df_jsc">
      <div class="first__block__bg__text__div">
          <h2>Organizing your day activity <br>
            with Todo Daily</h2>
        <router-link to="/register">
          <a href="#" class="base__button__in__home__page">Get started</a>
        </router-link>
      </div>
      <div class="first__block__bg__div"></div>
    </div>
    <div class="second__block">
      <div class="second__block__text__div">
        <h4>Don’t let your day doing nothing</h4>
      </div>
      <div class="second__block__card__div df_jscpb_ai container">
        <div class="second__block__card">
          <img :src="require('@/assets/images/second__block__card__icon.svg')" alt="">
          <h4>Small task</h4>
        </div>
        <div class="second__block__card">
          <img :src="require('@/assets/images/second__block__card__icon2.svg')" alt="">
          <h4>Write it</h4>
        </div>
        <div class="second__block__card">
          <img :src="require('@/assets/images/second__block__card__icon3.svg')" alt="">
          <h4>Do it</h4>
        </div>
        <div class="second__block__card">
          <img :src="require('@/assets/images/second__block__card__icon4.svg')" alt="">
          <h4>Repeat</h4>
        </div>
      </div>
    </div>
    <div class="last__block df_jscpb_ai container">
      <div class="last__block__bg"></div>
      <div class="last__block__text">
        <h1>Achieve your target <br> and won your life</h1>
        <a href="/register" class="base__button__in__home__page">Get started</a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default {
  name: 'HomeView',
  components: {
    Footer,
    Header
  },
  mounted() {
  }
}
</script>
<style scoped>
.first__block__bg {
  flex-direction: column;
}

.first__block__bg__text__div h2{
  font-family: 'Rosario', sans-serif;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  color: #000;
  margin-bottom: 30px;
}

.first__block__bg {
  padding-top: 50px;
}


.first__block__bg__div {
  background-image: url("../assets/images/first_screen_bg.png");
  background-position: center;
  background-size: cover;
  height: 609px;
  width: 1200px;
  position: relative;
  z-index: -11;
  margin: 0 auto;
}

.second__block {
  margin-top: 160px;
}

.second__block__text__div h4{
  font-family: 'Rosario', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 58px;
  text-align: center;
}
.second__block__card__div {
  margin-top: 70px !important;
}
.second__block__card h4{
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 35px;
  margin-top: 30px;
}

.last__block {
  margin-top: 200px !important;
  text-align: left;
}

.last__block__bg {
  background-image: url("../assets/images/last__block__bg.png");
  height: 390px;
  width: 710px;
  background-position: center;
  background-size: cover;
}

.last__block__text h1 {
  font-family: 'Rosario', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  text-align: left;
  height: 116px;
  width: 392px;
  margin-bottom: 40px;
  color: #000;
}

.last__block__text {
  margin-left: 70px;
}
@media(max-width: 1200px) {
  .last__block__text {
    margin-left: 40px;
  }
  .last__block__text h1 {
    width: 422px;
  }
  .last__block__bg {
    height: 235px;
  }
}
@media(max-width: 1100px) {
  .last__block__text {
    margin-left: 40px;
  }
  .last__block__text h1 {
    width: 350px;
    font-size: 39px;
  }
  .last__block__bg {
    height: 235px;
  }
  .first__block__bg__div {
    height: 565px;
    width: 1092px;
  }
}

</style>