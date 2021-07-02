import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
//1. 중요한 것들을 처음 시작 때 내려주자
// import About from "../views/About.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";
import DataBindingTextarea from "../views/DataBindingTextarea.vue";
import DataBindingSelect from "../views/DataBindingSelect.vue";
import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
import DataBindingRadio from "../views/DataBindingRadio.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  //2. 사용자가 라우터를 접속하는 순간 내려주자 
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: DataBindingHtml,
  },
  {
    path: "/databindinginputtext",
    name: "DataBindingInputText",
    component: DataBindingInputText,
  },
  {
    path: "/databindingtextarea",
    name: "DataBindingTextarea",
    component: DataBindingTextarea,
  },
  {
    path: "/databindingselect",
    name: "DataBindingSelect",
    component: DataBindingSelect,
  },
  {
    path: "/databindingcheckbox",
    name: "DataBindingCheckbox",
    component: DataBindingCheckbox,
  },
  {
    path: "/databindingradio",
    name: "DataBindingRadio",
    component: DataBindingRadio,
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // }, 
  // {
  //   path: "/databinding",
  //   name: "DataBinding",
  //   component: DataBinding,
  // }, 
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "DataBinding" */ "../views/DataBinding.vue"),

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
  // {
  //   path: "/d",
  //   name: "d",

  //   component: () =>
  //     import( /* webpackChunkName: "d" */ "../views/d.vue"),
  // },
  // {
  //   path: "/e",
  //   name: "e",

  //   component: () =>
  //     import( /* webpackChunkName: "e" */ "../views/e.vue"),
  // },
  // {
  //   path: "/f",
  //   name: "f",

  //   component: () =>
  //     import( /* webpackChunkName: "f" */ "../views/f.vue"),
  // },

  {
    path: "/databindingbutton",
    name: "databindingbutton",

    component: () =>
      import( /* webpackChunkName: "databindingbutton" */ "../views/databindingbutton.vue"),
    //3. cache에 올려놓고 사용자가 누르는 순간 내려주자
  },

  {
    path: "/databindingattribute",
    name: "databindingattribute",

    component: () =>
      import( /* webpackChunkName: "databindingattribute" */ "../views/databindingattribute.vue"),
    //3. cache에 올려놓고 사용자가 누르는 순간 내려주자
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;