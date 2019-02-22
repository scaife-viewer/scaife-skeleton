class Skeleton {
  constructor(widgets) {
    this.widgets = widgets;
  }

  widgetOptions(location, mainWidget, leftWidgets, rightWidgets) {
    return this.widgets.filter(o => {
      return o.scaifeConfig.location === location || o.scaifeConfig.location === 'both';
    }).filter(o => {
      if (o.scaifeConfig.singleton) {
        return (mainWidget !== o && leftWidgets.indexOf(o) === -1 && rightWidgets.indexOf(o) === -1)
      } else {
        return true;
      }
    }).map(o => {
      return { text: o.scaifeConfig.displayName, component: o };
    });
  }
};

const install = function (Vue, options) {
  Vue.prototype.$scaife = Vue.prototype.$scaife || {};
  Vue.prototype.$scaife = {
    ...Vue.prototype.$scaife,
    skeleton: new Skeleton(options.widgets)
  }
};

const SkeletonPlugin = { install };

export default SkeletonPlugin;
