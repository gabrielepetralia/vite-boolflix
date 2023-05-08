<script>
import CardsContainer from "./CardsContainer.vue"

export default {
  name : "Main",

  components : {
    CardsContainer,
  }
}
</script>

<template>
  <main>
    <div class="container">
      <CardsContainer/>
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