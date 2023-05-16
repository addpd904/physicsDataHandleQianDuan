import Vue from 'vue'
import VueRouter from 'vue-router'
import zhangLiXiShu from '../views/zhangLiXiShu.vue'
import focalDistance from '../views/focalDistance.vue'
import huiSiTong from '../views/huiSiTong.vue'
import shengShuCeLiang from '../views/shengShuCeLiang.vue'
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
  },
  {
    path: '/huiSiTong',
    name: 'huiSiTong',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: huiSiTong
  },
  {
    path: '/shengShuCeLiang',
    name: 'shengShuCeLiang',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: shengShuCeLiang
  },
]

const router = new VueRouter({
  base:"/two",
  routes
})

export default router
