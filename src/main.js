import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import HelloWorld from "@/components/HelloWorld.vue";

window.Vue = Vue;
Vue.config.productionTip = false
console.log(HelloWorld.name, HelloWorld);
Vue.component(HelloWorld.name, HelloWorld);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')