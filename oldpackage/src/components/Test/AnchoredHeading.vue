<script>
export default {
  name: "AnchoredHeading",
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render: function(h) {
    // 创建 kebab-case 风格的 ID
    var headingId = this.getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, "-")
      .replace(/(^-|-$)/g, "");

    return h(
      "h" + this.level,
      {
        style: {
          fontSize: this.level + 2 + "px",
          lineHeight: this.level + 2 + "px",
          border: "1px solid black"
        }
      },
      [
        h(
          "input",
          {
            attrs: { name: headingId, href: headingId, id: headingId },
            style: {
              fontSize: this.level + 2 + "px",
              lineHeight: this.level + 2 + "px"
            },
            domProps: { value: headingId }
          },
          this.$slots
        )
      ]
    );
  },
  methods: {
    getChildrenTextContent(children) {
      let _this = this;
      return children
        .map(function(node) {
          return node.children
            ? _this.getChildrenTextContent(node.children)
            : node.text;
        })
        .join("");
    }
  }
};
</script>
<style lang="scss">
.anchored-heading {
}
</style>