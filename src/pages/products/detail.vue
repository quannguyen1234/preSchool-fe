<template>
  <div class="categories">
    <div class="pt-14">
      <navigation></navigation>
    </div>
    <carousel></carousel>
    <div class="xl:max-w-5xl mx-auto relative my-10 flex gap-1">
      <div class="w-1/5">
        <div class="list-categories"><categories></categories></div>
      </div>
      <div class="w-4/5">
        <div class="breadcrumbs">
          <breadcrumbs :breadcrumbs="breadcrumbs"></breadcrumbs>
        </div>
        <div class="ml-4 mt-6">
          <information-product></information-product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "../../components/navigation/index.vue";
import carousel from "../../components/carousel/index.vue";
import breadcrumbs from "../../components/breadcrumb/index.vue";
import categories from "./components/categories.vue";
import informationProduct from "./components/information-product.vue";
export default {
  components: {
    carousel,
    navigation,
    categories,
    breadcrumbs,
    informationProduct,
  },
  data: () => ({ breadcrumbs: ["Trang chủ", "Lương thực", "Cá"] }),
};
</script>

<style></style>
