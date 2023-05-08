import { reactive } from "vue"
import axios from "axios"

export const store = reactive ({
  apiUrl : "https://api.themoviedb.org/3/search/movie",
  lang : "it",
  apiRes : [],
  query : "",
  category : "all",

  getImage(img) {
    return new URL(`../assets/img/${img}`, import.meta.url).href
  },

  getApi() {
    axios.get( this.apiUrl, {
      params : {
        api_key : "566f3e413cf3ea4132b641cce33ac23b",
        language : this.lang,
        query : this.query,
      }
    })
    .then( res => {
      this.apiRes = res.data.results;
    })
  },

  isSearching : false,
})