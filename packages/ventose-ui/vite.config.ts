//@ts-nocheck
import { defineConfig } from "vite";
import useVue from "@vitejs/plugin-vue";
import useVueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import svgHelper from "./plugins/vite/svg";


const isApp = process.env.type === "app";

const ConfigOptions = {
  plugins: [useVue(), useVueJsx(), svgHelper()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@ventose": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: false,
    outDir: "dist",
    /* 没有混缩 */
    lib: {
      formats: ["umd", "es"],
      entry: path.resolve(__dirname, "src/ui/index.tsx"),
      name: "VentoseUI",
      fileName: (format) => `VentoseUI.${format}.js`,
    },
    rollupOptions: {
      external: [
        "ant-design-vue",
        "vue",
        "jquery",
        "lodash",
        "moment",
        "axios",
        "vue-router",
      ],
      plugins: [],
      output: {
        globals: {
          vue: "Vue",
          "ant-design-vue": "antd",
          jquery: "$",
          lodash: "_",
          dayjs: "dayjs",
          moment: "dayjs",
          axios: "axios",
        },
      },
    },
  },
};

if (isApp) {
  ConfigOptions.build = {
    outDir: "appdist",
  };
}

// https://vitejs.dev/config/
export default defineConfig(ConfigOptions);
