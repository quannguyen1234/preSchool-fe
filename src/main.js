import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import router from "./router";
import store from "./store";
import "./assets/styles/index.css";
import "vuesax/dist/vuesax.css";
import SsrCarousel from "vue-ssr-carousel";
import "vue-ssr-carousel/index.css";
Vue.component("ssr-carousel", SsrCarousel);
Vue.use(Vuesax, {
  colors: {
    primary: "#5b3cc4",
    success: "rgb(23, 201, 100)",
    danger: "rgb(242, 19, 93)",
    warning: "rgb(255, 130, 0)",
    dark: "rgb(36, 33, 69)",
  },
});
import "./assets/styles/reset.css";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
