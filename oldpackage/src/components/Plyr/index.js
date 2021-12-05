import Plyr from './Plyr.vue'

Plyr.install = function (Vue) {
  if (Plyr.installed) return
  Vue.component(Plyr.name, Plyr)
}

if (typeof window !== 'undefined' && window.Vue) {
  let {
    Vue
  } = window;
  Vue.componentList = Vue.componentList || {};
  Vue.componentList.CPlyr = Plyr
}

export default Plyr