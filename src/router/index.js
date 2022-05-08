import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home/index.vue";
import Login from "../pages/login/index.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});

export default router;
