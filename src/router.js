import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

let _routeList = [{
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/PageLoopRoll',
    name: 'PageLoopRoll',
    component: () => import( /* webpackChunkName: "PageLoopRoll" */ './views/PageLoopRoll.vue')
  }, {
    path: '/PageImgViewer',
    name: 'PageImgViewer',
    component: () => import( /* webpackChunkName: "PageImgViewer" */ './views/PageImgViewer.vue')
  }
]

export let routeList = _routeList;

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, ..._routeList]
})