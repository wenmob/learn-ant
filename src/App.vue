<template>
  <div id="app">
    <changeBaseUrl />
    <router-view></router-view>
  </div>
</template>

<script>
import changeBaseUrl from "@/components/changeBaseUrl";
export default {
  name: "App",
  components: {
    changeBaseUrl,
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
