<template>
    <div class="grid-layout">
        <div class="grid-config">
            <a href="#" @click="dual = false">Single Reader</a> |
            <a href="#" @click="dual = true">Dual Reader</a>
        </div>
        <div class="grid-container" v-if="dual">
            <Placeholder :fixed="true" />
            <Placeholder :fixed="true" />
        </div>
        <div class="grid-container" v-else>
            <Placeholder fixed />
        </div>
    </div>
</template>
<script>
import Placeholder from './Placeholder.vue';

export default {
    components: {
        Placeholder
    },
    data() {
        return {
            dual: true
        }
    }
}
</script>
<style>
.grid-config {
    text-align: center;
}
.grid-container {
    display: flex;
    flex-direction: column;
    flex: 1;
}
.grid-container .placeholder {
    flex: 1;
}
</style>
