<template>
    <FixedSkeleton
      @leftToggle="onLeftToggle"
      @rightToggle="onRightToggle"
      :left-open="leftOpen"
      :right-open="rightOpen"
      :main-widget="mainWidget"
      :left-widgets="leftWidgets"
      :right-widgets="rightWidgets">
    </FixedSkeleton>
</template>
<script>
  import axios from 'axios';
  import FixedSkeleton from '../skeleton/FixedSkeleton.vue';
  import MainLayout from '../skeleton/main/MainLayout.vue';
  import SidebarLayout from '../skeleton/sidebar/SidebarLayout.vue';

  import TextSizeWidget from '../components/widgets/text-size/TextSizeWidget.vue';
  import BookInfoWidget from '../components/widgets/morphgnt/BookInfoWidget.vue';
  import BookSelectWidget from '../components/widgets/morphgnt/BookSelectWidget.vue';
  import InterlinearWidget from '../components/widgets/morphgnt/InterlinearWidget.vue';
  import PassageWidget from '../components/widgets/morphgnt/PassageWidget.vue';

  import { MORPHGNT_SET_BOOKS, MORPHGNT_SET_BOOK, MORPHGNT_SET_PASSAGE, TOGGLE_RIGHT_SIDEBAR, TOGGLE_LEFT_SIDEBAR, SET_WORD } from '../constants';

  export default {
    components: {
      FixedSkeleton,
      MainLayout,
      SidebarLayout,
    },
    methods: {
      onLeftToggle() {
        this.$store.dispatch(TOGGLE_LEFT_SIDEBAR);
      },
      onRightToggle() {
        this.$store.dispatch(TOGGLE_RIGHT_SIDEBAR);
      },
      fetchData() {
        const apiRoot = 'https://api.morphgnt.org';
        axios.get(`${apiRoot}/v0/root.json`)
          .then(r => this.$store.dispatch(MORPHGNT_SET_BOOKS, r.data));
        if (this.$route.query.book) {
          axios.get(`${apiRoot}${this.$route.query.book}`)
            .then(r => this.$store.dispatch(MORPHGNT_SET_BOOK, { book: r.data }));
        }
        if (this.$route.query.passage) {
          axios.get(`${apiRoot}${this.$route.query.passage}`)
            .then(r => this.$store.dispatch(MORPHGNT_SET_PASSAGE, { passage: r.data }));
        }
      }
    },
    computed: {
      mainWidget() {
        return PassageWidget;
      },
      leftWidgets() {
        return [BookSelectWidget, BookInfoWidget];
      },
      rightWidgets() {
        return [TextSizeWidget, InterlinearWidget];
      },
      leftOpen() {
        return this.$store.state.leftOpen;
      },
      rightOpen() {
        return this.$store.state.rightOpen;
      },
    },
    created() {
        this.fetchData();
    },
    watch: {
        $route: 'fetchData',
    }
  }
</script>
