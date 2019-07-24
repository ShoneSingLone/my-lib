import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

function Route(name) {
  return {
    name,
    path: `/${name}`,
    component: () => import( /* webpackChunkName: "route" */ `./views/${name}.vue`)
  }
}

function createRouteArray(data) {
  if (typeof data === "string") {
    return [new Route(data)];
  } else {
    return data.map(i => new Route(i));
  }
}

let _routeList = createRouteArray([
  'PageTest',
  'PageLoopRoll',
  'PageImgViewer',
  'PageWindow',
  'PageVDrag',
  'PageTips'
]);

export let routeList = _routeList;
export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, ..._routeList]
})