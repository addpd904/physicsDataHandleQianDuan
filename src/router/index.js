import Vue from 'vue'
import VueRouter from 'vue-router'
import zhangLiXiShu from '../views/zhangLiXiShu.vue'
import focalDistance from '../views/focalDistance.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'zhangLiXiShu',
    component: zhangLiXiShu
  },
  {
    path: '/focalDistance',
    name: 'focalDistance',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: focalDistance
  }
]

const router = new VueRouter({
  base:"/two",
  routes
})

export default router
