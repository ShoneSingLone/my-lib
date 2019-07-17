import interactions from './interactions.vue';

interactions.install = function (Vue) {
  if (!interactions.installed) {
    Vue.directive('ia', interactions);
    interactions.installed = true;
  }
}

export default interactions;