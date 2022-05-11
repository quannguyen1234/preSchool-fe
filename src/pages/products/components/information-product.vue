<template>
  <div>
    <div class="information-product flex">
      <div class="w-1/3">
        <img :src="'./assets/images/products/detail/gao-thom.jpg'" alt="" />
      </div>
      <div class="w-2/3">
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
      </div>
      <Alert @closeAlert="resetNotification()" :content="content"> </Alert>
    </div>
    <div class="my-5">
      <h3 class="text-[#EE4D2D] py-2 font-bold text-2xl">Sản phẩm liên quan</h3>
      <MutilCarousel :showItem="4"></MutilCarousel>
    </div>
  </div>
</template>

<script>
import MutilCarousel from "../../../components/mutil-carousel/index.vue";
import Alert from "../../../components/alert/index.vue";
import Rate from "../../../components/rate/index.vue";
import Add from "../../../components/icons/add.vue";
import Minus from "../../../components/icons/minus.vue";
export default {
  data: () => ({
    countProduct: 0,
    maxProduct: 20,
    content: {
      active: false,
      notification: "",
    },
  }),
  components: {
    Rate,
    Add,
    Minus,
    Alert,
    MutilCarousel,
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
