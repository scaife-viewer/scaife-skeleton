<template>
    <div class="skeleton">
        <aside class="left">
            <Widget />
            <Widget />
            <Widget />
            <Widget />
        </aside>
        <main>
            <Widget />
            <Widget />
        </main>
        <aside class="right">
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
        </aside>
    </div>
</template>

<script>
import Widget from './Widget.vue';

export default {
    components: { Widget }
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
