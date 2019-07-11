<template>
  <div class="birds-eye-widget">
    <BirdsEye :offset-collection="offsetCollection" />
  </div>
</template>

<script>
import BirdsEye from './BirdsEye.vue';

export default {
    scaifeConfig: {
      displayName: 'Birds Eye',
      singleton: true,
      location: 'main',
    },
    components: { BirdsEye },
    computed: {
      offsetCollection() {
        return [
          {
            offsets: [
              [0, 10],
              [30, 150],
              [150, 200],
              [500, 600],
              [790, 800],
            ]
          }
        ]
      }
    }
}
</script>

<style lang="scss">
  @import "../../../variables.scss";

</style>
