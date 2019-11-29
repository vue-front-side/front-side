import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'vant/lib/index.css';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/less/reset.less'


import { Lazyload } from 'vant';
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: 'static/img/error.jpg',
  loading: 'static/img/loading.gif',
  attempt: 3
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
