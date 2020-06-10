<template>
  <div class="selected-words">
    <div class="selected-word" v-for="word in words" :key="word['@id']">
      {{ word.text }}
    </div>
  </div>
</template>
<script>
  export default {
    scaifeConfig: {
      displayName: 'Selected Words',
      location: 'main',
      singleton: true,
    },
    computed: {
      words() {
        return this.$store.state.selectedWords;
      },
    },
  };
</script>
