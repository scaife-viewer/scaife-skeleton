<template>
  <TokenSelectionReader :tokens="tokens" />
</template>

<script>
  import TokenSelectionReader from './TokenSelectionReader.vue';

  export default {
    scaifeConfig: {
      displayName: 'Token Selection Reader',
      location: 'main',
    },
    components: {
      TokenSelectionReader,
    },
    computed: {
      tokens() {
        return this.$store.getters.iliadTokens;
      },
    }
  };
</script>
