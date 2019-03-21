<template>
  <div class="ball-grid-pulse page-loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
    name: 'page-loader'
};
</script>

<style lang="scss">
@import 'node_modules/loaders.css/src/loaders.scss';

.page-loader {
  margin: auto;
  transform: translate3d(0, 0, 0);
}
.page-loader > div {
  background-color: #343a40;
}
</style>

