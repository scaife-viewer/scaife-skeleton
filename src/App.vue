<template>
  <div id="app">
    <div class="menu" v-if="$route.name === 'home'">
      <ul>
        <li><router-link :to="{name: 'editable'}">Editable Skeleton Demo</router-link></li>
        <li><router-link :to="{name: 'morphgnt'}">MorphGNT Demo</router-link></li>
        <li><router-link :to="{name: 'pagination'}">Pagination Demo</router-link></li>
        <li><router-link :to="{name: 'iiif'}">IIIF Demo</router-link></li>
        <li><router-link :to="{name: 'widths'}">Widths</router-link></li>
      </ul>
    </div>
    <router-view v-else />
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {
      console.log(this.$route);
    }
  }
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700,700i&subset=greek,greek-ext,latin-ext);
  @import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700);

  html,body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .body {
    display: flex;
    justify-content: center;
  }
</style>
