<template>
    <div class="work">
        <h3><a href @click.prevent="$emit('selectWork', work)"><b>{{ work.label }}</b></a></h3>
        <div class="card-deck">
            <VersionCard
                v-for="text in work.texts" :key="text.url"
                :text="text"
                @selectText="text => $emit('selectText', text)"
                @selectPassage="passage => $emit('selectPassage', passage)"
            />
        </div>
    </div>
</template>

<script>
import VersionCard from './VersionCard.vue';

export default {
    props: ['work'],
    components: { VersionCard },
}
</script>

<style lang="scss">
    .card-deck {
        display: flex;
        flex-flow: row wrap;
    }
</style>
