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
.text-xs {
    font-size: 0.8rem;
}
.text-sm {
    font-size: 0.9rem;
}
.text-md {
    font-size: 1rem;
}
.text-lg {
    font-size: 1.1rem;
}
.text-xl {
    font-size: 1.2rem;
}
.selected {
  font-weight: 600;
}
</style>
