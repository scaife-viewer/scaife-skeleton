<template>
  <div class="add-widgets">
    <ul>
      <li v-for="(option, i) in widgetOptions" :key="i">
        <button @click="$emit('select', option.component)">{{ option.text }}</button>
      </li>
    </ul>
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
