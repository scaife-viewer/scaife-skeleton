<template>
    <div class="widget animated flipInY back" v-if="configure">
        <select v-model="selectedComponent">
            <option v-for="(option, i) in widgetOptions" :key="i" :value="option.component">
                {{ option.text }}
            </option>
        </select>
        <button @click.prevent="onConfigure">Done</button>
    </div>
    <div class="widget animated flipInX front" v-else>
        <a href="#" @click.prevent="onConfigure">Configure Widget</a>
        <component :is="selectedComponent" v-if="selectedComponent !== null" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            configure: false,
            selectedComponent: null
        }
    },
    methods: {
        onConfigure() {
            this.configure = !this.configure;
        }
    },
    computed: {
        widgetOptions() {
            console.log(this.$store.state.widgetOptions);
            return this.$store.state.widgetOptions.map(o => {
                return {text: o.displayName, component: o};
            });
        }
    }
}
</script>

<style lang="scss">
.widget {
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
.widget.back {
    background: black;
    color: white;
}
</style>
