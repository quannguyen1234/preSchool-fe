<template>
  <div class="categories">
    <div class="pt-14">
      <navigation></navigation>
    </div>
    <!-- <carousel></carousel> -->
    <div class="xl:max-w-5xl mx-auto relative my-10 flex gap-1">
      <!-- <div class="w-1/5">
        <div class="list-categories"><categories></categories></div>
      </div> -->
      <div class="w-4/5">
        <!-- <div class="breadcrumbs">
          <breadcrumbs :breadcrumbs="breadcrumbs"></breadcrumbs>
        </div> -->
        <div class="ml-4 mt-6">
          <information-product :detailProduct="detailProduct"></information-product>
          <ul>
            <li class="description my-3 text-justify text-[#EE4D2D]" v-for="(data, index) in detailProduct.instructions" v-bind:key="index" style="line-height: 30px;">Bước: {{ index + 1 }}: {{ data }}</li>
          </ul>
        </div>
        <commentCooking/>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "../../components/navigation/index.vue";
// import carousel from "../../components/carousel/index.vue";
// import breadcrumbs from "../../components/breadcrumb/index.vue";
// import categories from "./components/categories.vue";
import informationProduct from "./components/information-product.vue";
import commentCooking from "../../components/comments";
import { getDetailFood } from "@/apis/foods";
export default {
  components: {
    // carousel,
    navigation,
    // categories,
    // breadcrumbs,
    informationProduct,
    commentCooking,
  },
  data: () => ({ breadcrumbs: ["Trang chủ", "Lương thực", "Cá"], detailProduct: {} }),
  created() {
    this.getDetailProducts(this.$route.params.id);
  },
  methods: {
    async getDetailProducts(id) {
      try {
        let data = await getDetailFood(id);
        this.detailProduct = data?.data;
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

<style></style>
