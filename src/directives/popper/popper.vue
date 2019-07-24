<script>
import Popper from "popper.js";
let { $ } = window;
if (!$) alert("dependency jQuery");

function updatePopper(el, { name, value, modifiers }, tag = "updatePopper") {
  console.log(tag, name, value, modifiers);
  if (el.currentPopper && el.currentPopper.destroy) {
    el.currentPopper.destroy();
  }
  let { html: htmlVue, placement = "top" } = value;
  if (htmlVue) {
    let htmlInstance = htmlVue.$mount();
    el.currentPopper = new Popper(
      el,
      $(htmlInstance.$mount().$el).appendTo("body"),
      {
        ...value,
        placement
      }
    );
  }
}

export default {
  // name: "interactions",
  name: "ia",
  /* 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。 */
  bind: function(el, { name, value, modifiers }) {
    console.log("bind", name, value, modifiers);
    console.log(el);
  },
  /* 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中) */
  inserted: function(el, { name, value, modifiers }) {
    updatePopper(el, { name, value, modifiers });
  },
  /* 所在组件的 VNode 更新时调用 */
  update: function(el, { name, value, modifiers }) {
    updatePopper(el, { name, value, modifiers }, "update");
  },
  /* 指令所在组件的 VNode 及其子 VNode 全部更新后调用 */
  componentUpdated: function(el, { name, value, modifiers }) {
    console.log("componentUpdated", name, value, modifiers);
  },
  /* 只调用一次，指令与元素解绑时调用 */
  unbind: function(el, { name, value, modifiers }) {
    console.log("unbind", name, value, modifiers);
  }
};
</script>

<style lang="scss" src="./popper.scss">
</style>
