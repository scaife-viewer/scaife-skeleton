<template>
  <font-awesome-icon :icon="icon" v-if="inline"></font-awesome-icon>
  <font-awesome-icon :icon="icon" v-else fixed-width></font-awesome-icon>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  export default {
    name: 'icon',
    props: ['name', 'inline'],
    components: {
      FontAwesomeIcon,
    },
    computed: {
      icon() {
        return this.$scaife.skeleton.iconMap[this.name];
      },
    },
  };
</script>
