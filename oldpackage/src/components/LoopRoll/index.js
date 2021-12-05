import LoopRoll from './LoopRoll.vue'

LoopRoll.install = function (Vue) {
    if (LoopRoll.installed) return

    Vue.component(LoopRoll.name, LoopRoll)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(LoopRoll)
}

if (window) {
    window.componentList = window.componentList || {};
    window.componentList.LoopRoll = LoopRoll;
}

export default LoopRoll