<template>
  <div class="homer-grid-widget">
    <HomerReaderWidget />
    <HomerReaderWidget />
    <HomerReaderWidget />
    <HomerReaderWidget />
  </div>
</template>

<script>
  import HomerReaderWidget from './HomerReaderWidget.vue';

  export default {
    scaifeConfig: {
      displayName: 'Homer 2x2 Reader',
      location: 'main',
    },
    components: {
      HomerReaderWidget,
    },
  }
</script>

<style lang="scss">
  .homer-grid-widget {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    max-height: calc(100vh - 53px);  // 116px when edit widget is hovering

    .select-passage-reader {
        overflow-y: scroll;
    }
  }
</style>
