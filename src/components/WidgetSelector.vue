<template>
  <div class="add-widgets">
    <div class="widget-option" v-for="(option, i) in widgetOptions" :key="i" @click.prevent="$emit('select', option.component)">
        <span>{{ option.text }}</span>
        <icon name="plus-square" />
    </div>
  </div>
</template>
<script>
export default {
    computed: {
      widgetOptions() {
        return this.$store.state.widgetOptions.map(o => {
            return { text: o.displayName, component: o };
        });
      }
    }
}
</script>
<style lang="scss">
.widget-option {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 1.75rem 2.25rem;
    margin: 0.5rem 0.375rem;
    border: 1px solid #EEE;
    background: rgba(#CCC, 0.5);
    &:hover {
        background: #CCC;
    }
    font-size: 18px;
}
</style>
