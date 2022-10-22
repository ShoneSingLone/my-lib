//@ts-nocheck
import { createApp, reactive } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import { _, $, VentoseUIWithInstall, State_UI } from "./ui/index";

import App from "./App.vue";

const appPlugins = {
  install: (app, options /*{dependState, appPlugins}*/) => {
    /* isUsePopover 全局监听 [data-ui-popover] */
    app.use(VentoseUIWithInstall, {
      appPlugins,
      dependState: options.dependState,
    });
    app.use({
      install: (app, { watch } = {}) => {
        //注册i8n实例并引入语言文件
        app.config.globalProperties.$t = State_UI.$t;
        State_UI.assetsSvgPath = `/assets/svg`;
        $("html").attr("lang", State_UI.language);
        watch && watch();
      },
    });
    return app;
  },
};

const State_App = reactive({});

createApp(App)
  .use(appPlugins, {
    dependState: State_App,
  })
  .use(
    createRouter({
      history: createWebHashHistory(),
      routes: [
        { path: "/", component: { template: "<div>Home</div>" } },
        { path: "/about", component: { template: "<div>About</div>" } },
      ],
    })
  )
  .mount("#app");
