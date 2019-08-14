import Progress from './Progress.vue'

Progress.install = function (Vue) {
  if (Progress.installed) return
  Vue.component(Progress.name, Progress)
}
/* 
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Progress)
} */

export default Progress