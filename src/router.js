import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import EditableSkeletonDemo from './demos/EditableSkeletonDemo.vue';
import MorphGNTDemo from './demos/MorphGNTDemo.vue';
import PaginationDemo from './demos/PaginationDemo.vue';
import BirdsEyeDemo from './demos/BirdsEyeDemo.vue';
import SectionBirdsEyeDemo from './demos/SectionBirdsEyeDemo.vue';
import IIIFDemo from './demos/IIIFDemo.vue';
import HomerBirdsEyeDemo from './demos/HomerBirdsEyeDemo.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '',
  routes: [
    { path: '/', component: App, name: 'home' },
    {
      path: '/editable-skeleon/',
      component: EditableSkeletonDemo,
      name: 'editable',
    },
    { path: '/morphgnt/', component: MorphGNTDemo, name: 'morphgnt' },
    { path: '/pagination/', component: PaginationDemo, name: 'pagination' },
    { path: '/iiif/', component: IIIFDemo, name: 'iiif' },
    { path: '/birds-eye/', component: BirdsEyeDemo, name: 'birds-eye' },
    { path: '/section-birds-eye/', component: SectionBirdsEyeDemo, name: 'section-birds-eye' },
    { path: '/homer-ngrams-birds-eye/', component: HomerBirdsEyeDemo, name: 'homer-ngrams-birds-eye' },
  ],
});

export default router;
