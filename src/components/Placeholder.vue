<template>
    <div class="placeholder">
      <a v-if="editing && !fixed" href="#" @click.prevent="onRemove" class="remove-link"><icon name="minus-circle" /></a>
      <keep-alive>
        <component :is="configuredComponent" :widget-base="widgetBase" />
      </keep-alive>
    </div>
</template>

<script>
export default {
  props: ['widget-base', 'configuredComponent', 'fixed', 'editing'],
  methods: {
    onRemove() {
      this.$emit("remove");
    }
  }
};
</script>

<style lang="scss">
.remove-link {
  color: red;
}
.placeholder {
  text-align: left;
  background: white;
  min-height: 200px;
  border: 1px solid #efefef;
  border-radius: 3px;
  margin: 10px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  > div {
    flex: 1;
  }
}
</style>
