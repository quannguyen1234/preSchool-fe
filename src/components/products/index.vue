<template>
  <div class="products flex flex-wrap gap-5">
    <div
      class="product w-[185px] p-2 bg-gray-200 hover:shadow-xl"
      v-for="(item, index) in products"
      :key="index"
    >
      <div class="container-product-image" @click="directProdcutDetail()">
        <img
          class="h-full w-full"
          :src="`./assets/images/products/${item}`"
          alt=""
        />
      </div>
      <p class="uppercase text-center py-1">Cải bẹ xanh (1kg)</p>
      <div class="flex justify-evenly items-center w-full py-2">
        <span>13.000đ</span>
        <span
          class="rounded-full border-[black] inline-block"
          @click="addToCart()"
        >
          <cart></cart>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from "../icons/cart.vue";
export default {
  data() {
    return {
      products: [
        "banh-choco-pie.jpg",
        "bot-ngot-ajinomoto.jpg",
        "cai-be-xanh.jpg",
        "ca-rot.jpg",
        "ca-thu.jpg",
        "cu-cai-trang.jpg",
        "gao-tam-thom.jpg",
        "gao-thai-lan.jpg",
        "khau-trang.jpg",
        "khoai-lang.jpg",
        "nuoc-mam-nam-ngu.jpg",
        "nuoc-rua-tay.jpg",
        "thit-ga-nguyen-con.jpg",
        "thit-heo-ba-chi.jpg",
        "trung-cut.jpg",
        "trung-ga.jpg",
      ],
    };
  },
  methods: {
    directProdcutDetail() {
      this.$router.push({ name: "DetailProduct" });
    },
    addToCart() {
      console.log("xxxxxxxxxxxxssssssssssssss");
      this.$router.push({ name: "ComingSoon" });
    },
  },
  components: {
    Cart,
  },
};
</script>

<style></style>
