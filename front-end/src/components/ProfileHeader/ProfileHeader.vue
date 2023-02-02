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
<!--          {{this.dataOfUser.username}}-->
        </div>
        <div class="profile__img" @click="this.popup = true">
          <img v-if="this.imgUrl" :src="require(`@/${this.imgUrl}`)" alt="">
          <img v-else :src="require('@/assets/images/profile__logo.png')" alt="">
        </div>
        <div class="popup" v-if="this.popup">
          <div  class="overlay__div">
            <div class="popup__profile__and__settings">
              <router-link to="/profile" class="popup__profile df" style="cursor: pointer;">
                <img src="../../assets/images/profile__logo.png" alt="">
                <p>Profile</p>
              </router-link>
              <div class="popup__profile df" style="cursor: pointer;">
                <img src="../../assets/images/setting__logo.png" alt="">
                <p>Setting</p>
              </div>
            </div>
            <div class="popup__logout df" @click="logOut">
              <img src="../../assets/images/logout__logo.png" alt="">
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
      imgUrl: null,
      dataOfUser: null
    }
  },
  methods: {
    getDataUser(){
      let options = {
        url: 'http://127.0.0.1:8000/profile/',
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
              this.imgUrl = '../../../assets/images/profile__logo.png'
            }
          })
          .catch((error) => {
            console.log(error)
          })
    },
    logOut(){
      let options = {
        url: 'http://127.0.0.1:8000/logout/',
        method: 'DELETE',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `token ${this.userToken}`,
        },
      };
      axios(options)
          .then(response =>  {
            router.push({ name: "home" });
          })
          .catch((error) => {
            console.log(error)
          })
    },
    closePopup(){
      window.addEventListener("click",()=> {
        this.popup = false
        console.log("hello")
      })
    }
  },
  created() {
    this.getDataUser()
  },
}
</script>

<style scoped>
.overlay__div {
  position: fixed;
  z-index: 9998;
  top: 81px;
  left: 78%;
  border: 1px solid #D7D7D7;
  border-radius: 16px;
  height: 117px;
  width: 242px;
}
.popup__profile__and__settings p {
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #040404;
  padding-left: 7px;
}
.popup__profile {
  padding-top: 10px;
  padding-left: 10px;
}
.popup__logout {
  padding-top: 10px;
  padding-left: 10px;
  cursor: pointer;
}
.popup__logout p {
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  color: #FF4F5A;
  padding-left: 7px;
}
.popup__profile__and__settings div {
  border-bottom: 2px solid #D7D7D7;
  padding-bottom: 10px;
}
</style>