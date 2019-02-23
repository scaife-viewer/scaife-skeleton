<template>
  <div id="app">
    <Skeleton :main-widget="mainWidget" :left-widgets="leftWidgets" :right-widgets="rightWidgets" />
  </div>
</template>

<script>
  import Skeleton from './skeleton/Skeleton.vue'

  export default {
    name: 'app',
    components: {
      Skeleton
    },
    computed: {
      mainWidget() {
        return this.$store.state.widgets.mainWidget;
      },
      leftWidgets() {
        return this.$store.state.widgets.left;
      },
      rightWidgets() {
        return this.$store.state.widgets.right;
      }
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
