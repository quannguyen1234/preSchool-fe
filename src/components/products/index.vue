<template>
  <div>
    <div class="products flex flex-wrap gap-5">
    <div
      class="product w-[185px] p-2 bg-gray-200 hover:shadow-xl"
      v-for="(item, index) in products"
      :key="index"
    >
      <div class="container-product-image" @click="directProdcutDetail(item)">
        <img
          class="h-full w-full"
          :src="`https://cdn-icons-png.flaticon.com/512/2771/2771401.png`"
          alt=""
        />
      </div>
      <p class="uppercase text-center py-1">{{ item.name }}</p>
      <!-- <div class="flex justify-evenly items-center w-full py-2">
        <span>13.000đ</span>
        <span
          class="rounded-full border-[black] inline-block"
          @click="addToCart()"
        >
          <cart></cart>
        </span>
      </div> -->
    </div>
  </div>
  <div style="display: flex; justify-content: center;" v-if="products.length == 0"> Không có dữ liệu</div>
  </div>
</template>

<script>
// import Cart from "../icons/cart.vue";
import { getListCooking } from "@/apis/foods";

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.handleGetListCooking();
  },
  methods: {
    directProdcutDetail(item) {
      console.log("item: ", item);
      this.$router.push({ name: "DetailProduct", params: { id: item.recipe_id } });
    },
    addToCart() {
      this.$router.push({ name: "ComingSoon" });
    },
    async handleGetListCooking() {
      let data = await getListCooking();
      if(data?.data?.recipes) {
        this.products = data?.data?.recipes;
      }
    }
  },
  components: {
    // Cart,
  },
};
</script>

<style></style>
