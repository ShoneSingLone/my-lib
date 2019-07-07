<template>
  <div class="loop-roll">
    <div class="cc rowup">
      <div class="item" v-for="(item, index) in items" :key="index">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoopRoll",
  props: ["items"],
  methods: {},
  mounted() {
    this.$slots = this.defaultSlot;
  }
};
</script>
<style lang="scss">
@keyframes rowup {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -50%, 0);
  }
}
.loop-roll {
  width: 300px;
  border: 1px solid #999;
  margin: 20px auto;
  position: relative;
  height: 200px;
  overflow: hidden;
  .rowup {
    animation: 10s rowup linear infinite normal;
    position: relative;
  }
}
</style>