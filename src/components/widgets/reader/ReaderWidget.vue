<template>
  <BaseWidget class="text-size-widget">
    <template slot="body">
      <div class="line" :class="`text-${textSize}`" v-for="line in passageText" :key="line[0]">
        <span class="line-ref">{{ line[0] }}</span>
        <span class="line-text">{{ line[1] }}</span>
      </div>
    </template>
  </BaseWidget>
</template>
<script>
export default {
  displayName: "Reader",
  computed: {
    passageText() {
      return this.$store.state.passageText;
    },
    textSize() {
      return this.$store.state.readerTextSize;
    }
  }
};
</script>
