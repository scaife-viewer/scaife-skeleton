<template>
  <div class="widget">
    <h2><slot name="header" /></h2>
    <div>
      <slot name="sticky" />
    </div>
    <div class="body">
      <slot name="body" />
    </div>
  </div>
</template>
