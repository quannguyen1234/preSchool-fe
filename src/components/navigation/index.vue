<template>
  <div class="h-14 bg-[#ED4D27]">
    <ul
      class="xl:max-w-5xl mx-auto flex justify-between items-center h-full text-white"
    >
      <li
        class="cursor-pointer hover:bg-[#32CB00] h-full leading-[56px] px-5 transition-colors"
      >
        <router-link :to="{ name: 'Home' }">Trang chủ</router-link>
      </li>
      <li
        class="cursor-pointer hover:bg-[#32CB00] h-full leading-[56px] px-5 transition-colors"
      >
        <router-link :to="{ name: 'Home' }">Danh mục sản phẩm</router-link>
      </li>
      <li
        class="cursor-pointer hover:bg-[#32CB00] h-full leading-[56px] px-5 transition-colors"
      >
        <router-link :to="{ name: 'Home' }">Hợp tác</router-link>
      </li>
      <li
        class="cursor-pointer hover:bg-[#32CB00] h-full leading-[56px] px-5 transition-colors"
      >
        <router-link :to="{ name: 'Home' }">Tin tức</router-link>
      </li>
      <li
        class="cursor-pointer hover:bg-[#32CB00] h-full leading-[56px] px-5 transition-colors"
      >
        <router-link :to="{ name: 'Home' }">Liên hệ</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
