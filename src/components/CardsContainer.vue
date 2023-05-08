<script>
import { store } from "../data/store"
import Card from "./partials/Card.vue"

export default {
  name : "CardsContainer",

  components : {
    Card,
  },

  props : {
    title : String,
    category : String,
  },

  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <h1 class="txt-white">{{ title }}</h1>
  <div class="cards-container">
    <Card
      v-for="card in store[category]"
      :key="card.id"
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