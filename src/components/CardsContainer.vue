<script>
import { store } from "../data/store"
import Card from "./partials/Card.vue"

export default {
  name : "CardsContainer",

  components : {
    Card,
  },

  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <div class="cards-container">
    <Card
      v-for="(card, index) in store.apiRes"
      :key="index"
      :card="card"
    />
  </div>
</template>

<style lang="scss" scoped>
  .cards-container {
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
  }
</style>