<template>
  <Render :render="render"></Render>
</template>
<script>
import AnchoredHeading from "@/components/Test/AnchoredHeading";
import Render from "@/components/Test/Render";
import Vue from "vue";
Vue.component("Ah", AnchoredHeading);

const STATE = (window.APP_STATE = Vue.observable({
  count: 0,
  hCount: [
    { level: 1, value: "" },
    { level: 2, value: "" },
    { level: 3, value: "" },
    { level: 4, value: "" }
  ],
  color: "white"
}));

export default {
  name: "about",
  data() {
    return {
      render: h => {
        let _this = this;
        let getAHProperty = i => ({
          model: {
            prop: "value",
            event: "change"
          },
          props: { level: i.level, value: i.value },
          style: { color: STATE.color },
          on: {
            input: function(value) {
              i.value = value;
              console.log("el-input input", this, value);
            },
            chage: function(value) {
              i.value = value;
              console.log("el-input change", this, value);
            }
          }
        });
        let divBtn = h(
          "el-button",
          {
            model: {
              prop: "value",
              event: "change"
            },
            on: {
              click: function(event) {
                console.log("el-button click", this, event);
              },
              input: function(value) {
                console.log("el-button input", this, value);
              }
            }
          },
          "divBtn"
        );
        let divAhArray = STATE.hCount.map(i =>
          h("el-input", getAHProperty(i), "Anchored Heading" + i.value)
        );
        divAhArray.unshift(divBtn);
        return h(
          "div", { style: { color: "green", background: STATE.color } },
          divAhArray
        );
      }
    };
  },
  components: { Render }
};
</script>
<style lang="scss">
</style>