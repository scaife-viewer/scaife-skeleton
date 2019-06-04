# Scaife Skeleton

[![CircleCI](https://circleci.com/gh/eldarion/scaife-skeleton.svg?style=svg)](https://circleci.com/gh/eldarion/scaife-skeleton)

This is the foundation for any Scaife reader.  It consists of two main skeleton types, `FixedSkeleton` and `EditableSkeleton`.

1. In the `FixedSkeleton` case, you the site developer, pre-determine and decide what widgets will belong to the
layout.
1. With the `EditableSkeleton`, you, as the site developer, only provide the options of possible widgets and the user of the reader selects the layout at runtime.

## Installation

```
yarn add scaife-skeleton

or

npm install scaife-skeleton
```

## Requirements

Your project must be using [Vuex](https://vuex.vuejs.org) even if your reader doesn't require a store directly since the skeleton uses it.

## Usage

After installation, you'll first want to hook up the store:

In your `store.js` (or wherever you are setting up your store):

```js
import Vue from 'vue';
import Vuex from 'vuex';

import createStore from 'scaife-skeleton';

Vue.use(Vuex);

const skeletonStore = createStore();

export default new Vuex.Store({
  modules: {
    [skeletonStore.namespace]: skeletonStore.store,
  },
});
```

### Using the `FixedSkeleton`

The use of the skeleton components is intended to be within components that are full screen, perhaps in one that has a navbar at top.  Often this means a top level `App.vue` component.

```vue
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

For editable skeletons, the process is a bit different.  Your top level component is really simple:

```vue
<template>
  <EditableSkeleton />
</template>
```

To tell `scaife-skeleton` about the available widgets, you pass in a list at Vue startup time in your `main.js` file:

```js
import Vue from 'vue';
import SkeletonPlugin from 'scaife-skeleton';

import App from './App.vue';
import store from './store';
import router from './router';
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

### Adding Additional Icons

You can provide your own icons by passing in an `iconMap` option when adding the plugin:

```js
import { faAddressBook } from '@fortawesome/free-solid-svg-icons/faAddressBook';

const iconMap = [ faAddressBook ].reduce((map, obj) => {
  map[obj.iconName] = obj;
  return map;
}, {});

Vue.use(SkeletonPlugin, { widgets, iconMap });
```

Then you can use the globally installed `<Icon>` component in your widget:

```html
<Icon name="address-book" />
```

## Development

This repo has a series of demos to facilitate the development of `scaife-skeleton`.

### Running the project

```
yarn run serve

or

npm run serve
```

### Linting and testing

```
yarn run lint
yarn run test

or

npm run lint
npm run test
```

### Prettier

yarn run prettier:check
yarn run prettier:fix

or

npm run prettier:check
npm run prettier:fix

### Packaging

```
yarn run package

or

npm run package
```
