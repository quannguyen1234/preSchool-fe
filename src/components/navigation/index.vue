<template>
  <div class="h-14 bg-[#ED4D27]">
    <ul
      class="xl:max-w-5xl mx-auto flex justify-between items-center h-full text-white uppercase font-medium"
    >
      <li
        class="cursor-pointer hover:bg-[#32CB00] h-full leading-[56px] transition-colors"
      >
        <router-link class="block px-5" :to="{ name: 'Home' }"
          >Trang chủ</router-link
        >
      </li>
      <li
        class="cursor-pointer hover:bg-[#32CB00] h-full leading-[56px] transition-colors"
      >
        <router-link class="block px-5" :to="{ name: 'ListProduct' }"
          >Danh sách công thức nấu ăn</router-link
        >
      </li>
      <li
        class="cursor-pointer hover:bg-[#32CB00] h-full leading-[56px] transition-colors"
      >
        <router-link class="block px-5" :to="{ name: 'ComingSoon' }"
          >Hợp tác</router-link
        >
      </li>
      <li
        class="cursor-pointer hover:bg-[#32CB00] h-full leading-[56px] transition-colors"
      >
        <router-link class="block px-5" :to="{ name: 'ComingSoon' }"
          >Tin tức</router-link
        >
      </li>
      <li
        class="cursor-pointer hover:bg-[#32CB00] h-full leading-[56px] transition-colors"
      >
        <router-link class="block px-5" :to="{ name: 'ComingSoon' }"
          >Liên hệ</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
