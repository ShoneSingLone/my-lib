<template>
  <div>
    <c-plyr
      ref="plyr"
      controls
      playsinline
      poster="http://localhost:8080/statics/img/login_bg.jpg"
      :options="options"
    ></c-plyr>
  </div>
</template>

<script>
import CPlyr from "@/components/Plyr";

export default {
  name: "PagePlyr",
  mounted() {
    window.plyr = this.$refs.plyr;
  },
  data() {
    return {
      options: {
        sourceSrc: [
          {
            src: "http://localhost:8080/statics/components/CVideo/hd.mp4",
            type: "video/mp4"
          }
        ],
        // debug: true,
        previewTitle: {
          enabled: true,
          items: [
            {
              title: "ShoneSingLone",
              time: "10.00" /* second */,
              contents:
                "ShoneSingLoneShoneSingLoneShoneSingLoneShoneSingLoneShoneSingLoneShoneSingLone"
            },
            {
              title: "ShoneSingLone",
              time: "30.00" /* second */,
              contents: "ShoneSingLone"
            },
            {
              title: "ShoneSingLone",
              time: "50.00" /* second */,
              contents: "ShoneSingLone"
            },
            {
              title: "ShoneSingLone",
              time: "60.00" /* second */,
              contents: "ShoneSingLone"
            }
          ]
        },
        previewThumbnails: {
          enabled: true,
          src: [
            "https://cdn.plyr.io/static/demo/thumbs/100p.vtt",
            "https://cdn.plyr.io/static/demo/thumbs/240p.vtt"
          ]
        }
      }
    };
  },
  methods: {},
  components: { CPlyr }
};
</script>
<style lang="scss">
</style>