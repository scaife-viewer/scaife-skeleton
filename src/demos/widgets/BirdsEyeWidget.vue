<template>
  <div class="birds-eye-widget">
    <template v-if="selected">
      <h2>{{ selected }}</h2>
      <p>{{ offsets }}</p>
      <BirdsEye :offset-collection="offsetCollection" :total-words="totalWords" />
    </template>
    <p v-else>Select a token to see it in context</p>
  </div>
</template>

<script>
import BirdsEye from '../../components/widgets/birds-eye/BirdsEye.vue';

export default {
  scaifeConfig: {
    displayName: 'Birds Eye',
    singleton: true,
    location: 'sidebar',
  },
  components: { BirdsEye },
  computed: {
    selected() {
      return this.$store.state.selectedToken;
    },
    tokens() {
      return this.$store.getters.iliadTokens;
    },
    totalWords() {
      return this.tokens.length;
    },
    offsets() {
      return this.selected && this.$store.getters.iliadHeatMap[this.selected].indexes.map(i => [i, i]);
    },
    offsetCollection() {
      return this.selected && [{ offsets: this.offsets }];
    },
  }
}
</script>

<style lang="scss">
  @import "../../variables.scss";

</style>
