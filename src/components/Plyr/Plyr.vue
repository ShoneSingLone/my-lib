<template>
  <video v-bind="$attrs" :poster="poster">
    <source :src="item.src" :type="item.type" v-for="(item, index) in source" :key="index" />
  </video>
</template>

<script>
import Plyr from "@/components/Plyr/src/js/plyr.js";

export default {
  props: {
    poster: String,
    source: {
      required: true,
      type: Array
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      new Plyr(this.$el, {
        previewThumbnails: {
          enabled: true,
          src: [
            "https://cdn.plyr.io/static/demo/thumbs/100p.vtt",
            "https://cdn.plyr.io/static/demo/thumbs/240p.vtt"
          ]
        }
      });
    }
  }
};
</script>

<style lang="scss" src="./src/sass/plyr.scss">
</style>
