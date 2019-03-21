<template>
  <div :class="['text-group', { open : open || filtered }]">
    <h4>
      <div class="toggle">
        <span class="open-toggle" v-if="!filtered" @click.prevent="toggle">
            <icon name="chevron-down" v-if="open"></icon>
            <icon name="chevron-right" v-else></icon>
          </span>
      </div>
      <div class="label">
        <a href @click.prevent="$emit('selectTextGroup', textGroup)">{{ textGroup.label }}</a>
      </div>
      <div class="urn">
        <span>{{ textGroup.urn }}</span>
      </div>
    </h4>
    <div class="works" v-if="open || filtered">
      <div v-for="work in textGroup.works" class="work" :key="work.urn">
        <div class="filler">&nbsp;</div>
        <div class="label">
          <a href @click.prevent="$emit('selectWork', work)">{{ work.label }}</a>
        </div>
        <div class="urn">
          {{ work.urn }}
        </div>
        <div class="versions">
          <template v-for="text in work.texts">
            <a :key="text.urn" href @click.prevent="$emit('selectText', text)" class="badge badge-light" v-popover.bottom="{name: 'text-group', event: 'hover'}">
              {{ text.lang }}
            </a>{{ ' ' }}
            <popover name="text-group" :key="`${text.urn}-popover`" event="hover">
              <div>{{ text.label }}</div>
              <div>{{ text.description }}</div>
            </popover>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['textGroup', 'filtered'],
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
