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
  },
  {
    path:'/jzlist',
    name:'jzlist',
    component: ()=>import('../views/jzlist.vue')
  },
  {
    path:'/jzdetails/:staffId',
    name:'jzdetails',
    component:()=>import('../views/jzdetails.vue')
  },
  {
    path:'/yjfk',
    name:'yjfk',
    component:()=>import('../views/yjfk.vue')
  },
  {
    path:'/center',
    name:'center',
    component:()=>import('../views/center.vue')
  },
  {
    path:'/news',
    name:'news',
    component:()=>import('../views/news.vue')
  },
  {
    path:'/my',
    name:'my',
    component:()=>import('../views/my.vue')
  },
  {
    path:'/aboutus',
    name:'aboutus',
    component:()=>import('../views/aboutus.vue')
  },
  {
    path:'/wxrecord',
    name:'wxrecord',
    component:()=>import('../views/wxrecord.vue')
  },
  {
    path:'/recoverjl',
    name:'recoverjl',
    component:()=>import('../views/recoverjl.vue')
  },
  {
    path:'/payjl',
    name:'payjl',
    component:()=>import('../views/payjl.vue')
  },
  {
    path:'/jzjl',
    name:'jzjl',
    component:()=>import('../views/jzjl.vue')
  },

  {
    path:'/newnext',
    name:'newnext',
    component:()=>import('../views/newnext.vue')
  },
  {
    path:'/newmsg',
    name:'newmsg',
    component:()=>import('../views/newmsg.vue')
  },
  {
    path:'/newpic',
    name:'newpic',
    component:()=>import('../views/newpic.vue')
  },
  {
    path:'/newsex',
    name:'newsex',
    component:()=>import('../views/newsex.vue')
  },
  {
    path:'/newcy',
    name:'newcy',
    component:()=>import('../views/newcy.vue')
  },
  {
    path:'/paydetails/:payId',
    name:'paydetails',
    component:()=>import('../views/paydetails.vue')
  },
  {
    path:'/authentication',
    name:'authentication',
    component:()=>import('../views/Authentication.vue')
  },
  {
    path:'/verification',
    name:'verification',
    component:()=>import('../views/Verification.vue')
  },
  
  {
    path:'/paysuccess',
    name:'paysuccess',
    component:()=>import('../views/paySuccess.vue')
  },
  {
    path:'/payfailed',
    name:'payfailed',
    component:()=>import('../views/payFailed.vue')
  },
  {
    path:'/paygateway',
    name:'paygateway',
    component:()=>import('../views/payGateWay.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
