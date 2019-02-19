<template>
    <div class="placeholder">
      <keep-alive>
        <component :is="configuredComponent" :widget-base="widgetBase" />
      </keep-alive>
      <a href="#" @click.prevent="onRemove" v-if="!fixed">Remove</a>
    </div>
</template>

<script>
export default {
  props: ['widget-base', 'configuredComponent', 'fixed'],
  methods: {
    onRemove() {
      this.$emit("remove");
    }
  }
};
</script>

<style lang="scss">
.placeholder {
  background: white;
  min-height: 200px;
  border: 1px solid #efefef;
  border-radius: 3px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  > div {
    flex: 1;
  }
}
</style>
