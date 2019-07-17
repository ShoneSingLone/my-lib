<script>
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
    setTimeout(() => {
      let { $ } = window;
      console.log("inserted", name, value, modifiers);
      el.dataset.zIndex = el.style.zIndex | 1;
      let $el = $(el);
      $(el)
        .on("mousedown.z-index", () => {
          el.style.zIndex = Number(el.dataset.zIndex + 1);
        })
        .on("mouseup.z-index", () => {
          el.style.zIndex = el.dataset.zIndex;
        });
      if (modifiers.drag) {
        $el.draggable();
      }
    }, 3000);
  },
  /* 所在组件的 VNode 更新时调用 */
  update: function(el, { name, value, modifiers }) {
    console.log("update", name, value, modifiers);
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

<style lang="scss" src="./interactions.scss">
</style>
