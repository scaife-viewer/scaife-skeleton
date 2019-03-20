<template>
  <div class="work" :key="work.urn">
    <div class="label">
      <a :href="work.url">{{ work.label }}</a>
    </div>
    <div class="text-group">
      {{ work.textGroup.label }}
    </div>
    <div class="urn">
      {{ work.urn }}
    </div>
    <div class="versions">
      <template v-for="text in work.texts">
        <a :key="text.urn" href @click.prevent="() => {}" class="badge badge-light" v-popover.bottom="{name: 'work', event: 'hover'}">
          {{ text.lang }}
        </a>{{ ' ' }}
        <popover name="work" :key="`${text.urn}-popover`" event="hover">
          <div>{{ text.label }}</div>
          <div>{{ text.description }}</div>
        </popover>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ['work', 'filtered'],
};
</script>
