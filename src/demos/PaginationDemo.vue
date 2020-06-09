<template>
  <FixedSkeleton
    :main-widget="mainWidget"
    :left-widgets="leftWidgets"
    :right-widgets="rightWidgets"
  >
  </FixedSkeleton>
</template>
<script>
  import FixedSkeleton from '../skeleton';

  import HomerCardsWidget from '../components/widgets/homer/HomerCardsWidget.vue';
  import CardReaderWidget from '../components/widgets/reader/CardReaderWidget.vue';
  import HomerReferenceInputWidget from '../components/widgets/homer/HomerReferenceInputWidget.vue';
  import HomerCurrentCardsWidget from '../components/widgets/homer/HomerCurrentCardsWidget.vue';

  export default {
    components: {
      FixedSkeleton,
    },
    computed: {
      mainWidget() {
        return CardReaderWidget;
      },
      leftWidgets() {
        return [HomerCardsWidget];
      },
      rightWidgets() {
        return [HomerReferenceInputWidget, HomerCurrentCardsWidget];
      },
    },
  };
</script>
