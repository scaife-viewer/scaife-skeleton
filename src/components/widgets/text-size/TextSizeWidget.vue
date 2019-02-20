<template>
  <div class="text-size-widget">
    <TextSize :value="textSize" @input="changeTextSize" size="xs" />{{ ' ' }}
    <TextSize :value="textSize" @input="changeTextSize" size="sm" />{{ ' ' }}
    <TextSize :value="textSize" @input="changeTextSize" size="md" />{{ ' ' }}
    <TextSize :value="textSize" @input="changeTextSize" size="lg" />{{ ' ' }}
    <TextSize :value="textSize" @input="changeTextSize" size="xl" />
  </div>
</template>

<script>
  import TextSize from './TextSize.vue';

  export default {
    displayName: 'Text Size',
    computed: {
      textSize() {
        return this.$store.state.readerTextSize;
      },
    },
    methods: {
      changeTextSize(size) {
        this.$store.dispatch('setTextSize', { size });
      },
    },
    components: { TextSize },
  };
</script>
