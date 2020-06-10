<template>
  <FixedSkeleton
    :main-widget="mainWidget"
    :left-widgets="leftWidgets"
    :right-widgets="rightWidgets"
  >
  </FixedSkeleton>
</template>
<script>
  import axios from 'axios';
  import {
    TextSizeWidget,
    TextWidthWidget,
  } from '@scaife-viewer/scaife-widgets';
  import FixedSkeleton from '../skeleton';

  import SelectedTextInfoWidget from '../components/widgets/reader/SelectedTextInfoWidget.vue';
  import BookInfoWidget from '../components/widgets/morphgnt/BookInfoWidget.vue';
  import BookSelectWidget from '../components/widgets/morphgnt/BookSelectWidget.vue';
  import InterlinearWidget from '../components/widgets/morphgnt/InterlinearWidget.vue';
  import SelectablePassageWidget from '../components/widgets/morphgnt/SelectablePassageWidget.vue';
  import SelectedWordsWidget from '../components/widgets/morphgnt/SelectedWordsWidget.vue';

  import {
    MORPHGNT_SET_BOOKS,
    MORPHGNT_SET_BOOK,
    MORPHGNT_SET_PASSAGE,
  } from './constants';

  export default {
    components: {
      FixedSkeleton,
    },
    methods: {
      fetchData() {
        const apiRoot = 'https://api.morphgnt.org';
        axios
          .get(`${apiRoot}/v0/root.json`)
          .then((r) => this.$store.dispatch(MORPHGNT_SET_BOOKS, r.data));
        if (this.$route.query.book) {
          axios
            .get(`${apiRoot}${this.$route.query.book}`)
            .then((r) =>
              this.$store.dispatch(MORPHGNT_SET_BOOK, { book: r.data }),
            );
        }
        if (this.$route.query.passage) {
          axios
            .get(`${apiRoot}${this.$route.query.passage}`)
            .then((r) =>
              this.$store.dispatch(MORPHGNT_SET_PASSAGE, { passage: r.data }),
            );
        }
      },
    },
    computed: {
      mainWidget() {
        return SelectablePassageWidget;
      },
      leftWidgets() {
        return [BookSelectWidget, BookInfoWidget];
      },
      rightWidgets() {
        return [
          TextSizeWidget,
          TextWidthWidget,
          InterlinearWidget,
          SelectedTextInfoWidget,
          SelectedWordsWidget,
        ];
      },
    },
    created() {
      this.fetchData();
    },
    watch: {
      $route: 'fetchData',
    },
  };
</script>

<style lang="scss">
  @import '../variables.scss';

  .text-size-control {
    cursor: pointer;
    font-family: 'Noto Serif';

    color: $gray-500;

    &.selected {
      color: $gray-800;
    }
  }

  .text-width-widget {
    margin: 0 2em;
    flex: 1;
    .text-width-control {
      font-family: 'Noto Serif';
      cursor: pointer;
      color: $gray-500;
      font-size: 14px;
      padding-right: 5px;
    }

    .text-width-control.active {
      color: $black;
    }
  }
</style>
