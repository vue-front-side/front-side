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
    path:'/jzdetails',
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
    path:'/wxdetails',
    name:'wxdetails',
    component:()=>import('../views/wxdetails.vue')
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
    path:'/openjl',
    name:'openjl',
    component:()=>import('../views/openjl.vue')
  },
  {
    path:'/jzjl',
    name:'jzjl',
    component:()=>import('../views/jzjl.vue')
  },
  {
    path:'/newphone',
    name:'newphone',
    component:()=>import('../views/newphone.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
