import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },

  {
    path:'/index',
    name:'Index',
    component:()=>import('../views/Index.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/recovery',
    name:'recovery',
    component:()=>import('../views/Recovery'),
    meta: {
      auth: true
    }
  },
  {
    path:'/repair',
    name:'repair',
    component:()=>import('../views/Repair'),
    meta: {
      auth: true
    }
  },
  {
    path:'/unlock',
    name:'unlock',
    component:()=>import('../views/Unlock'),
    meta: {
      auth: true
    }
  },
  {
    path:'/dynamic',
    name:'dynamic',
    component:()=>import('../views/Dynamic'),
    meta: {
      auth: true
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/Login')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/Service.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/changenumber',
    name: 'changenumber',
    component: () => import('../views/ChangeNumber.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/encyclopedia',
    name: 'encyclopdia',
    component: () => import('../views/Encyclopedia.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import('../views/Payments.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/paymentsdetails',
    name: 'paymentsdetails',
    component: () => import('../views/PaymentsDetails.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/orderdetails',
    name: 'orderdetails',
    component: () => import('../views/OrderDetails.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/release',
    name: 'realease',
    component: () => import('../views/Release.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/activies',
    name: 'activies',
    component: () => import('../views/Community_activities.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/Management.vue'),
    meta: {
      auth: true
    }
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
    component: ()=>import('../views/jzlist.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/jzdetails/:staffId',
    name:'jzdetails',
    component:()=>import('../views/jzdetails.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/yjfk',
    name:'yjfk',
    component:()=>import('../views/yjfk.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/center',
    name:'center',
    component:()=>import('../views/center.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/news',
    name:'news',
    component:()=>import('../views/news.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/my',
    name:'my',
    component:()=>import('../views/my.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/aboutus',
    name:'aboutus',
    component:()=>import('../views/aboutus.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/wxrecord',
    name:'wxrecord',
    component:()=>import('../views/wxrecord.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/recoverjl',
    name:'recoverjl',
    component:()=>import('../views/recoverjl.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/payjl',
    name:'payjl',
    component:()=>import('../views/payjl.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/jzjl',
    name:'jzjl',
    component:()=>import('../views/jzjl.vue'),
    meta: {
      auth: true
    }
  },

  {
    path:'/newnext',
    name:'newnext',
    component:()=>import('../views/newnext.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/newmsg',
    name:'newmsg',
    component:()=>import('../views/newmsg.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/newpic',
    name:'newpic',
    component:()=>import('../views/newpic.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/newsex',
    name:'newsex',
    component:()=>import('../views/newsex.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/newcy',
    name:'newcy',
    component:()=>import('../views/newcy.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/paydetails/:payId',
    name:'paydetails',
    component:()=>import('../views/paydetails.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/authentication',
    name:'authentication',
    component:()=>import('../views/Authentication.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/verification',
    name:'verification',
    component:()=>import('../views/Verification.vue'),
    meta: {
      auth: true
    }
  },
  
  {
    path:'/paysuccess',
    name:'paysuccess',
    component:()=>import('../views/paySuccess.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/payfailed',
    name:'payfailed',
    component:()=>import('../views/payFailed.vue'),
    meta: {
      auth: true
    }
  },
  {
    path:'/paygateway',
    name:'paygateway',
    component:()=>import('../views/payGateWay.vue'),
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 注册全局守卫
// 在访问路由之前进行拦截
router.beforeEach((to, from, next) => {
  // 获取 token，登录的标识
  var token = sessionStorage.getItem("token")

  if(to.meta.auth) { // 判断是否需要权限
    if(token) { // 再次判断是否已经有权限了
      next()
    } else {
      next({ // 没有权限，导向登录页
        path: "/login",
        query: {redirect: to.fullPath} // 记录原本想访问的路由
      })
    }
  } else {
    next() // 想去哪就去哪
  }
})
export default router
