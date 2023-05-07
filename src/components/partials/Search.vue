<script>
import { store } from "../../data/store"

export default {
  name : "Search",

  data () {
    return {
      store,
    }
  },
}
</script>

<template>
  <div class="search">
    <div class="search-bar" :class="{'active' : store.isSearching}">
      <div @click="store.isSearching = !store.isSearching">
        <i class="txt-white fs-xl fa-solid fa-magnifying-glass"></i>
      </div>
      <input @keyup.enter="store.isSearching = false" class="fs-sm" type="text" placeholder="Titolo">
    </div>

    <select>
      <option selected value="">All</option>
      <option value="">Film</option>
      <option value="">Serie TV</option>
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