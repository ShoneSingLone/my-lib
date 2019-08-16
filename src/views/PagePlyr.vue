<template>
  <div>
    <c-plyr
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
.page-img-viewer.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ol,
  pre {
    text-align: left;
  }
  h1 {
    color: #50d1c1;
  }
  .gallery {
    width: 80%;
    max-width: 980px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .pic {
    width: calc(50% - 30px);
    margin: 15px;
    cursor: pointer;
  }
  .pic:hover img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0);
    transform: scale(1.01);
  }
  img {
    width: 100%;
    transition: 0.3s ease;
  }
  .btn {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
    height: 50px;
    padding: 0 8px;
    margin-left: 20px;
    background-color: #50d1c1;
    border-color: #50d1c1;
    border-radius: 4px;
    color: #fff;
    transition: 0.3s;
  }
  .btn:active {
    color: #ccc;
    background-color: #6ab5ae;
    border-color: #6ab5ae;
    outline: none;
  }
}
</style>