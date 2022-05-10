<template>
  <div class="home bg-[#F5F5F5]">
    <Header></Header>
    <div class="pt-14">
      <navigation></navigation>
      <carousel></carousel>
      <div
        class="content xl:max-w-5xl mx-auto text-[#ED4D27] uppercase px-2 bg-white"
      >
        <h3 class="pt-[300px] text-2xl font-bold py-2">Danh mục sản phẩm</h3>
        <categories></categories>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header/user.vue";
import Navigation from "../../components/navigation/index.vue";
import Carousel from "./components/carousel.vue";
import Categories from "./components/categories.vue";
export default {
  components: {
    Header,
    Navigation,
    Carousel,
    Categories,
  },
};
</script>

<style></style>
