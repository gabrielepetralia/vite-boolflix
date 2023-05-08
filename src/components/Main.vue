<script>
import { store } from "../data/store"
import CardsContainer from "./CardsContainer.vue"

export default {
  name : "Main",

  components : {
    CardsContainer,
  },

  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <main>
    <div class="container">
      <CardsContainer v-if="store.movie.length > 0" title="Film" category="movie"/>
      <CardsContainer v-if="store.tv.length > 0" title="Serie TV" category="tv"/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

  main {
    min-height: calc(100vh);
    padding-top : 81px;
    background-color : $secondary-color;
  }
</style>