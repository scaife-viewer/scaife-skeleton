<template>
  <div
    class="reader"
    :class="['text', `text-${textSize}`, `text-width-${textWidth}`]"
  >
    <ReaderLine
      v-for="line in passageText"
      :key="line[0]"
      :line-ref="line[0]"
      :text="line[1]"
    />
  </div>
</template>

<script>
  import WIDGETS_NS from '@scaife-viewer/scaife-widgets';
  import ReaderLine from './ReaderLine.vue';

  export default {
    props: ['passage-text'],
    components: { ReaderLine },
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
  .text {
    font-family: 'Noto Serif';
    margin: 0.5em 0.5em 1em;

    .line {
      display: flex;
      align-items: flex-start;
      .line-ref {
        font-family: 'Noto Sans';
        color: #69c;
        width: 3.5em;
        flex-shrink: 0;
      }
      .line-text {
      }
    }

    &.text-xs {
      line-height: 1.5;
    }

    &.text-sm {
      line-height: 1.6;
    }

    &.text-md {
      line-height: 1.7;
    }

    &.text-lg {
      line-height: 1.8;
    }

    &.text-xl {
      line-height: 1.9;
    }
  }

  .widget-sidebar .text {
    font-size: 14px;
    line-height: 1.6;
  }

  .text-xs {
    font-size: 12px;
  }
  .text-sm {
    font-size: 14px;
  }
  .text-md {
    font-size: 16px;
  }
  .text-lg {
    font-size: 20px;
  }
  .text-xl {
    font-size: 24px;
  }

  .text-width-normal {
    max-width: 90%;
  }

  .text-width-narrow {
    max-width: 80%;
  }

  .text-width-wide {
    max-width: 100%;
  }
</style>
