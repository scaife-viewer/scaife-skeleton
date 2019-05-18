<template>
  <div class="text-width-widget">
    <span :class="['text-width-control', {active: textWidth == 'narrow'}]" @click="changetextWidth('narrow')">Narrow</span>
    <span :class="['text-width-control', {active: textWidth == 'normal'}]" @click="changetextWidth('normal')">Normal</span>
    <span :class="['text-width-control', {active: textWidth == 'wide'}]" @click="changetextWidth('wide')">Wide</span>
  </div>
</template>

<script>
  export default {
    scaifeConfig: {
      displayName: 'Text Width',
      singleton: true,
      location: 'both',  // Should be sidebar but just testing the 'both' option
    },
    computed: {
      textWidth() {
        return this.$store.state.readerTextWidth;
      },
    },
    methods: {
      changetextWidth(width) {
        this.$store.dispatch('setTextWidth', { width });
      },
    },
  };
</script>

<style lang="scss">
  @import "../../../variables.scss";

  .text-width-widget {
    margin: 0 2em;
    flex: 1;
    .text-width-control {
      font-family: 'Noto Serif';
      cursor: pointer;
      color: $gray-500;
      font-size: 14px;
      padding-right: 5px;
    }

    .text-width-control.active {
      color: $black;
    }
  }
</style>
