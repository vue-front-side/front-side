import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/index',
    name:'Index',
    component:()=>import('../views/Index.vue')
  },
  {
    path:'/test',
    name:'Test',
    component:()=>import('../views/Test.vue')
  },
  {
    path:'/recovery',
    name:'recovery',
    component:()=>import('../views/Recovery')
  },
  {
    path:'/repair',
    name:'repair',
    component:()=>import('../views/Repair')
  },
  {
    path:'/unlock',
    name:'unlock',
    component:()=>import('../views/Unlock')
  },
  {
    path:'/dynamic',
    name:'dynamic',
    component:()=>import('../views/Dynamic')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
