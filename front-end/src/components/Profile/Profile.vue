<template>
  <div>
    <ProfileHeader />
    <div class="profile__sidebar__and__block df_jsc">
        <div class="profile__sidebar">
          <div class="profile__and__settings container">
            <div class="profile__text__div df_ai active">
              <img :src="require('@/assets/images/ion_calendar-clear.svg')" alt="">
              <p>Profile</p>
            </div>
            <div class="profile__settings df_ai">
              <img :src="require('@/assets/images/ion_calendar.svg')" alt="">
              <p>Setting</p>
            </div>
          </div>
        </div>
        <div class="profile__first__block container">
            <div class="drag__drop__input">
              <div class="drop-zone">
                <input type="file" name="myFile" class="drop-zone__input"  @change="handleFileUploads" multiple>
              </div>
            </div>
            <div class="profile__change__name">
<!--              <p>Change your username</p>-->
<!--              <input type="text" placeholder="Enter new username">-->
              <div>
                <button class="apply" @click="this.getDataUser" type="submit">Apply</button>
                <button class="cancel">Cancel</button>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import "./Profile.css"
import axios from "axios";

export default {
  name: "Profile",
  data(){
    return {
      imgUploaded: null,
      userData: null,
      userToken: this.$cookies.get('token')
    }
  },
  components: {
    ProfileHeader
  },
  methods: {
    handleFileUploads(event) {
      this.imgUploaded = event.target.files[0]
    },
    getDataUser(){
      let options = {
        url: 'http://127.0.0.1:8000/edit/profile/',
        method: 'PATCH',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `token ${this.userToken}`,
        },
        data: {
          image: this.imgUploaded
        }
      };
      axios(options)
          .then(response =>  {
            this.userData = response.data
            window.location.reload()
              console.log(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
    },
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>