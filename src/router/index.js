import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/chatApp",
    name: "chatApp",
    component: () =>
      import("../views/main_page/main-page.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import("../views/signup/signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/login/login.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
