<template>
  <div class="parallel-line">
    <ReaderLine :line-ref="leftLine[0]" :text="leftLine[1]" />
    <ReaderLine :line-ref="rightLine[0]" :text="rightLine[1]" />
  </div>
</template>

<script>
  import WIDGETS_NS from '@scaife-viewer/scaife-widgets';
  import ReaderLine from './ReaderLine.vue';

  export default {
    props: ['left-line', 'right-line'],
    components: { ReaderLine },
    computed: {
      textSize() {
        return this.$store.state[WIDGETS_NS].readerTextSize;
      },
    },
  };
</script>

<style lang="scss">
  @import '../../../variables.scss';

  .parallel-line {
    padding: 5px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    &:hover {
      background: $gray-100;
    }
  }
</style>
