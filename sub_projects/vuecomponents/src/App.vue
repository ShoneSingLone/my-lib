<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    msg="Welcome to Your Vue.js + TypeScript App"
    other="other"
    :sub="{ msg: 'sub' }"
  >
    <template #default="{ args }">
      <h1>Main slot {{ args }}</h1>
    </template>
    <template #sub="{ args, count }">
      <h1>Sub {{ args }} {{ count }}</h1>
    </template>
  </HelloWorld>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";

export default defineComponent({
  components: {
    HelloWorld
  }
});
</script>

<style></style>
