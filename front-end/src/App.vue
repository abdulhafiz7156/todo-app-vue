<template>
      <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import HomeView from './views/HomeView.vue'

export default defineComponent({
  name: 'App',

  components: {
    HomeView,
  },

  data () {
    return {
      //
    }
  },
})
</script>
