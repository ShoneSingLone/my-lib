import Plyr from './Plyr.vue'

Plyr.install = function (Vue) {
  if (Plyr.installed) return
  Vue.component(Plyr.name, Plyr)
}
/* 
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Plyr)
} */

export default Plyr