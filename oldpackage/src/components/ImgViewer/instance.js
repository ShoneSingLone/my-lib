import ImgViewer from './ImgViewer.vue'
let {
  Vue
} = window

window.VueServer = window.VueServer || {}

if (!window.VueServer.imgViewer) {
  window.VueServer.imgViewer = (() => {
    const Instance = new Vue({
      template: `<ImgViewer ref="imgViewer"/>`,
      components: {
        ImgViewer
      }
    })
    const component = Instance.$mount()
    document.body.appendChild(component.$el)
    return component.$refs.imgViewer
  })()
}