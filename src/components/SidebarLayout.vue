<template>
    <aside>
        <button @click="addPlaceholder">Add Placeholder</button>
        <component v-for="(placeholder, index) in placeholders" :key="index" :is="placeholder" />
    </aside>
</template>
<script>
import Placeholder from './Placeholder.vue';

export default {
    data() {
        return {
            placeholders: []
        }
    },
    methods: {
        addPlaceholder() {
            this.placeholders.push(Placeholder);
        }
    }
}
</script>
