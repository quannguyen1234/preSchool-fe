<template>
  <div>
    <div class="information-product flex">
      <div class="w-full align-center flex justify-center">
        <img :src="'https://cdn-icons-png.flaticon.com/512/2771/2771401.png'" alt="" />
      </div>
      <!-- <div class="w-2/3">
        <p class="text-[#EE4D2D] text-2xl font-bold mb-4">Gạo ST21 A An</p>
        <div class="rates flex items-center w-full gap-4 my-3">
          <div><Rate></Rate></div>
          <div><span class="text-lg border-l-2 pl-4 h-5">3 đánh giá</span></div>
          <div><span class="text-lg border-l-2 pl-4 h-5">3 đã bán</span></div>
        </div>
        <p class="text-lg text-gray-600 my-2">Hạn sử dụng 6 tháng</p>
        <span class="font-bold text-2xl text-[#EE4D2D]">10000đ</span>
        <div class="flex items-center h-10 gap-2">
          <p>Số lượng:</p>
          <div class="flex items-center h-10 gap-2">
            <button @click="overMin()">
              <Minus></Minus>
            </button>

            <span class="w-6 text-center">{{ countProduct }}</span>
            <button @click="overMax()">
              <Add></Add>
            </button>
            <span>{{ maxProduct }} Sản phẩm có sẵn</span>
          </div>
        </div>
        <div class="flex gap-2 my-2">
          <vs-button warn gradient> <span>Thêm vào giỏ hàng</span> </vs-button>
          <vs-button warn gradient> <span>Mua ngay</span> </vs-button>
        </div>
      </div> -->
      <Alert @closeAlert="resetNotification()" :content="content"> </Alert>
    </div>
    <div class="my-5">
      <!-- <h3 class="text-[#EE4D2D] py-2 font-bold text-2xl">Sản phẩm liên quan</h3> -->
      <!-- <MutilCarousel :showItem="4"></MutilCarousel> -->
    </div>
    <div class="my-5">
      <h3 class="text-[#EE4D2D] py-2 font-bold text-2xl">Thông tin công thức nấu ăn</h3>
      <p class="description my-3 text-justify text-[#EE4D2D]"> {{ detailProduct.name }}</p>
      <p class="description my-3 text-justify text-[#EE4D2D]">
        {{ detailProduct.description }}
      </p>
      <p class="text-[#EE4D2D] py-2 font-bold text-md">Các thực phẩm, gia vị cần có:</p>
      <div>
        <div
          class="flex gap-5 text-[#EE4D2D]"
          v-for="({ name, quantity }, index) in detailProduct.ingredients"
          :key="index"
        >
          <div class="characteristic font-semibold text-md min-w-[100px]">
            {{ name }}
          </div>
          <div class="content">{{ quantity }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import MutilCarousel from "../../../components/mutil-carousel/index.vue";
import Alert from "../../../components/alert/index.vue";
// import Rate from "../../../components/rate/index.vue";
// import Add from "../../../components/icons/add.vue";
// import Minus from "../../../components/icons/minus.vue";
export default {
  props: {
    detailProduct: {}
  },
  created() {
    console.log("this.detailProduct: ", this.detailProduct);
  },
  data: () => ({
    countProduct: 0,
    maxProduct: 20,
    descriptions: [
      {
        characteristic: "Đặc tính",
        content: "Dẻo nhiều, cơm mềm",
      },
      {
        characteristic: "Độ nở",
        content: "Nở ít",
      },
      {
        characteristic: "Giống lúa",
        content: "Giống lúa ST21",
      },
      {
        characteristic: "Canh tác",
        content:
          "Theo quy trình chăm sóc khoa học, không chất kích thích tăng trưởng",
      },
      {
        characteristic: "Cách nấu",
        content: "1 chén gạo cho 1 - 1,2 chén nước (tăng giảm tuỳ khẩu vị)",
      },
      {
        characteristic: "Bảo quản",
        content: "Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp",
      },
      {
        characteristic: "Trọng lượng",
        content: "5kg",
      },
      {
        characteristic: "Thương hiệu",
        content: "A An",
      },
      {
        characteristic: "Sản xuất tại",
        content: "Việt Nam",
      },
    ],
    content: {
      active: false,
      notification: "",
    },
  }),
  components: {
    // Rate,
    // Add,
    // Minus,
    Alert,
    // MutilCarousel,
  },
  methods: {
    overMax() {
      if (this.countProduct < this.maxProduct) {
        this.countProduct++;
        this.content.active = false;
      } else {
        this.content.notification = "quá nhiều sản phẩm";
        this.content.active = true;
      }
    },
    overMin() {
      if (this.countProduct) {
        this.countProduct--;
        this.content.active = false;
      } else {
        this.content.notification = "nhỏ nhất 0 sản phẩm";
        this.content.active = true;
      }
    },
    resetNotification() {
      this.content.active = false;
      this.content.notification = "";
    },
  },
};
</script>

<style></style>
