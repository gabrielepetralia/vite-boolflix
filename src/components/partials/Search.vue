<script>
import { store } from "../../data/store"

export default {
  name : "Search",

  data () {
    return {
      store,
    }
  },

  methods : {
    search() {
      if (store.category.length > 0) {
        store["movie"] = [],
        store["tv"] = [],
        store.getApi(store.category);
      } else {
        store.getApi("movie");
        store.getApi("tv");
      }
    }
  }
}
</script>

<template>
  <div class="search">
    <div class="search-bar" :class="{'active' : store.isSearching}">
      <div @click="store.isSearching = !store.isSearching">
        <i class="txt-white fs-xl fa-solid fa-magnifying-glass"></i>
      </div>
      <input v-model.trim="store.query" @keyup.enter="search" class="fs-sm" type="text" placeholder="Titolo">
    </div>

    <select v-model="store.category" @change="search"> 
      <option selected value="">All</option>
      <option value="movie">Film</option>
      <option value="tv">Serie TV</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/mixin" as *;

  .search {
    @include centerFlex("vertical");

    .search-bar {
      @include centerFlex("vertical");
      width : 34.8px;
      border : 1px solid transparent;
      padding : 7px;
      margin-right : 20px;
      overflow : hidden;
      transition : all 0s;

      input {
        color : white;
        background-color : transparent;
        border : none;
        margin-left : 10px;

        &:focus {
          outline : none;
        }
      }

      &.active {
        width : 250px;
        background-color : black;
        border : 1px solid white;
        transition : width 0.5s;
      } 

      &:hover {
        cursor : pointer;
      }
    }

    select {
      color : white;
      background-color : transparent;
      border : none;

      &:focus {
        outline : none;
      }

      &:hover {
        cursor : pointer;
      }

      option {
        background-color: black;
      }
    }
  }
</style>