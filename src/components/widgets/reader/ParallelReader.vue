<template>
  <div class="parallel-reader" :class="['text', `text-${textSize}`, `text-width-${textWidth}`]">
    <ParallelLine
        v-for="(line, index) in passageText" :key="line[0]"
        :left-line="line"
        :right-line="rightPassageText[index]"
    />
  </div>
</template>

<script>
  import ParallelLine from './ParallelLine.vue';
  import WIDGETS_NS from '@scaife-viewer/scaife-widgets';

  export default {
    props: ['passage-text', 'right-passage-text'],
    components: { ParallelLine },
    computed: {
      textSize() {
        return this.$store.state[WIDGETS_NS].readerTextSize;
      },
      textWidth() {
        return this.$store.state[WIDGETS_NS].readerTextWidth;
      }
    }
  };
</script>
