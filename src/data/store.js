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
  isLoading : true,
  flags : [
    "ar",
    "ca",
    "cs",
    "da",
    "de",
    "en",
    "es",
    "fr",
    "hi",
    "id",
    "is",
    "it",
    "ja",
    "ko",
    "mr",
    "ms",
    "nl",
    "no",
    "pl",
    "pt",
    "ru",
    "sk",
    "sv",
    "te",
    "th",
    "tl",
    "tr",
    "zh",
  ],

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