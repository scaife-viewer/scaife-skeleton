<template>
    <FixedSkeleton
      :main-widget="mainWidget"
      :left-widgets="leftWidgets"
      :right-widgets="rightWidgets">
    </FixedSkeleton>
</template>
<script>
  import FixedSkeleton from '../skeleton';

  import BirdsEyeWidget from './widgets/BirdsEyeWidget.vue';
  import IliadReaderWidget from './widgets/IliadReaderWidget.vue';

  export default {
    components: {
      FixedSkeleton,
    },
    computed: {
      mainWidget() {
        return IliadReaderWidget;
      },
      leftWidgets() {
        return [];
      },
      rightWidgets() {
        return [BirdsEyeWidget];
      },
    },
  }
</script>
