import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signin",
    component: () =>
      import("../components/signin/signin.vue"),
  },
  {
    path: "/chat_app",
    name: "main_page",
    component: () =>
      import("../views/main_page/main_page.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
