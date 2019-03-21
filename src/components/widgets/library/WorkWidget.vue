<template>
    <div class="work">
        <div>
            <h2>Versions</h2>
            <VersionCard
                v-for="text in texts" :key="text.url"
                :text="text"
                @selectText="onSelectText"
                @selectPassage="passage => $emit('selectPassage', passage)"
            />
        </div>
    </div>
</template>

<script>
import VersionCard from './VersionCard.vue';
import { LIBRARY_SELECT_TEXT } from '../../../constants';

export default {
    scaifeConfig: {
      displayName: 'Work',
      location: 'both',
      singleton: true,
    },
    components: { VersionCard },
    methods: {
        onSelectText(text) {
            this.$store.dispatch(LIBRARY_SELECT_TEXT, { text });
        },
    },
    computed: {
        work() {
            return this.$store.state.selectedWork;
        },
        texts() {
            return this.work && this.work.texts;
        }
    }
}
</script>
