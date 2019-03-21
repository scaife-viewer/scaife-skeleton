<template>
    <div class="work-list">
        <div>
            <h2>Works</h2>
            <WorkCardDeck
                v-for="work in works" :key="work.urn"
                :work="work"
                @selectWork="onSelectWork"
                @selectText="onSelectText"
                @selectPassage="passage => $emit('selectPassage', passage)"
            />
        </div>
    </div>
</template>

<script>
import WorkCardDeck from './WorkCardDeck.vue';
import { LIBRARY_SELECT_WORK, LIBRARY_SELECT_TEXT } from '../../../constants';

export default {
    scaifeConfig: {
      displayName: 'Work List',
      location: 'both',
      singleton: true,
    },
    components: { WorkCardDeck },
    methods: {
        onSelectWork(work) {
            this.$store.dispatch(LIBRARY_SELECT_WORK, { work });
        },
        onSelectText(text) {
            this.$store.dispatch(LIBRARY_SELECT_TEXT, { text });
        },
    },
    computed: {
        textGroup() {
            return this.$store.state.selectedTextGroup;
        },
        works() {
            return this.textGroup && this.textGroup.works;
        }
    }
}
</script>
