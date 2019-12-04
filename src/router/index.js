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


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
