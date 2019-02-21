<template>
  <div class="reader" :class="['text', `text-${textSize}`]">
    <div class="line" v-for="line in passageText" :key="line[0]">
      <div class="line-ref">{{ line[0] }}</div>
      <div class="line-text">{{ line[1] }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['passage-text'],
    computed: {
      textSize() {
        return this.$store.state.readerTextSize;
      }
    }
  };
</script>

<style lang="scss">
  .text {
    font-family: 'Noto Serif';
    margin: 1em 1em 6em;

    .line {
      display: flex;
      align-items: flex-start;
      .line-ref {
        font-family: 'Noto Sans';
        color: #69C;
        width: 3.5em;
        flex-shrink: 0;
      }
      .line-text {
      }
    }

    &.text-xs {
      max-width: 500px;
      line-height: 1.5;
    }

    &.text-sm {
      max-width: 600px;
      line-height: 1.6;
    }

    &.text-md {
      max-width: 700px;
      line-height: 1.7;
    }

    &.text-lg {
      max-width: 800px;
      line-height: 1.8;
    }

    &.text-xl {
      max-width: 900px;
      line-height: 1.9;
    }
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
</style>
