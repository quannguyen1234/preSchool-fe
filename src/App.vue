<template>
  <div id="app">
    <component :is="$route.meta.layout ? 'LayoutDefault' : 'div'">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import LayoutDefault from "./layout/default.vue";
export default {
  name: "App",
  components: {
    LayoutDefault,
  },
  created() {
    console.log(this.$route.meta.layout);
  },
};
</script>

<style></style>
