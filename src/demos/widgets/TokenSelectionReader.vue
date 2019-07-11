<template>
    <div class="reader">
        <span class="token" :class="{ selected: selected(token) }" v-for="(token, index) in tokens" :key="index" @click.prevent="onClick(token)">
            {{ token }}{{ ' ' }}
        </span>
    </div>
</template>
<script>
import { SELECT_TOKEN } from '../constants';
export default {
    props: ['tokens'],
    methods: {
      onClick(token) {
        this.$store.dispatch(SELECT_TOKEN, { token })
      },
      selected(token) {
        return this.$store.state.selectedToken === token;
      }
    }
}
</script>

<style lang="scss">
  .reader .token.selected {
    text-decoration: underline;
  }
</style>
