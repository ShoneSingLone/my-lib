<template>
  <div class="page-v-drag container">
    <h1 v-ia.drag>
      <a href="https://cn.vuejs.org/v2/guide/custom-directive.html" target="_blank">custom-directive</a>
    </h1>
    <div v-ia.drag>
      <button @click="showImg=!showImg" v-ia.drag>toggle</button>
      <button @click="changeImg">changeImg</button>
    </div>
    <div>
      <input v-ia.drag="'the'" />
    </div>
    <div v-ia.drag="'the'">
      <img v-if="showImg" class="demo-img" :src="imgSrc" alt="demo" v-ia.drag />
      <img v-if="showImg" class="demo-img" :src="imgSrc" alt="demo" v-ia.drag />
    </div>
  </div>
</template>
<script>
// import dInteractions from "@ventose/interactions";
import dInteractions from "@/directives/interactions";

export default {
  name: "PageVDrag",
  mounted() {},
  data() {
    return {
      count: 1,
      showImg: false,
      imgSrc: "https://shonesinglone.github.io/public/sample/0.jpg",
      imgs: [
        "https://shonesinglone.github.io/public/sample/0.jpg",
        "https://shonesinglone.github.io/public/sample/1.jpg",
        "https://shonesinglone.github.io/public/sample/2.jpg",
        "https://shonesinglone.github.io/public/sample/3.jpg",
        "https://shonesinglone.github.io/public/sample/4.jpg"
      ]
    };
  },
  directives: {
    ia: dInteractions
  },
  methods: {
    changeImg() {
      this.changeImg.count = this.changeImg.count || 0;
      this.changeImg.count = this.changeImg.count % 4;
      this.imgSrc = this.imgs[this.changeImg.count++];
    }
  }
};
</script>
<style lang="scss">
.container {
  .demo-img {
    border-radius: 4px;
    width: 100px;
    box-shadow: #555 0px 5px 20px 2px;
  }
  div {
    margin: 10px;
  }
}
</style>