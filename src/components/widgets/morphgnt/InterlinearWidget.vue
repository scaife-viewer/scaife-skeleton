<template>
  <div class="interlinear">
    <div class="click" @click="toggleInterlinear">Toggle</div>
  </div>
</template>

<script>
  export default {
    scaifeConfig: {
      displayName: 'Interlinear',
      location: 'sidebar',
      singleton: true,
    },
    methods: {
      toggleInterlinear() {
        this.$store.dispatch('toggleInterlinear');
      },
    },
  };
</script>
