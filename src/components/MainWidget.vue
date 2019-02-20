<template>
  <div class="widget">
    <h2>
      <span>
        <a v-if="editing" href="#" @click.prevent="$emit('remove')" class="remove-link"><icon name="minus-circle" /></a>
        {{ heading }}
      </span>
    </h2>
    <div>
      <slot name="sticky" />
    </div>
    <div class="body">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['heading', 'editing'],
  }
</script>
