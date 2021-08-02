import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(Vuex)

const store = new Vuex.Store({});

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import("../components/signup/signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      requiresAuth: true
    },
    component: () =>
      import("../components/login/login.vue"),
  },
  {
    path: "/chats",
    name: "main_page",
    meta: {
      requiresAuth: true
    },
    component: () =>
      import("../views/chatpage/chatPage.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("precheck : " + to + " form : " + from);
  console.log(to);
  console.log(from);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log("checking aurthentication");
    store.state.isLoggedIn = true;

    if (!store.state.isLoggedIn) {
      next({ name: 'login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})


export default router;
