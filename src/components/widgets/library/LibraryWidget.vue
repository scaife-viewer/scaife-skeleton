<template>
  <div class="library-component">
    <page-loader v-if="loading" />
    <div v-else-if="error" class="text-center"><b>Error</b>: {{ error }}</div>
    <template v-else>
      <h2>Text Groups and Works</h2>
      <div class="form-group">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            v-model="query"
            placeholder="Find a text group or work... (e.g. Plato or Apology)"
            ref="filter-input"
          >
          <div class="input-group-append" v-if="filtered">
            <button class="btn btn-outline-secondary" type="button" @click="clearQuery"><icon name="times"></icon></button>
          </div>
        </div>
      </div>
      <div class="controls">
        <div class="toggle-all" v-if="!filtered && collapsible">
          <span @click="expandAll">expand all</span> | <span @click="collapseAll">collapse all</span>
        </div>
        <div class="sort">
          sort by:
          <span @click="sort('text-group')" :class="{ active: sortKind === 'text-group' }">text group</span> |
          <span @click="sort('cts-urn')" :class="{ active: sortKind === 'cts-urn' }">CTS URN</span> |
          <span @click="sort('work')" :class="{ active: sortKind === 'work' }">work</span>
        </div>
      </div>
      <div :class="['text-groups', { filtered }]">
        <template v-if="sortKind === 'cts-urn' || sortKind === 'text-group'"  >
          <LibraryTextGroup
            v-for="textGroup in textGroups" :key="textGroup.urn"
            ref="collapsible"
            :textGroup="textGroup"
            :filtered="filtered"
            @selectTextGroup="onSelectTextGroup"
            @selectWork="onSelectWork"
            @selectText="onSelectText"
          />
        </template>
        <div v-else-if="sortKind === 'work'" class="flat-work-list">
          <LibraryWork
            v-for="work in works" :key="work.urn"
            :work="work"
            :filtered="filtered"
            @selectWork="onSelectWork"
            @selectText="onSelectText"
           />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {
    LIBRARY_LOAD_TEXT_GROUP_LIST,
    LIBRARY_RESET_TEXT_GROUP_WORKS,
    LIBRARY_FILTER_TEXT_GROUPS,
    LIBRARY_FILTER_TEXT_GROUP_WORKS,
    LIBRARY_RESET_TEXT_GROUPS,
    LIBRARY_SET_SORT,
LIBRARY_SELECT_TEXT_GROUP,
LIBRARY_SELECT_WORK,
LIBRARY_SELECT_TEXT,
} from '../../../constants';
import LibraryTextGroup from './LibraryTextGroup.vue';
import LibraryWork from './LibraryWork.vue';
const debounce = require('lodash.debounce');

export default {
  scaifeConfig: {
    displayName: 'Library',
    location: 'sidebar',
    singleton: true,
  },
  created() {
    this.loading = true;
    this.$store.dispatch(LIBRARY_LOAD_TEXT_GROUP_LIST)
      .then(() => {
        this.loading = false;
        this.$nextTick(() => {
          this.$refs['filter-input'].focus();
        });
      })
      // .catch((err) => {
      //   this.loading = false;
      //   this.error = err.message;
      // });
  },
  data() {
    return {
      loading: false,
      error: '',
      query: '',
      filtered: false,
    };
  },
  watch: {
    query() {
      this.filter();
    },
    sortKind() {
      this.filter();
    },
  },
  computed: {
    textGroups() {
      if (this.sortKind === 'text-group') {
        return this.$store.getters.sortedByTextGroup;
      }
      return this.$store.getters.sortedByURN;
    },
    works() {
      return this.$store.getters.sortedByWork;
    },
    sortKind() {
      return this.$store.state.sortKind;
    },
    collapsible() {
      return this.sortKind === 'cts-urn' || this.sortKind === 'text-group';
    },
  },
  methods: {
    onSelectTextGroup(textGroup) {
      this.$store.dispatch(LIBRARY_SELECT_TEXT_GROUP, { textGroup });
    },
    onSelectWork(work) {
      this.$store.dispatch(LIBRARY_SELECT_WORK, { work });
    },
    onSelectText(text) {
      this.$store.dispatch(LIBRARY_SELECT_TEXT, { text });
    },
    clearQuery() {
      this.query = '';
    },
    filter: debounce(
      function f() {
        const query = this.query.trim();
        this.filtered = query !== '';
        if (query === '') {
          const action = this.sortKind === 'work' ? LIBRARY_RESET_TEXT_GROUP_WORKS : LIBRARY_RESET_TEXT_GROUPS;
          this.$store.dispatch(action);
        } else {
          const action = this.sortKind === 'work' ? LIBRARY_FILTER_TEXT_GROUP_WORKS : LIBRARY_FILTER_TEXT_GROUPS;
          this.$store.dispatch(action, query);
        }
      },
      250,
    ),
    collapseAll() {
      this.$refs.collapsible.forEach((c) => {
        c.open = false;
      });
    },
    expandAll() {
      this.$refs.collapsible.forEach((c) => {
        c.open = true;
      });
    },
    sort(kind) {
      this.$store.dispatch(LIBRARY_SET_SORT, { kind });
    },
  },
  components: {
    LibraryTextGroup,
    LibraryWork,
  },
}
</script>

<style>

</style>
