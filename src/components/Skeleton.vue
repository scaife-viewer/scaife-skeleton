<template>
    <div class="skeleton">
        <SidebarLayout name="left" class="left" />
        <GridLayout />
        <SidebarLayout name="right" class="right" />
    </div>
</template>

<script>
import GridLayout from './GridLayout.vue';
import SidebarLayout from './SidebarLayout.vue';
import Placeholder from './Placeholder.vue';

export default {
    components: { GridLayout, Placeholder, SidebarLayout }
}
</script>

<style lang="scss">
.skeleton {
    display: flex;
    height: 100vh;
    .grid-layout {
        flex: 1;
        min-width: 600px;
        background: #EEE;
        display: flex;
        flex-direction: column;
    }
    aside {
        width: 300px;
        background: #DDD;
    }
}
</style>
