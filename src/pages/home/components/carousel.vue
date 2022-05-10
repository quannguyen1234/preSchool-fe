<template>
  <div class="slider h-80">
    <ssr-carousel class="h-full">
      <div class="slide slide-start bg-gray-500 h-[600px]"></div>
      <div class="slide slide-mid bg-gray-500 h-[600px]"></div>
      <div class="slide slide-end bg-gray-500 h-[600px]"></div>
    </ssr-carousel>
  </div>
</template>

<script>
export default {};
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
.slide {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
