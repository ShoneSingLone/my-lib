import VueEasyLightbox from './HelloWorld.vue'

VueEasyLightbox.install = function (Vue) {
    if (VueEasyLightbox.installed) return

    Vue.component(VueEasyLightbox.name, VueEasyLightbox)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueEasyLightbox)
}

if (window) {
    window.componentList = window.componentList || {};
    window.componentList.VueEasyLightbox = VueEasyLightbox;
}

export default VueEasyLightbox