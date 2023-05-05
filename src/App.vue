<script>
import axios from "axios"
import { store } from "./data/store"

export default {
  name : "App",

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <h1>Boolflix</h1>
</template>

<style lang="scss">
  @use './scss/main.scss';
</style>