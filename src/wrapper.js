// Import vue component
import createStore from './skeleton/config';
import SkeletonPlugin from './skeleton/plugin';

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(SkeletonPlugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default SkeletonPlugin;

export { createStore };
