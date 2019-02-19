<template>
  <div class="widget widget-sidebar">
    <div class="sticky-block">
      <h2>
        <span @click.prevent="toggle">
          <span class="open-toggle">
            <Icon :name="open ? 'chevron-down' : 'chevron-right'" />
          </span>
          <slot name="header" />
        </span>
        <span v-if="open" class="fixed-toggle" @click.prevent="toggleFix">
          <Icon :name="fixed ? 'expand' : 'compress'" />
        </span>
      </h2>
      <div v-if="open" class="sticky-body">
        <slot name="sticky" />
      </div>
    </div>
    <div v-if="open" :class="['body', { fixed }]">
      <slot name="body" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: true,
      fixed: true,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    toggleFix() {
      this.fixed = !this.fixed;
    }
  }
}
</script>
