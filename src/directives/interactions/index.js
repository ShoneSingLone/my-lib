import interactions from './interactions.vue';
import runJQuery from "./$ui/runJQuery";
import runJQueryUI from "./$ui/runJQueryUI";

let $ = window.$;
interactions.install = function (Vue) {
  if (!interactions.installed) {
    Vue.directive('ia', interactions);
    interactions.installed = true;
  }
}

async function ok() {
    try {
      if (!$) {
        await runJQuery();
        $ = window.$;
      }
      if (!$.ui) {
        await runJQueryUI()
      }
    } catch (error) {
      console.error(error);
    }
  }
  (async () => ok())();

export default interactions;