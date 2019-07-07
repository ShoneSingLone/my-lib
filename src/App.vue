<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{tips}}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "APP",
  data() {
    return {
      tips: "RouteList"
    };
  },
  watch: {
    "$route.name": function(pageName) {
      this.tips = pageName !== "home" ? "Back overview" : "RouteList";
    }
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: left;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
