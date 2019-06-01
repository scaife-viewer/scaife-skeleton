// Import vue component
import FixedSkeleton, {
  createStore,
  EditableSkeleton,
  SkeletonPlugin,
} from './skeleton';

import TextLoader from './skeleton/TextLoader.vue';
import Icon from './skeleton/icons/Icon.vue';

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('FixedSkeleton', FixedSkeleton);
  Vue.component('EditableSkeleton', EditableSkeleton);
  Vue.component('Icon', Icon);
  Vue.component('TextLoader', TextLoader);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

SkeletonPlugin.install = install;

// To allow use as module (npm/webpack/etc.) export component
export default SkeletonPlugin;

export { createStore };
