<template>
  <video v-bind="$attrs" :poster="poster">
    <source
      v-for="(item, index) in options.sourceSrc"
      :key="index"
      :src="item.src"
      :type="item.type"
    />
  </video>
</template>

<script>
// import Plyr from "@/components/Plyr/src/js/plyr.js";
import PreviewTitle from "@/components/Plyr/src/js/plugins/preview-title";

export default {
  props: {
    poster: String,
    options: {
      required: true,
      type: Object
    }
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      player: {}
    };
  },
  methods: {
    init() {
      let { Plyr } = window;
      if (!Plyr) return console.warn("未引入 lib Plyr");
      this.player = new Plyr(this.$el, this.options);
      this.addTitle();
    },
    addTitle() {
      if (this.options.previewTitle.enabled) {
        this.previewTitle = new PreviewTitle(this.player);
      }
    }
  }
};
</script>

<style lang="scss" src="./src/sass/plyr.scss">
</style>
