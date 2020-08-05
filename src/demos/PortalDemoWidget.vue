<template>
  <div class="portal-widget u-widget">
    <div class="content">
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
      <p>Some body content</p>
    </div>
    <Portal to="some-name">
      <div class="portal-content">Header information that should be sticky</div>
    </Portal>
  </div>
</template>

<script>
  import { Portal } from 'portal-vue';

  export default {
    name: 'portal-demo-widget',
    components: { Portal },
    scaifeConfig: {
      displayName: 'Portal Demo',
      portalTarget: 'some-name',
    },
  };
</script>

<style lang="scss" scoped>
  .content {
    height: 600px;
    overflow-y: scroll;
  }
  .portal-content {
    padding: 1rem;
    background: #ccc;
  }
</style>
