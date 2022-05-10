<template>
  <div class="update-information">
    <Header></Header>
    <div class="title bg-[#ED4D27]">
      <p
        class="xl:max-w-5xl mx-auto leading-[48px] uppercase h-12 text-white font-semibold"
      >
        cập nhật thông tin
      </p>
    </div>
    <div class="content xl:max-w-5xl mx-auto pt-5">
      <div class="notifincation pb-10">
        <p class="text-[#ED4D27]">
          <span class="font-semibold text-base"
            >Chào mừng bạn đến với Helpee, đây là lần đầu bạn đăng nhập.
          </span>
          Để đảm bảo sự an toàn và tính bảo mật cho tài khoản, bạn cần đổi mật
          khẩu mặc định (bên trái). Ngoài ra, dịch vụ cũng cần thiết cung cấp
          những thông tin cần thiết bên dưới (bên phải).
        </p>
      </div>
      <div class="container-form flex justify-between">
        <div
          class="change-pass border border-[#ED4D27] rounded-xl p-5 w-2/5 pt-0"
        >
          <h3
            class="text-center font-semibold text-2xl h-10 mx-[-21px] rounded-t-xl text-white bg-[#ED4D27]"
          >
            Đổi mật khẩu
          </h3>
          <div>
            <label class="pt-4 pb-2 block font-medium text-lg" for=""
              >Nhập mật khẩu cũ <span class="text-red-500">(*)</span>:</label
            >
            <div class="center content-inputs">
              <vs-input
                type="password"
                :progress="getProgress"
                :visiblePassword="hasVisiblePassword"
                icon-after
                @click-icon="hasVisiblePassword = !hasVisiblePassword"
              >
                <template #icon>
                  <eye v-if="!hasVisiblePassword"></eye>
                  <eye-off v-else></eye-off>
                </template>
              </vs-input>
            </div>
          </div>
          <div>
            <label class="pt-4 pb-2 block font-medium text-lg" for=""
              >Nhập mật khẩu mới <span class="text-red-500">(*)</span>:</label
            >
            <vs-input
              type="password"
              :progress="getProgress"
              :visiblePassword="hasVisiblePassword"
              icon-after
              @click-icon="hasVisiblePassword = !hasVisiblePassword"
            >
              <template #icon>
                <eye v-if="!hasVisiblePassword"></eye>
                <eye-off v-else></eye-off>
              </template>
            </vs-input>
          </div>
          <div>
            <label class="pt-4 pb-2 block font-medium text-lg" for=""
              >Nhập lại mật khẩu mới
              <span class="text-red-500">(*)</span>:</label
            >
            <vs-input
              type="password"
              :progress="getProgress"
              :visiblePassword="hasVisiblePassword"
              icon-after
              @click-icon="hasVisiblePassword = !hasVisiblePassword"
            >
              <template #icon>
                <eye v-if="!hasVisiblePassword"></eye>
                <eye-off v-else></eye-off>
              </template>
            </vs-input>
          </div>
          <div>
            <p class="warning pt-4 text-sm text-red-500">
              Sử dụng mật khẩu mạnh, tối thiếu 8 ký tự, có sử dụng chữ hoa, số
              và ký tự đặc biệt
            </p>
          </div>
        </div>
        <div
          class="change-pass border border-[#ED4D27] rounded-xl p-5 pt-0 w-2/5"
        >
          <h3
            class="text-center font-semibold text-2xl h-10 mx-[-21px] rounded-t-xl text-white bg-[#ED4D27]"
          >
            Cập nhật thông tin
          </h3>
          <div>
            <label class="pt-4 pb-2 block font-medium text-lg" for=""
              >Nhập tên chủ hộ<span class="text-red-500">(*)</span>:</label
            >
            <vs-input type="text"></vs-input>
          </div>
          <div>
            <label class="pt-4 pb-2 block font-medium text-lg" for=""
              >Nhập số lượng thành viên
              <span class="text-red-500">(*)</span>:</label
            >
            <vs-input type="number"> </vs-input>
          </div>
          <div>
            <label class="pt-4 pb-2 block font-medium text-lg" for=""
              >Nhập số điện thoại liên lạc chính
              <span class="text-red-500">(*)</span>:</label
            >
            <vs-input type="text"> </vs-input>
          </div>
          <div>
            <label class="pt-4 pb-2 block font-medium text-lg" for=""
              >Nhập địa chỉ nhà cụ thể<span class="text-red-500">(*)</span
              >:</label
            >
            <vs-input type="text"></vs-input>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <vs-button
          color="#32CB00"
          class="w-48 text-xl font-semibold h-10 block save-change"
        >
          Lưu thay đổi
        </vs-button>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import Eye from "../../components/icons/eye.vue";
import EyeOff from "../../components/icons/eyeOff.vue";
import Header from "../../components/header/index.vue";
import Bottom from "../../components/footer/index.vue";
export default {
  data: () => ({
    value: "",
    hasVisiblePassword: false,
  }),
  computed: {
    getProgress() {
      let progress = 0;
      if (/[^A-Za-z0-9]/.test(this.value)) {
        progress += 20;
      }

      return progress;
    },
  },
  components: {
    Header,
    Eye,
    EyeOff,
    Bottom,
  },
};
</script>

<style></style>
