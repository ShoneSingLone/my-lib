import {createApp, reactive} from 'vue';
import {createRouter, createWebHashHistory} from "vue-router"
import './style.css';
import {_, $, VentoseUIWithInstall, State_UI} from "@ventose/ui";

import App from './App.vue';


const Home = {template: '<div>Home</div>'}
const About = {template: '<div>About</div>'}

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})


const appPlugins = {
    install: (app, options /*{dependState, appPlugins}*/) => {
        /* isUsePopover 全局监听 [data-ui-popover] */
        app.use(VentoseUIWithInstall, {
            appPlugins,
            dependState: options.dependState
        });
        app.use({
            install: (app, {watch} = {}) => {
                //注册i8n实例并引入语言文件
                app.config.globalProperties.$t = State_UI.$t;
                State_UI.assetsSvgPath = `/assets/svg`;
                $("html").attr("lang", State_UI.language);
                watch && watch();
            }
        });
        app.use(router);
        return app;
    }
};

const State_App = reactive({});

createApp(App)
    .use(appPlugins, {
        dependState: State_App
    }).mount('#app')
