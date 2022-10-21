//@ts-nocheck
import { defineConfig } from "vite";
import useVue from "@vitejs/plugin-vue";
import useVueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

const isApp = process.env.type === "app";

const globals = {
  "ant-design-vue": "antd",
  vue: "Vue",
  jquery: "$",
  lodash: "_",
  dayjs: "dayjs",
  moment: "dayjs",
  axios: "axios",
}

const ConfigOptions = {
  plugins: [useVue(), useVueJsx()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@ventose": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: false,
    outDir: "libdist",
    /* 没有混缩 */
    lib: {
      formats: ["umd", "es"],
      entry: path.resolve(__dirname, "src/ui/index.tsx"),
      name: "VentoseUI",
      fileName: (format) => `VentoseUI.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(globals),
      plugins: [],
      output: {
        globals
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
