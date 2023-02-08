    <template>
  <div class="profile__header ">
    <div class="df_jscpb_ai">
      <div class="profile__header__logo">
        <router-link to="/todo">
          <img :src="require('@/assets/images/logo-white.png')" alt="">
        </router-link>
      </div>
      <div class="profile__header__account df_jsc_ai">
        <div class="profile__name">
          {{this.dataOfUser.username}}
        </div>
        <div class="profile__img" @click="this.popup = true">
          <img :src="'http://127.0.0.1:8000/' + this.imgUrl" alt="" v-if="!this.haventImgUser">
          <img :src="require(`../../assets/images/user__logo.png`)" alt="" v-if="this.haventImgUser">
        </div>
        <div class="popup" v-if="this.popup">
          <div  class="overlay__div">
            <div class="popup__profile__and__settings">
              <router-link to="/profile" class="popup__profile df" style="cursor: pointer;">
                <img :src="require(`../../assets/images/profile__logo.png`)" alt="">
                <p>Profile</p>
              </router-link>
              <div class="popup__profile df" style="cursor: pointer;">
                <img :src="require(`../../assets/images/setting__logo.png`)" alt="">
                <p>Setting</p>
              </div>
            </div>
            <div class="popup__logout df" @click="logOut">
              <img :src="require(`../../assets/images/logout__logo.png`)" alt="">
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./ProfileHeader.css"
import axios from "axios";
import router from "@/router";


export default {
  name: "ProfileHeader",
  data(){
    return {
      userToken : this.$cookies.get('token'),
      popup: false,
      dataOfUser: [],
      imgUrl: null,
      haventImgUser: false
    }
  },
  methods: {
    getDataUser(){
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
            this.dataOfUser = response.data
            this.imgUrl = response.data.img
            if(this.imgUrl === null) {
              this.haventImgUser = true
            }
          })
          .catch((error) => {
            console.log(error)
          })
    },
    logOut(){
      let options = {
        url: 'http://127.0.0.1:8000/api/logout/',
        method: 'DELETE',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `token ${this.userToken}`,
        },
      };
      axios(options)
          .then(response =>  {
            router.push({ name: "home" });
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
    },
    // testUser() {
    //   if (this.userToken) {
    //     this.$router.push('/')
    //   }
    // }
  },
  created() {
    this.getDataUser()
    // this.testUser()
  },
}
</script>
