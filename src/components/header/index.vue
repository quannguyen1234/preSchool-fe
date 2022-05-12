<template>
  <div
    class="header mx-auto xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-lg flex justify-between items-center h-16"
  >
    <div class="logo w-32 h-12">
      <img
        class="w-full h-full"
        :src="require('../../assets/images/icon.png')"
        alt=""
        srcset=""
      />
    </div>
    <div class="help-me">
      <router-link :to="{ name: 'ComingSoon' }" class="text-[#EE4D2D]"
        >Cần trợ giúp?</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
