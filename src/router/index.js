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
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/changenumber',
    name: 'changenumber',
    component: () => import('../views/ChangeNumber.vue')
  },
  {
    path: '/encyclopedia',
    name: 'encyclopdia',
    component: () => import('../views/Encyclopedia.vue')
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import('../views/Payments.vue')
  },
  {
    path: '/paymentsdetails',
    name: 'paymentsdetails',
    component: () => import('../views/PaymentsDetails.vue')
  },
  {
    path: '/orderdetails',
    name: 'orderdetails',
    component: () => import('../views/OrderDetails.vue')
  },
  {
    path: '/release',
    name: 'realease',
    component: () => import('../views/Release.vue')
  },
  {
    path: '/activies',
    name: 'activies',
    component: () => import('../views/Community_activities.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/Management.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/forgetpass',
    name: 'forgetpass',
    component: () => import('../views/ForgetPass.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
