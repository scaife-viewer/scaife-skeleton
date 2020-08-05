<template>
  <FixedSkeleton
    @leftToggle="onLeftToggle"
    @rightToggle="onRightToggle"
    :left-open="!leftOpen"
    :right-open="!rightOpen"
    :main-widget="mainWidget"
    :left-widgets="leftWidgets"
    :right-widgets="rightWidgets"
  >
  </FixedSkeleton>
</template>

<script>
  import FixedSkeleton from '../skeleton/FixedSkeleton.vue';

  import OpenSeadragonWidget from '../components/widgets/image/OpenSeadragonWidget.vue';

  import { TOGGLE_RIGHT_SIDEBAR, TOGGLE_LEFT_SIDEBAR } from './constants';

  export default {
    components: {
      FixedSkeleton,
    },
    methods: {
      onLeftToggle() {
        this.$store.dispatch(TOGGLE_LEFT_SIDEBAR);
      },
      onRightToggle() {
        this.$store.dispatch(TOGGLE_RIGHT_SIDEBAR);
      },
    },
    computed: {
      mainWidget() {
        return OpenSeadragonWidget;
      },
      leftWidgets() {
        return [];
      },
      rightWidgets() {
        return [];
      },
      leftOpen() {
        return this.$store.state.leftOpen;
      },
      rightOpen() {
        return this.$store.state.rightOpen;
      },
    },
  };
</script>
