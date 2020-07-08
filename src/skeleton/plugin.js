import FixedSkeleton from './FixedSkeleton.vue';
import EditableSkeleton from './EditableSkeleton.vue';
import TextLoader from './TextLoader.vue';
import Icon from './icons/Icon.vue';

import utils from './utils';
import iconMap from './icons';

class Skeleton {
  constructor(widgets, additionIconMap) {
    this.widgets = widgets.reduce((map, obj) => {
      // eslint-disable-next-line no-param-reassign
      map[utils.displayName(obj.scaifeConfig.displayName)] = obj;
      return map;
    }, {});
    this.iconMap = {
      ...iconMap,
      ...additionIconMap,
    };
  }

  widgetOptions(location, mainWidget, leftWidgets, rightWidgets) {
    return (
      Object.keys(this.widgets)
        .filter((name) => {
          const config = this.widgets[name].scaifeConfig;
          return config.location === location || config.location === 'both';
        })
        .filter((name) => {
          const config = this.widgets[name].scaifeConfig;
          // only show widgets if they haven't already been used in the case of it
          // being marked a singleton, unless the location is main.
          if (config.singleton) {
            const notInMain = mainWidget !== name;
            const notInLeft = leftWidgets[name] === undefined;
            const notInRight = rightWidgets[name] === undefined;
            return (
              // eslint-disable-next-line operator-linebreak
              (location === 'main' && notInLeft && notInRight) ||
              (notInMain && notInLeft && notInRight)
            );
          }
          return true;
        })
        // eslint-disable-next-line arrow-parens
        .map((text) => ({
          text,
          component: this.widgets[text],
        }))
    );
  }
}

const install = (Vue, options) => {
  if (install.installed) return;
  install.installed = true;

  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$scaife = Vue.prototype.$scaife || {};
  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$scaife = {
    ...Vue.prototype.$scaife,
    skeleton: new Skeleton(options.widgets || [], options.iconMap || {}),
    config: options.config || {},
  };

  Vue.component('FixedSkeleton', FixedSkeleton);
  Vue.component('EditableSkeleton', EditableSkeleton);
  Vue.component('Icon', Icon);
  Vue.component('TextLoader', TextLoader);
};

const SkeletonPlugin = { install };

export default SkeletonPlugin;
