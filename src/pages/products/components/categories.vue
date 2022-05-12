<template>
  <div>
    <div class="flex items-center">
      <div class="icon-menu">
        <Menu></Menu>
      </div>
      <h5 class="pl-4 text-[#EE4D2D] uppercase text-lg font-semibold">
        tất cả danh mục
      </h5>
    </div>
    <div class="list-categories text-[#EE4D2D]">
      <ul class="mt-2">
        <li>
          <router-link
            class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]"
            href=""
            >Lương thực</router-link
          >
        </li>
        <li>
          <router-link
            class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]"
            href=""
            >Thực phẩm đóng gói</router-link
          >
        </li>
        <li>
          <router-link
            class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]"
            href=""
            >Thực phẩm tươi sống</router-link
          >
        </li>
        <li>
          <router-link
            class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]"
            href=""
            >Bánh kẹo</router-link
          >
        </li>
        <li>
          <router-link
            class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]"
            href=""
            >Gia vị</router-link
          >
        </li>
        <li>
          <router-link
            class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]"
            href=""
            >Nhu yếu phẩm khác</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Menu from "../../../components/icons/menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>
#Color
