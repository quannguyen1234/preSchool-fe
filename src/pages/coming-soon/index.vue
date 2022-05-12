<template>
  <main>
    <div class="flex flex-col items-center justify-center h-[500px] pt-14 mx-5">
      <img :src="'./assets/images/icon.png'" alt="" />
      <h2 class="text-5xl font-bold mb-4 text-center text-[#ED4D27]">
        Sắp ra mắt
      </h2>
      <p class="text-gray-500 text-base mb-6">
        Ngày dự kiến ra mắt lúc : 30/05/2022
      </p>
      <router-link
        class="flex items-center text-[#ED4D27] font-medium text-base"
        :to="{ name: 'Home' }"
      >
        <arrow></arrow><span>Trở về trang chủ</span></router-link
      >
    </div>
  </main>
</template>

<script>
import arrow from "../../components/icons/arrow.vue";
export default {
  components: {
    arrow,
  },
};
</script>

<style></style>
