<template>
    <div class="skeleton">
        <aside class="left">
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
        </aside>
        <main>
            <Placeholder />
            <Placeholder />
        </main>
        <aside class="right">
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
        </aside>
    </div>
</template>

<script>
import Placeholder from './Placeholder.vue';

export default {
    components: { Placeholder }
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
