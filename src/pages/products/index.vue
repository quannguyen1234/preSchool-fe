<template>
  <div class="products">
    <div class="pt-14">
      <navigation></navigation>
    </div>
    <carousel></carousel>
    <div class="xl:max-w-5xl mx-auto relative my-10 flex gap-1">
      <div class="w-1/5">
        <div class="list-categories"><categories></categories></div>
      </div>
      <div class="w-4/5">
        <div class="navbar"><navbar></navbar></div>
        <div class="ml-4 mt-6">
          <Products></Products>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "../../components/navigation/index.vue";
import carousel from "../../components/carousel/index.vue";
import categories from "./components/categories.vue";
import navbar from "./components/navbar.vue";
import Products from "../../components/products/index.vue";
export default {
  components: {
    carousel,
    navigation,
    categories,
    navbar,
    Products,
  },
};
</script>

<style></style>
