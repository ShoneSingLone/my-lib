<template>
  <div class="page-v-popper container">
    <div class="rel" id="example10reference1"></div>
    <div>
      <select id="example10positionSelector" v-model="placement">
        <option value="top">Top</option>
        <option value="right">Right</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
      </select>
      
      <img
        ref="reference"
        class="demo-img"
        src="https://shonesinglone.github.io/public/sample/0.jpg"
        alt="demo"
        v-popper="{html:componentTitle,placement}"
      />
    </div>
  </div>
</template>
<script>
import popper from "@/directives/popper";
import Vue from "vue";

let componentTitle = new Vue({
  data() {
    return {
      msg: "template"
    };
  },
  template: `<h1>{{msg}}</h1>`
});
window.componentTitle = componentTitle;

export default {
  name: "PageVPopper",
  mounted() {},
  data() {
    return {
      componentTitle,
      placement: "top",
      currentPopper: {}
    };
  },
  directives: {
    popper
  },
  watch: {},
  methods: {}
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