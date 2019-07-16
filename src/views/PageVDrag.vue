<template>
  <div class="page-v-drag container">
    <div>
      <button @click="showImg=!showImg">toggle</button>
      <button @click="changeImg">changeImg</button>
    </div>
    <div>
      <img v-if="showImg" class="demo-img" :src="imgSrc" alt="demo" srcset v-drag />
    </div>
  </div>
</template>
<script>
export default {
  name: "PageVDrag",
  mounted() {},
  data() {
    return {
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
    drag: {
      // 当被绑定的元素插入到 DOM 中时……
      bind: function(el, binding) {
        console.log("bind", arguments, binding);
      },
      inserted: function() {
        console.log("inserted", arguments);
      },
      update: function() {
        console.log("update", arguments);
      }
    }
  },
  methods: {
    changeImg() {
      this.changeImg.count = this.changeImg.count || 0;
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
}
</style>