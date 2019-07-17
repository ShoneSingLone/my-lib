<template>
  <div class="page-img-viewer container">
    <h1>
      原项目：
      <a target="_blank" href="https://github.com/XiongAmao/vue-easy-lightbox">vue-easy-lightbox</a>
    </h1>
    <h2>修改部分：</h2>
    <ol>
      <li>全局单例，命令式调用</li>
      <li>wheel滑动变大图片</li>
      <li>旋转及图标</li>
    </ol>
    <a
      target="_blank"
      href="https://github.com/ShoneSingLone/my-lib/blob/master/src/views/PageImgViewer.vue"
    >
      <h1>PageImgViewer.vue</h1>
    </a>
    <pre v-html="code"></pre>
    <div class="gallery">
      <div v-for="(src, index) in imgs" :key="index" class="pic" @click="() => show(index)">
        <img :src="src" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageImgViewer",
  mounted() {
    (() => import("@/components/ImgViewer/instance.js"))();
  },
  data() {
    return {
      code: `
  mounted() 
{    //依赖全局的Vue 即 window.Vue
    (() => import("@/components/ImgViewer/instance.js"))();
  },

  ...

  methods: {
    show(index) {
      this.index = index;
      window.VueServer.imgViewer
        .setImgs(this.imgs)
        .setIndex(index)
        .show();
    }
  }
`,
      imgs: [
        "https://shonesinglone.github.io/public/sample/0.jpg",
        "https://shonesinglone.github.io/public/sample/1.jpg",
        "https://shonesinglone.github.io/public/sample/2.jpg",
        "https://shonesinglone.github.io/public/sample/3.jpg",
        "https://shonesinglone.github.io/public/sample/4.jpg"
      ],
      visible: false,
      index: 0 // default
    };
  },
  methods: {
    show(index) {
      this.index = index;
      window.VueServer.imgViewer
        .setImgs(this.imgs)
        .setIndex(index)
        .show();
    }
  }
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