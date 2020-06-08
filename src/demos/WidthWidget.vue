<template>
  <div class="width-widget u-widget">
    <a href @click.prevent="onNormal">Normal</a>
    <a href @click.prevent="onWide">Wide</a>
    <a href @click.prevent="onWider">Wider</a>
  </div>
</template>

<script>
  import {
    SKELETON_NAMESPACE,
    SET_MAIN_LAYOUT_WIDTH_NORMAL,
    SET_MAIN_LAYOUT_WIDTH_WIDER,
    SET_MAIN_LAYOUT_WIDTH_WIDE,
  } from '../skeleton/constants';

  export default {
    name: 'Width Widget',
    scaifeConfig: {
      displayName: 'Width Demo',
    },
    methods: {
      onNormal() {
        this.$store.dispatch(`${SKELETON_NAMESPACE}/${SET_MAIN_LAYOUT_WIDTH_NORMAL}`);
      },
      onWide() {
        this.$store.dispatch(`${SKELETON_NAMESPACE}/${SET_MAIN_LAYOUT_WIDTH_WIDE}`);
      },
      onWider() {
        this.$store.dispatch(`${SKELETON_NAMESPACE}/${SET_MAIN_LAYOUT_WIDTH_WIDER}`);
      },
    }
  }
</script>

<style lang="scss" scoped>
  a { display: block; }
</style>
