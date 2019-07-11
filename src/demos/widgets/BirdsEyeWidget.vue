<template>
  <div class="birds-eye-widget">
    <BirdsEye :offset-collection="offsetCollection" />
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
    offsetCollection() {
      const heatMap = this.$store.getters.iliadHeatMap;
      return Object.keys(heatMap).filter(token => heatMap[token].count > 5).map(token => {
        return {
          offsets: heatMap[token].indexes.map(index => [index, index]),
        }
      });
    },
  }
}
</script>

<style lang="scss">
  @import "../../variables.scss";

</style>
