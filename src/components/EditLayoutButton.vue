<template>
    <a href @click.prevent="$emit('editToggle')" class="edit-layout-button" :class="{ editing }">
        <template v-if="editing">Done</template>
        <Icon v-else name="cog" />
    </a>
</template>
<script>
export default {
    props: ['editing'],
}
</script>
<style lang="scss">
  @import "../variables.scss";

  .edit-layout-button {
    color: $gray-300;
    border: none;
    font-size: 14px;
    &:hover {
      color: $gray-700;
    }
    &.editing {
      background: $gray-300;
      color: $gray-700;
      text-decoration: none;
      padding: 5px 10px;
      &:hover {
        background: $gray-500;
      }
    }
  }
</style>
