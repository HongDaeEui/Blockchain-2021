import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates databindinglist3 separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/vendingmachine",
    name: "vendingmachine",

    component: () =>
      import( /* webpackChunkName: "vendingmachine" */ "../views/vendingmachine.vue"),
  },
  {
    path: "/eventbinding",
    name: "eventbinding",

    component: () =>
      import( /* webpackChunkName: "eventbinding" */ "../views/eventbinding.vue"),
  },
  {
    path: "/renderingif",
    name: "renderingif",

    component: () =>
      import( /* webpackChunkName: "renderingif" */ "../views/renderingif.vue"),
  },

  {
    path: "/databindinglist2-1",
    name: "databindinglist2-1",

    component: () =>
      import( /* webpackChunkName: "databindinglist3" */ "../views/databindinglist3.vue"),
  },
  {
    path: "/databindinglist2",
    name: "databindinglist2",

    component: () =>
      import( /* webpackChunkName: "databindinglist2" */ "../views/databindinglist2.vue"),
  },
  {
    path: "/databindinglist",
    name: "databindinglist",

    component: () =>
      import( /* webpackChunkName: "databindinglist" */ "../views/databindinglist.vue"),
  },
  {
    path: "/databindingstyle",
    name: "databindingstyle",

    component: () =>
      import( /* webpackChunkName: "databindingstyle" */ "../views/databindingstyle.vue"),
  },
  {
    path: "/databindingclass2",
    name: "databindingclass2",

    component: () =>
      import( /* webpackChunkName: "databindingclass2" */ "../views/databindingclass2.vue"),
  },
  {
    path: "/databindingclass",
    name: "databindingclass",

    component: () =>
      import( /* webpackChunkName: "databindingclass" */ "../views/databindingclass.vue"),
  },
  // {
  //   path: "/a",
  //   name: "a",

  //   component: () =>
  //     import( /* webpackChunkName: "a" */ "../views/a.vue"),
  // },
  // {
  //   path: "/b",
  //   name: "b",

  //   component: () =>
  //     import( /* webpackChunkName: "b" */ "../views/b.vue"),
  // },
  // {
  //   path: "/c",
  //   name: "c",

  //   component: () =>
  //     import( /* webpackChunkName: "c" */ "../views/c.vue"),
  // },
  {
    path: "/vendingmachine",
    name: "vendingmachine",

    component: () =>
      import( /* webpackChunkName: "vendingmachine" */ "../views/vendingmachine.vue"),
  },
  {
    path: "/eventbinding",
    name: "eventbinding",

    component: () =>
      import( /* webpackChunkName: "eventbinding" */ "../views/eventbinding.vue"),
  },
  {
    path: "/renderingif",
    name: "renderingif",

    component: () =>
      import( /* webpackChunkName: "renderingif" */ "../views/renderingif.vue"),
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;