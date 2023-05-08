import { reactive } from "vue"
import axios from "axios"

export const store = reactive ({
  apiUrl : "https://api.themoviedb.org/3/search/",
  apiKey : "566f3e413cf3ea4132b641cce33ac23b",
  lang : "it-IT",
  movie : [],
  tv : [],
  query : "",
  category : "",

  getImage(img) {
    return new URL(`../assets/img/${img}`, import.meta.url).href
  },

  getApi(category) {
    axios.get( this.apiUrl + category, {
      params : {
        api_key : this.apiKey,
        language : this.lang,
        query : this.query,
      }
    })
    .then( res => {
      this[category] = res.data.results;
    })
  },

  isSearching : false,
})