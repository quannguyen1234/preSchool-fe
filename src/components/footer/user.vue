<template>
  <div class="footer h-full bg-[#ED4D27]">
    <div class="wrapper xl:max-w-5xl mx-auto flex justify-evenly gap-10">
      <div class="container w-1/3">
        <div class="about-us">
          <h3
            class="uppercase underline text-white font-bold text-lg pt-4 pb-2"
          >
            Về chúng tôi
          </h3>
          <p class="text-white pl-2 text-justify">
            Đây là trang web phi lợi nhuận nhằm hỗ trợ bà con và các cán bộ
            trong công tác “đi chợ hộ.
          </p>
        </div>
        <div class="categories-of-product">
          <h3
            class="uppercase underline text-white font-bold text-lg pt-4 pb-2"
          >
            Danh sách sản phẩm
          </h3>
          <ul>
            <li>
              <router-link
                class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
                :to="{ name: 'ComingSoon' }"
                >Lương thực</router-link
              >
            </li>
            <li>
              <router-link
                class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
                :to="{ name: 'ComingSoon' }"
                >Thực phẩm tươi sống</router-link
              >
            </li>
            <li>
              <router-link
                class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
                :to="{ name: 'ComingSoon' }"
                >Thực phẩm đóng gói</router-link
              >
            </li>
            <li>
              <router-link
                class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
                :to="{ name: 'ComingSoon' }"
                >Nhu yếu phẩm khác</router-link
              >
            </li>
            <li>
              <router-link
                class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
                :to="{ name: 'ComingSoon' }"
                >Bánh kẹo</router-link
              >
            </li>
            <li>
              <router-link
                class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md mb-4"
                :to="{ name: 'ComingSoon' }"
                >Gia vị</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="policies w-1/3">
        <h3 class="uppercase underline text-white font-bold text-lg pt-4 pb-2">
          Các chính sách
        </h3>
        <ul>
          <li>
            <router-link
              class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
              :to="{ name: 'ComingSoon' }"
              >Chính sách bảo mật</router-link
            >
          </li>
          <li>
            <router-link
              class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
              :to="{ name: 'ComingSoon' }"
              >Chính sách chăm sóc khách hàng</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'ComingSoon' }"
              class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
              >Chính sách giao hàng</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'ComingSoon' }"
              class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
              >Vận chuyển</router-link
            >
          </li>
          <li>
            <router-link
              class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
              :to="{ name: 'ComingSoon' }"
              >Chính sách bảo hành</router-link
            >
          </li>
          <li>
            <router-link
              class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
              :to="{ name: 'ComingSoon' }"
              >Thanh toán</router-link
            >
          </li>
        </ul>
      </div>
      <div class="container w-1/3">
        <div class="follow-us">
          <h3
            class="uppercase underline text-white font-bold text-lg pt-4 pb-2"
          >
            Theo dõi chúng tôi trên:
          </h3>
          <ul class="flex items-center gap-2 my-2 ml-2">
            <li
              class="w-9 h-9 flex justify-center items-center"
              v-for="(item, index) in icons.map(handlePath)"
              :key="index"
            >
              <router-link :to="{ name: 'ComingSoon' }"
                ><img class="w-8 h-8" :src="item" alt=""
              /></router-link>
            </li>
          </ul>
        </div>
        <div class="about-helpee">
          <h3 class="uppercase underline text-white font-bold text-lg py-2">
            Về Helpee
          </h3>
          <ul>
            <li>
              <router-link
                class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
                :to="{ name: 'ComingSoon' }"
                >Điều khoản sử dụng</router-link
              >
            </li>
            <li>
              <router-link
                class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
                :to="{ name: 'ComingSoon' }"
                >Trung tâm trợ giúp</router-link
              >
            </li>
            <li>
              <router-link
                class="p-2 block text-white hover:bg-[green] text-md transition-colors rounded-md"
                :to="{ name: 'ComingSoon' }"
                >Helpee blog</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Copyright from "./copyright.vue";
export default {
  data() {
    return {
      icons: [
        "facebook.png",
        "instagram.png",
        "tiktok.png",
        "twitter.png",
        "youtube.png",
      ],
    };
  },
  methods: {
    handlePath(data) {
      return `./assets/images/icons/${data}`;
    },
  },
  components: {
    Copyright,
  },
};
</script>

<style></style>
