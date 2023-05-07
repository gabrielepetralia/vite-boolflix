import { reactive } from "vue"

export const store = reactive ({
  getImage(img) {
    return new URL(`../assets/img/${img}`, import.meta.url).href
  },

  isSearching : false,
})