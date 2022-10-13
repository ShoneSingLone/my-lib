import {defineConfig} from "vite";
import useVue from "@vitejs/plugin-vue";
import useVueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        useVue(),
        useVueJsx()
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            "@ventose": path.resolve(__dirname, "./src")
        }
    },
    build: (() => {
        return {
            minify: false,
            outDir: "dist",
            /* 没有混缩 */
            lib: {
                formats: ["umd", "es"],
                entry: path.resolve(__dirname, "src/main.ts"),
                name: "VentoseUI",
                fileName: (format) => `VentoseUI.${format}.js`,
            },
            rollupOptions: {
                external: [" vue", "jquery", "lodash", "moment", "axios", "vue-router"],
                plugins: [],
                output: {
                    globals: {
                        vue: "Vue",
                        jquery: "$",
                        lodash: "_",
                        dayjs: "dayjs",
                        moment: "dayjs",
                        axios: "axios",
                    },
                },
            },
        };
    })(),
});
