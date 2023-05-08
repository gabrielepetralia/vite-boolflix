<script>
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js"
import { store } from "./data/store"

import Header from "./components/Header.vue"
import Main from "./components/Main.vue"

export default {
  name : "App",

  components : {
    Header,
    Main,
  },

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <Header/>
  <Main/>
</template>

<style lang="scss">
@use './scss/main.scss';
</style>