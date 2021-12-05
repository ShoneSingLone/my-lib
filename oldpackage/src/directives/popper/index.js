import popper from './popper.vue';

popper.install = function (Vue) {
  if (!popper.installed) {
    Vue.directive('popper', popper);
    popper.installed = true;
  }
}

export default popper;