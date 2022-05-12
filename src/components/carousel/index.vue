<template>
  <div class="carousel">
    <VueSlickCarousel
      class="h-full"
      :arrows="false"
      :autoplay="true"
      :autoplaySpeed="2345"
      :dots="true"
    >
      <div
        class="carousel slide-start bg-gray-500 h-[600px]"
        :style="{
          'background-image':
            'url(' + './assets/images/bg-slider-start.jpg ' + ')',
        }"
      ></div>
      <div
        class="carousel slide-mid bg-gray-500 h-[600px]"
        :style="{
          'background-image':
            'url(' + './assets/images/bg-slider-mid.jpg' + ')',
        }"
      ></div>
      <div
        class="carousel slide-end bg-gray-500 h-[600px]"
        :style="{
          'background-image':
            'url(' + './assets/images/bg-slider-end.jpg' + ')',
        }"
      ></div>
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
.carousel {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
