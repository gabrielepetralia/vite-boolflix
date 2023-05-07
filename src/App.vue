<script>
import axios from "axios"
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js"
import { store } from "./data/store"

import Header from "./components/Header.vue"

export default {
  name : "App",

  components : {
    Header,
  },

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <div>
    <Header/>
  </div>
</template>

<style lang="scss">
  @use './scss/main.scss';
</style>