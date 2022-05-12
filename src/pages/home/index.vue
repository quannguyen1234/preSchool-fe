<template>
  <div class="home bg-[#F5F5F5]">
    <div class="pt-14">
      <navigation></navigation>
      <carousel></carousel>
      <div
        class="content xl:max-w-5xl mx-auto text-[#ED4D27] uppercase px-2 pb-2 pt-5 bg-white"
      >
        <h3 class="text-2xl font-bold py-2">Danh mục sản phẩm</h3>
        <categories></categories>
      </div>
      <div
        class="content xl:max-w-5xl mx-auto text-[#ED4D27] uppercase px-2 bg-white pb-5"
      >
        <h3 class="pt-8 text-2xl font-bold py-2">Tìm kiếm hàng đầu</h3>
        <top-searching></top-searching>
      </div>
      <div
        class="content py-5 xl:max-w-5xl mx-auto text-[#ED4D27] uppercase px-2 bg-white"
      >
        <img :src="'./assets/images/slogan.jpg'" alt="" />
      </div>
      <div
        class="content py-5 xl:max-w-5xl mx-auto text-[#ED4D27] uppercase px-2 bg-white"
      >
        <h3 class="pt-8 text-2xl font-bold py-2">Gợi ý</h3>
        <Products></Products>
      </div>
      <div
        class="content py-5 xl:max-w-5xl mx-auto px-2 bg-white flex justify-center"
      >
        <vs-button
          class="uppercase w-40 h-13 font-semibold text-xl"
          color="#ED4D27"
          upload
          :active="true"
        >
          Xem thêm
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../../components/navigation/index.vue";
import Carousel from "../../components/carousel/index.vue";
import Categories from "./components/categories.vue";
import Products from "../../components/products/index.vue";
import topSearching from "../../components/mutil-carousel/index.vue";
export default {
  components: {
    Navigation,
    Carousel,
    Categories,
    Products,
    topSearching,
  },
};
</script>

<style></style>
