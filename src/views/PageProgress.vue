<template>
  <div>
    <c-progress></c-progress>
  </div>
</template>

<script>
import progress from "@/components/Progress";
export default {
  name: "PageProgress",
  mounted() {
    // (() => import("@/components/ImgViewer/instance.js"))();
  },
  data() {
    return {};
  },
  methods: {},
  components: { "c-progress": progress }
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