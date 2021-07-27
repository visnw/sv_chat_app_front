import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/chatApp",
    name: "chatApp",
    component: () =>
      import("../views/main-page.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
