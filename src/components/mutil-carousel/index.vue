<template>
  <div class="top-searching">
    <vue-slick-carousel v-bind="settings">
      <div
        v-for="(item, index) in products"
        :key="index"
        class="h-60 p-1 hover:shadow-xl"
      >
        <div class="bg-[#F5F5F5] w-full h-full">
          <img
            class="w-[194px] h-[194px]"
            :src="`./assets/images/products/${item}`"
            alt=""
          />
          <span
            class="p-2 w-[194px] block text-ellipsis overflow-hidden whitespace-nowrap"
            >{{ item.split("-").join(" ") }}</span
          >
        </div>
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        auto: true,
        autoSpeed: 1000,
        slidesToShow: this.showItem || 5,
        slidesToScroll: 2,
        touchThreshold: 2,
      },
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
  props: {
    showItem: null,
  },
  components: {
    VueSlickCarousel,
  },
};
</script>

<style></style>
