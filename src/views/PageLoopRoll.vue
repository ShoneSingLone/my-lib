<template>
  <div class="home">
    <LoopRoll :items="items" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoopRoll from "@/components/LoopRoll/LoopRoll.vue";
export default {
  name: "home",
  mounted() {},
  data() {
    return {
      items: [
        "1- 121233fffffr国家认可更健康进口价格困扰",
        "2- 3123233",
        "3- 个人口结构俄跨入国际科技馆客人感觉",
        "4- ggrgerg",
        "5- fvdgdv",
        "6- 德国南部巴士与卡车相撞起火 31人受伤11人死亡朴槿惠庭审时突然昏迷 支持者：她死了法官要负责！"
      ]
    };
  },
  components: {
    LoopRoll
  }
};
</script>
