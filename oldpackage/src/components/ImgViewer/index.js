import ImgViewer from './ImgViewer.vue'

ImgViewer.install = function (Vue) {
  if (ImgViewer.installed) return
  Vue.component(ImgViewer.name, ImgViewer)
}
/* 
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ImgViewer)
} */

export default ImgViewer