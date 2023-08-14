import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home/index.vue";
import Login from "../pages/login/index.vue";
import UpdateInformation from "../pages/users/information/index.vue";
import ListProduct from "../pages/products/index.vue";
import DetailProduct from "../pages/products/detail.vue";
import PersonalPage from '@/pages/personal-page/index.vue';
import ComingSoon from "../pages/coming-soon/index.vue";
Vue.use(VueRouter);

const routes = [
  { name: "Home", path: "/", component: Home, meta: { layout: true } },
  {
    name: "ListProduct",
    path: "/list-product",
    component: ListProduct,
    meta: { layout: true },
  },
  {
    name: "PersonalPage",
    path: "/personal-page",
    component:PersonalPage ,
    meta: { layout: true },
  },
  { name: "Login", path: "/login", component: Login },
  {
    name: "UpdateInformation",
    path: "/update-information",
    component: UpdateInformation,
  },
  {
    name: "DetailProduct",
    path: "/detail-product/:id",
    component: DetailProduct,
    meta: { layout: true },
  },
  {
    name: "ComingSoon",
    path: "/coming-soon",
    component: ComingSoon,
    meta: { layout: true },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});

export default router;
