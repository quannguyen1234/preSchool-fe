<template>
  <div class="carousel">
    <VueSlickCarousel
      class="h-full"
      :arrows="false"
      :autoplay="true"
      :autoplaySpeed="2345"
      :dots="true"
    >
      <div class="carousel slide-start bg-gray-500 h-[600px]"></div>
      <div class="carousel slide-mid bg-gray-500 h-[600px]"></div>
      <div class="carousel slide-end bg-gray-500 h-[600px]"></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
};
</script>

<style scoped>
.slide-start {
  background-image: url("./src/assets/images/bg-slider-start.jpg");
}
.slide-mid {
  background-image: url("./src/assets/images/bg-slider-mid.jpg");
}
.slide-end {
  background-image: url("./src/assets/images/bg-slider-end.jpg");
}
.carousel {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
