<template>
  <div class="router-link-wrapper">
    <ul class="router-ul">
      <li v-for="(route, index) in routeList" :key="index">
        <router-link :to="route.path">{{route.label||route.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { routeList } from "@/router.js";
export default {
  name: "home",
  mounted() {},
  data() {
    return { routeList };
  }
};
</script>

<style lang="scss">
.router-link-wrapper {
  .router-ul {
    li {
      text-align: left;
    }
  }
}
</style>

