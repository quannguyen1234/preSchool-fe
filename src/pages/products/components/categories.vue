<template>
  <div>
    <div class="flex items-center">
      <div class="icon-menu">
        <Menu></Menu>
      </div>
      <h5 class="pl-4 text-[#EE4D2D] uppercase text-lg font-semibold">tất cả danh mục</h5>
    </div>
    <div class="list-categories text-[#EE4D2D]">
      <ul class="mt-2">
        <li>
          <a class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]" href=""
            >Lương thực</a
          >
        </li>
        <li>
          <a class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]" href=""
            >Thực phẩm đóng gói</a
          >
        </li>
        <li>
          <a class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]" href=""
            >Thực phẩm tươi sống</a
          >
        </li>
        <li>
          <a class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]" href=""
            >Bánh kẹo</a
          >
        </li>
        <li>
          <a class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]" href=""
            >Gia vị</a
          >
        </li>
        <li>
          <a class="mt-1 py-2 pl-2 rounded-md block hover:bg-[#32CB00]" href=""
            >Nhu yếu phẩm khác</a
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
