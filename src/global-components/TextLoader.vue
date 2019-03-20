<template>
  <div class="ball-pulse partial-loader">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'partial-loader',
  };
</script>

<style lang="scss">
  @import 'node_modules/loaders.css/src/loaders.scss';

  .partial-loader {
    text-align: center;
    transform: translate3d(0, 0, 0);
  }
  .partial-loader > div {
    background-color: #ccc;
    width: 10px;
    height: 10px;
  }
</style>
