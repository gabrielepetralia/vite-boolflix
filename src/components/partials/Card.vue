<script>
import { store } from "../../data/store"

export default {
  name : "Card",

  props : {
    card : Object,
  },

  data() {
    return {
      store,
    }
  },

  methods : {
    getImage(img) {
      return new URL(`../../assets/img/flags/${img}`, import.meta.url).href
    },
  }
}
</script>

<template>
  <div class="card">
    <ul>
      <li v-if="card.poster_path != null"><img :src="`https://image.tmdb.org/t/p/w342${card.poster_path}` || getImage(img - not - found.png)" :alt="`Poster ${ card.title || card.name }`"></li>
      <li v-else><img src="../../assets/img/no-img.png" alt=""></li>
      <li><strong>Titolo</strong> : {{ card.title || card.name }}</li>
      <li><strong>Titolo Originale</strong> : {{ card.original_title || card.original_name }}</li>
      <li v-if="store.flags.includes(card.original_language)" class="flag"><img :src="getImage(card.original_language + '.png')" :alt="card.original_language"></li>
      <li v-else><strong>Lingua</strong> : {{ card.original_language }}</li>
      <li>
        <div class="vote">
          <i v-for="star in Math.ceil(card.vote_average / 2)" :key="star" class="fa-solid fa-star"></i>
          <i v-for="star in (5 - Math.ceil(card.vote_average / 2))" :key="star" class="fa-regular fa-star"></i>
        </div>
      </li>
      <li v-if="card.overview.length > 0"><strong>Descrizione</strong> : {{ card.overview }}</li>
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

        &.flag {
          height: 26px;
          max-width: 40px;
          
          img {
            height: 100%;
          }
        }
      }
    }
  }
</style>