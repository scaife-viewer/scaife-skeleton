<template>
    <div class="placeholder animated flipInY back" v-if="configure">
        <select v-model="selectedComponent">
            <option v-for="(option, i) in widgetOptions" :key="i" :value="option.component">
                {{ option.text }}
            </option>
        </select>
        <button @click.prevent="onDone">Done</button>
    </div>
    <div class="placeholder animated flipInX front" v-else>
        <a href="#" @click.prevent="onConfigure">Configure Widget</a>
        <keep-alive>
            <component :is="selectedComponent" v-if="selectedComponent !== null" />
        </keep-alive>
        <a href="#" @click.prevent="onRemove" v-if="!fixed">Remove Placeholder</a>
    </div>
</template>

<script>
export default {
    props: ['configuredComponent', 'fixed'],
    data() {
        return {
            configure: false,
            selectedComponent: null
        }
    },
    watch: {
        configuredComponent: {
            immediate: true,
            handler(c) {
                if (c) {
                    this.selectedComponent = c;
                }
            }
        }
    },
    methods: {
        onDone() {
            this.$emit('configured', this.selectedComponent);
            this.configure = !this.configure;
        },
        onRemove() {
            this.$emit('remove');
        },
        onConfigure() {
            this.configure = !this.configure;
        }
    },
    computed: {
        widgetOptions() {
            return this.$store.state.widgetOptions.map(o => {
                return {text: o.displayName, component: o};
            });
        }
    }
}
</script>

<style lang="scss">
.placeholder {
    background: white;
    min-height: 200px;
    border: 1px solid #EFEFEF;
    border-radius: 3px;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    > div {
        flex: 1;
    }
}
.placeholder.back {
    background: black;
    color: white;
}
</style>
