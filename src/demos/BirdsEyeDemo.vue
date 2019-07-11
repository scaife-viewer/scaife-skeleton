<template>
    <FixedSkeleton
      :main-widget="mainWidget"
      :left-widgets="leftWidgets"
      :right-widgets="rightWidgets">
    </FixedSkeleton>
</template>
<script>
  import FixedSkeleton from '../skeleton';

  import BirdsEyeWidget from '../components/widgets/birds-eye/BirdsEyeWidget.vue';

  export default {
    components: {
      FixedSkeleton,
    },
    computed: {
      mainWidget() {
        return BirdsEyeWidget;
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
