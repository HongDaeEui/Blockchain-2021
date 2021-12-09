import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates nestedcomponent2 separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: () =>
      import(/* webpackChunkName: "restaurant" */ "../views/restaurant.vue"),
  },
  {
    path: "/computed",
    name: "computed",
    component: () =>
      import(/* webpackChunkName: "computed" */ "../views/computed.vue"),
  },
  {
    path: "/watch",
    name: "watch",
    component: () =>
      import(/* webpackChunkName: "watch" */ "../views/watch.vue"),
  },
  {
    path: "/nestedcomponent2",
    name: "nestedcomponent2",

    component: () =>
      import(
        /* webpackChunkName: "nestedcomponent2" */ "../views/nestedcomponent2.vue"
      ),
  },
  {
    path: "/nestedcomponent",
    name: "nestedcomponent",

    component: () =>
      import(
        /* webpackChunkName: "nestedcomponent" */ "../views/nestedcomponent.vue"
      ),
  },
  {
    path: "/nestedcomponent3",
    name: "nestedcomponent3",

    component: () =>
      import(
        /* webpackChunkName: "nestedcomponent3" */ "../views/nestedcomponent3.vue"
      ),
  },
  {
    path: "/nestedcomponent4",
    name: "nestedcomponent4",

    component: () =>
      import(
        /* webpackChunkName: "nestedcomponent4" */ "../views/nestedcomponent4.vue"
      ),
  },
  {
    path: "/nestedcomponent5",
    name: "nestedcomponent5",

    component: () =>
      import(
        /* webpackChunkName: "nestedcomponent5" */ "../views/nestedcomponent5.vue"
      ),
  },
  {
    path: "/databindinglist3",
    name: "databindinglist3",

    component: () =>
      import(
        /* webpackChunkName: "databindinglist3" */ "../views/databindinglist3.vue"
      ),
  },
  {
    path: "/provideinject",
    name: "provideinject",

    component: () =>
      import(
        /* webpackChunkName: "provideinject" */ "../views/provideinject.vue"
      ),
  },
  {
    path: "/slotusemodallayout",
    name: "slotusemodallayout",

    component: () =>
      import(
        /* webpackChunkName: "slotusemodallayout" */ "../views/slotusemodallayout.vue"
      ),
  },
  {
    path: "/parent2",
    name: "parent2",

    component: () =>
      import(/* webpackChunkName: "parent2" */ "../views/parent2.vue"),
  },
  {
    path: "/parent",
    name: "parent",

    component: () =>
      import(/* webpackChunkName: "parent" */ "../views/parent.vue"),
  },
  {
    path: "/storeaccess",
    name: "storeAcccess",

    component: () =>
      import(/* webpackChunkName: "storeAccess" */ "../views/storeAccess"),
  },
  {
    path: "/loginaccess",
    name: "LoginAccess",

    component: () =>
      import(/* webpackChunkName: "LoginAccess" */ "../views/LoginAccess"),
  },
  {
    path: "/login",
    name: "Login",

    component: () => import(/* webpackChunkName: "Login" */ "../views/Login"),
  },
  {
    path: "/kakaologin",
    name: "KakaoLogin",

    component: () =>
      import(/* webpackChunkName: "KakaoLogin" */ "../views/KakaoLogin"),
  },
  {
    path: "/kakaologin2",
    name: "KakaoLogin2",

    component: () =>
      import(/* webpackChunkName: "KakaoLogin2" */ "../views/KakaoLogin2"),
  },
  {
    path: "/naverlogin",
    name: "NaverLogin",

    component: () =>
      import(/* webpackChunkName: "NaverLogin" */ "../views/NaverLogin"),
  },
  {
    path: "/naverlogin2",
    name: "NaverLogin2",

    component: () =>
      import(/* webpackChunkName: "NaverLogin2" */ "../views/NaverLogin2"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
