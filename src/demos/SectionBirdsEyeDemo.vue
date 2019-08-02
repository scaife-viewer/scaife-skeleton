<template>
    <FixedSkeleton
      :main-widget="mainWidget"
      :left-widgets="leftWidgets"
      :right-widgets="rightWidgets">
    </FixedSkeleton>
</template>
<script>
  import FixedSkeleton from '../skeleton';

  import SectionBirdsEyeWidget from './widgets/SectionBirdsEyeWidget.vue';

  export default {
    components: {
      FixedSkeleton,
    },
    computed: {
      mainWidget() {
        return;
      },
      leftWidgets() {
        return [];
      },
      rightWidgets() {
        return [SectionBirdsEyeWidget];
      },
    },
  }
</script>
