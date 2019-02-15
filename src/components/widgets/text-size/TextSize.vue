<template>
  <span
    class="text-size-control"
    :class="[`text-${size}`, {selected}]"
    @click.prevent="$emit('input', size)"
  >Αα</span>
</template>
<script>
export default {
  props: ["value", "size"],
  computed: {
    selected() {
      return this.value === this.size;
    }
  }
};
</script>
<style>
  .text-size-control {
    cursor: pointer;
    font-family: 'Noto Serif';
  }
</style>
