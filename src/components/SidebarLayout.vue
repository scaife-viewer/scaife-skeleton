<template>
    <aside>
        <button @click="addPlaceholder">Add Placeholder</button>
        <component v-for="(placeholder, index) in placeholders" :key="index" :configured-component="placeholder.widget" :is="placeholder.placeholder" @configured="widget => onConfigure(widget, index)" @remove="removePlaceholder(index)" />
    </aside>
</template>
<script>
import Placeholder from './Placeholder.vue';

export default {
    props: ['name'],
    computed: {
        placeholders() {
            return this.$store.state.placeholders[this.name];
        }
    },
    methods: {
        onConfigure(widget, index) {
            this.$store.state.placeholders[this.name][index].widget = widget;
        },
        addPlaceholder() {
            this.$store.state.placeholders[this.name] = [
                ...this.$store.state.placeholders[this.name],
                {
                    placeholder: Placeholder,
                    widget: null,
                }
            ];
        },
        removePlaceholder(index) {
            const placeholders = [...this.$store.state.placeholders[this.name]];
            placeholders.splice(index, 1);
            this.$store.state.placeholders[this.name] = placeholders;
        }
    }
}
</script>
