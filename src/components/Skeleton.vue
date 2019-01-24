<template>
    <div class="skeleton">
        <SidebarLayout class="left" />
        <main>
            <Placeholder />
            <Placeholder />
        </main>
        <SidebarLayout class="right" />
    </div>
</template>

<script>
import SidebarLayout from './SidebarLayout.vue';
import Placeholder from './Placeholder.vue';

export default {
    components: { Placeholder, SidebarLayout }
}
</script>

<style lang="scss">
.skeleton {
    display: flex;
    height: 100vh;
    main {
        flex: 1;
        min-width: 600px;
        background: #EEE;
    }
    aside {
        width: 300px;
        background: #DDD;
    }
}
</style>
