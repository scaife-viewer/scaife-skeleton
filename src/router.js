import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import EditableSkeletonDemo from './demos/EditableSkeletonDemo.vue';
import MorphGNTDemo from './demos/MorphGNTDemo.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '',
  routes: [
    { path: '/', component: App, name: 'home' },
    { path: 'editable-skeleon/', component: EditableSkeletonDemo, name: 'editable' },
    { path: 'morphgnt/', component: MorphGNTDemo, name: 'morphgnt'},
  ],
});

export default router;
