<script>
import Search from "./partials/Search.vue"

export default {
  name : "Header",

  components : {
    Search,
  },

  data() {
    return {
      logo : "logo-boolflix.png",
      nav : [
        {
          href : "#",
          text : "home",
        },
        {
          href: "#",
          text: "film",
        },
        {
          href: "#",
          text: "serie TV",
        }
      ]
    }
  },

  methods : {
    getImage(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href
    },
  }
}
</script>

<template>
  <header>
    <div class="container">

      <div class="header-left">
        <div class="logo">
          <img :src="getImage(logo)" alt="Logo Boolflix">
        </div>
  
        <nav>
          <ul>
            <li v-for="(link,index) in nav" :key="index">
              <a class="fs-sm fw-medium txt-white" :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="header-right">
        <Search/>
      </div>

    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;
@use "../scss/partials/mixin" as *;

  header {
    position : fixed;
    right : 0;
    left : 0;
    z-index : 999;
    background-color : $secondary-color;
    // box-shadow: inset 0 5px 8px rgba(0,0,0,1);

    .container {
      @include centerFlex("vertical");
      justify-content: space-between;
      padding : 15px 0;

      .header-left {
        @include centerFlex("vertical");

        .logo {
          @include centerFlex("vertical");
          width : 105px;
          margin-right: 40px;
        }
  
        ul {
          @include centerFlex("vertical");
          li {
            margin-right: 20px;
            a {
              text-transform : capitalize;
              transition : all 0.4s;
  
              &:hover {
                color : rgb(185, 185, 185);
              }
            }
          }
        }

      }

    }
  }
</style>