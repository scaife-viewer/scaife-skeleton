<template>
    <FixedSkeleton
      :main-widget="mainWidget"
      :left-widgets="leftWidgets"
      :right-widgets="rightWidgets">
    </FixedSkeleton>
</template>
<script>
  import FixedSkeleton from '../skeleton';

  import HomerNGramsWidget from './widgets/HomerNGramsWidget.vue';

  export default {
    components: {
      FixedSkeleton,
    },
    computed: {
      mainWidget() {
        return HomerNGramsWidget;
      },
      leftWidgets() {
        return [];
      },
      rightWidgets() {
        return [];
      },
    },
  }
</script>
