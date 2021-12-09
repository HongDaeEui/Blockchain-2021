import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
<<<<<<< HEAD
    path: '/getlist',
    name: 'GetList',
    component: () =>
      import(/* webpackChunkName: "GetList" */ '../views/GetList.vue')
  },
  {
    path: '/imageupload',
    name: 'imageUpload',
    component: () =>
      import(/* webpackChunkName: "imageUpload" */ '../views/imageUpload.vue')
=======
    path: '/databinding',
    name: 'DataBinding',

    component: () =>
      import(/* webpackChunkName: "DataBinding" */ '../views/DataBinding.vue')
  },
  {
    path: '/googlelogin',
    name: 'GoogleLogin',

    component: () =>
      import(/* webpackChunkName: "parent" */ '../views/GoogleLogin.vue')
>>>>>>> 75798d74412c42f398d71392711855af2ae213e2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
