<template>
  <Reader :passage-text="passageText" />
</template>

<script>
  import Reader from '../../components/widgets/reader/Reader.vue';

  export default {
    scaifeConfig: {
      displayName: 'Reader',
      location: 'main',
    },
    components: {
      Reader,
    },
    computed: {
      passageText() {
        return this.$store.state.iliad.map((line, index) => [index, line]);
      },
    }
  };
</script>
