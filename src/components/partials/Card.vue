<script>
export default {
  name : "Card",

  props: {
    card: Object,
  }
}
</script>

<template>
  <div class="card">
    <ul>
      <li><strong>Titolo</strong> : {{ card.title }}</li>
      <li><strong>Titolo Originale</strong> : {{ card.original_title }}</li>
      <li><strong>Lingua</strong> : {{ card.original_language }}</li>
      <li><strong>Voto</strong> : {{ card.vote_average }}</li>
      <li><strong>Descrizione</strong> : {{ card.overview }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    background-color : white;
    margin : 20px;
    width: 300px;

    ul {
      padding : 20px;

      li {
        margin-bottom : 10px;
      }
    }
  }
</style>