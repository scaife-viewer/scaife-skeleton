<template>
  <div id="app">
    <Skeleton />
  </div>
</template>

<script>
import Skeleton from './components/Skeleton.vue'

export default {
  name: 'app',
  components: {
    Skeleton
  }
}
</script>

<style lang="scss">
html,body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
