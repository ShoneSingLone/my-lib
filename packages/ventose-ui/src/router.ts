import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  { path: "/xIcon", component: () => import("./ui/xIcon/DemoXIcon.vue") },
  { path: "/xButton", component: () => import("./ui/xButton/DemoXButton.vue") },
  {
    path: "/xDataGrid",
    component: () => import("./ui/xDataGrid/DemoXDataGrid.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
