<template>
  <div
    class="parallel-reader"
    :class="['text', `text-${textSize}`, `text-width-${textWidth}`]"
  >
    <ParallelLine
      v-for="(line, index) in passageText"
      :key="line[0]"
      :left-line="line"
      :right-line="rightPassageText[index]"
    />
  </div>
</template>

<script>
  import WIDGETS_NS from '@scaife-viewer/scaife-widgets';
  import ParallelLine from './ParallelLine.vue';

  export default {
    props: ['passage-text', 'right-passage-text'],
    components: { ParallelLine },
    computed: {
      textSize() {
        return this.$store.state[WIDGETS_NS].readerTextSize;
      },
      textWidth() {
        return this.$store.state[WIDGETS_NS].readerTextWidth;
      },
    },
  };
</script>

<style lang="scss">
  .parallel-reader.text {
    &.text-xs {
      max-width: 1000px;
    }

    &.text-sm {
      max-width: 1200px;
    }

    &.text-md {
      max-width: 1400px;
    }

    &.text-lg {
      max-width: 1600px;
    }

    &.text-xl {
      max-width: 1800px;
    }
  }
</style>
