<template>
  <div class="page-window container">
    <markdown></markdown>
  </div>
</template>
<script>
import markdown from "@/components/Markdown/Markdown";
export default {
  name: "PageWindow",
  mounted() {},
  data() {
    return {
      markdownContent: "# hehe"
    };
  },
  methods: {},
  components: {
    markdown
  }
};
</script>
<style lang="scss">
</style>