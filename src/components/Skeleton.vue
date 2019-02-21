<template>
  <div class="skeleton">
    <SidebarLayout name="left" class="left" :open="leftOpen" @toggle="onLeftToggle">
      <icon slot="open-close-button" name="arrow-left" />
      <icon slot="close-open-button" name="arrow-right" />
    </SidebarLayout>
    <MainLayout />
    <SidebarLayout name="right" class="right" :open="rightOpen" @toggle="onRightToggle">
      <icon slot="open-close-button" name="arrow-right" />
      <icon slot="close-open-button" name="arrow-left" />
    </SidebarLayout>
  </div>
</template>

<script>
  import { TOGGLE_RIGHT_SIDEBAR, TOGGLE_LEFT_SIDEBAR } from '../constants';

  import MainLayout from "./MainLayout.vue";
  import SidebarLayout from "./SidebarLayout.vue";

  export default {
    components: { MainLayout, SidebarLayout },
    methods: {
      onLeftToggle() {
        this.$store.dispatch(TOGGLE_LEFT_SIDEBAR);
      },
      onRightToggle() {
        this.$store.dispatch(TOGGLE_RIGHT_SIDEBAR);
      },
    },
    computed: {
      leftOpen() {
        return this.$store.state.leftOpen;
      },
      rightOpen() {
        return this.$store.state.rightOpen;
      },
    }
  };
</script>

<style lang="scss">
  @import "../variables.scss";

  .skeleton {
    display: flex;
    height: 100vh;
    background: $gray-200;
    position: relative;
  }
</style>
