# Scaife Skeleton

This is the foundation for any Scaife reader.  It consists of two main skeleton
types, `FixedSkeleton` and `EditableSkeleton`.  In the `FixedSkeleton` case, you
the site developer pre-determine and decide what widgets will belong to the
layout.  With the `EditableSkeleton`, you, as the site developer, only provide
the options of possible widgets and the user of the reader selects the layout
at runtime.

## Installation

```
yarn add scaife-skeleton
npm install scaife-skeleton
```

At the current time, you also need to copy in the `global-components` found in
this repo to you project, and register `Icon` and `TextLoader` as global
components.

## Requirements

Your project should be using [Vuex](https://vuex.vuejs.org) even if your reader
doesn't require a store directly, the skeleton does.

## Usage

After installation, you'll first want to hook up the store:

In your `store.js` (or wherever you are setting up your store):

```js
import Vue from 'vue';
import Vuex from 'vuex';

import createStore from 'scaife-skeleton/src/skeleton/config';  // packaging issue

Vue.use(Vuex);

const skeletonStore = createStore();

export default new Vuex.Store({
  modules: {
    [skeletonStore.namespace]: skeletonStore.store,
  },
});
```

### Using the `FixedSkeleton`

The use of the skeleton components is intended to be within components that are
full screen, perhaps in one that has a navbar at top.  Often this means a top
level `App.vue` component.

```vuejs
<template>
  <div id="app">
    <FixedSkeleton
        :main-widget="mainWidget"
        :left-widgets="leftWidgets"
        :right-widgets="rightWidgets"
    />
  </div>
</template>

<script>
  import FixedSkeleton from 'scaife-skeleton';

  // import widgets that you want in your project
  import TextSelectionWidget from './morphgnt/widgets/TextSelectionWidget.vue';
  import AnalysisWidget from './morphgnt/widgets/AnalysisWidget.vue';
  import ReaderWidget from './morphgnt/widgets/ReaderWidget.vue';
  import TocWidget from './morphgnt/widgets/TocWidget.vue';
  import TextSizeWidget from './reader/widgets/TextSizeWidget.vue';
  import TextWidthWidget from './reader/widgets/TextWidthWidget.vue';

  export default {
  name: 'app',
  components: {
    FixedSkeleton,
  },
  computed: {
    mainWidget() {
      return ReaderWidget;
    },
    leftWidgets() {
      return [
        TextSelectionWidget,
        TocWidget,
      ];
    },
    rightWidgets() {
      return [
        TextSizeWidget,
        TextWidthWidget,
        AnalysisWidget,
      ];
    },
  }
</script>
```

### Using the `EditableSkeleton`

For editable skeletons, the process is a bit different.  Your top level
component is really simple:

```vuejs
<template>
    <EditableSkeleton />
</template>
<script>
  import { EditableSkeleton } from 'scaife-skeleton/src/skeleton';

  export default {
    components: {
      EditableSkeleton
    },
  }
</script>
```

To tell `scaife-skeleton` about the available widgets, you pass in a list at
Vue startup time in your main js file:

```js
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import SkeletonPlugin from './skeleton/plugin';

import widgets from './widgets';

Vue.config.productionTip = false;

Vue.use(SkeletonPlugin, { widgets });

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
```

Where your `widgets.js` file looks like something like:

```js
import ReaderWidget from './reader/ReaderWidget.vue';
import TextSizeWidget from './text-size/TextSizeWidget.vue';
import TextWidthWidget from './text-width/TextWidthWidget.vue';

import BookInfoWidget from './morphgnt/BookInfoWidget.vue';
import BookSelectWidget from './morphgnt/BookSelectWidget.vue';
import InterlinearWidget from './morphgnt/InterlinearWidget.vue';
import PassageWidget from './morphgnt/PassageWidget.vue';
import SelectablePassageWidget from './morphgnt/SelectablePassageWidget.vue';

const widgets = [
  ReaderWidget,
  TextSizeWidget,
  TextWidthWidget,

  BookInfoWidget,
  BookSelectWidget,
  InterlinearWidget,
  PassageWidget,
  SelectablePassageWidget,
];

export default widgets;
```

## Development

This repo has a series of demos to facilitate the development of `scaife-skeleton`.

### Running the project

```
yarn run serve
```

### Packaging

```
yarn run package
```
