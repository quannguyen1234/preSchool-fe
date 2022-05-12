<template>
  <div class="login">
    <Header></Header>
    <div
      class="container-login relative flex items-center"
      :style="{
        'background-image': 'url(./assets/images/background-login.jpg)',
      }"
    >
      <form
        class="bg-white w-[350px] h-[430px] absolute left-28 xl:left-80 lg:left-40 md:left-32 rounded-2xl"
      >
        <h2 class="w-full pt-5 pb-4 text-center text-3xl font-semibold">
          Đăng nhập
        </h2>
        <div class="flex justify-center">
          <div class="w-72 pt-5 pb-2 h-28">
            <label for="">Tài khoản:</label>
            <vs-input
              border
              v-model="account.username"
              :placeholder="placeholderUsername"
            />
            <span v-if="checkUsername" class="text-sm text-red-500"
              >Tài khoản không hợp lệ</span
            >
          </div>
        </div>
        <div class="flex justify-center h-[98px]">
          <div class="w-72 pb-2">
            <label class="w-full" for="">Mật khẩu:</label>
            <vs-input
              border
              type="password"
              :placeholder="placeholderPassword"
              v-model="account.password"
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
            <span v-if="checkPassword" class="text-sm text-red-500"
              >Tài khoản không hợp lệ</span
            >
          </div>
        </div>
        <div class="mx-8">
          <div class="w-40 pb-2">
            <vs-checkbox success v-model="saveAccount">
              Lưu tài khoản
            </vs-checkbox>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="w-72 py-2">
            <vs-button
              @click.prevent="openLoading()"
              style="width: 100%; margin: 0"
              animation-type="scale"
              color="#EE4D2D"
              class="h-10 bg-[#EE4D2D]"
              block
            >
              <login></login>
              <template #animate>
                <span class="text-[16px]">Đăng nhập</span>
              </template>
            </vs-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Eye from "../../components/icons/eye.vue";
import EyeOff from "../../components/icons/eyeOff.vue";
import Header from "../../components/header/index.vue";
import Login from "../../components/icons/login.vue";
export default {
  data: () => {
    return {
      hasVisiblePassword: false,
      account: {
        username: "",
        password: "",
      },
      checkUsername: false,
      checkPassword: false,
      saveAccount: false,
    };
  },
  computed: {
    computed: {
      getProgress() {
        let progress = 0;
        if (/[^A-Za-z0-9]/.test(this.account.password)) {
          progress += 20;
        }

        return progress;
      },
    },
    placeholderUsername() {
      return this.account.username.length > 0 ? "" : "Username";
    },
    placeholderPassword() {
      return this.account.password.length > 0 ? "" : "Password";
    },
  },
  components: {
    Header,
    Login,
    Eye,
    EyeOff,
  },
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        text: "Loading...",
      });
      setTimeout(() => {
        loading.close();
        this.openNotification("bottom-right");
      }, 3000);
    },
    openNotification(position = null) {
      this.$vs.notification({
        position,
        title: "Thông báo",
        text: `Tài khoản hoặc mật khẩu của bạn không chính xác, vui lòng đăng nhập lại. Cảm ơn!!!`,
      });
    },
  },
};
</script>

<style>
.container-login {
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 64px);
}
</style>
