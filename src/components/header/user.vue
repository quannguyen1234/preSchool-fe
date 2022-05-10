<template>
  <div class="header fixed z-50 w-full bg-white">
    <div class="flex mx-auto xl:max-w-5xl justify-between items-center h-14">
      <div class="logo w-32 h-12">
        <a href="">
          <img
            class="w-full h-full"
            :src="require('../../assets/images/icon.png')"
            alt=""
            srcset=""
          />
        </a>
      </div>
      <div class="flex justify-end gap-8 items-center">
        <div class="search">
          <vs-input
            class="bg-white border search rounded-full w-80 h-11"
            type="search"
            :loading="loading"
          />
        </div>
        <div class="flex gap-3">
          <router-link :to="{ name: 'Home' }"><Bell></Bell></router-link>
          <router-link :to="{ name: 'Home' }"><Cart></Cart></router-link>
          <router-link :to="{ name: 'Home' }"
            ><Messages></Messages
          ></router-link>
          <router-link :to="{ name: 'Home' }"><User></User></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bell from "../../components/icons/bell.vue";
import Cart from "../../components/icons/cart.vue";
import Messages from "../../components/icons/messages.vue";
import User from "../../components/icons/userCircle.vue";

export default {
  data() {
    return {
      loading: false,
    };
  },
  components: {
    Bell,
    Cart,
    User,
    Messages,
  },
};
</script>

<style></style>
