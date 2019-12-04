import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import http from './utils/http'
import vueAxios from 'vue-axios'
import store from './store'
import 'amfe-flexible'
import { Row, Col } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';
import { NavBar } from 'vant';
import { Icon } from 'vant';
import { Panel } from 'vant';

import { Dialog } from 'vant';
import { Field } from 'vant';
import './assets/less/allstyle.less'
import { Button } from 'vant';
import { Toast } from 'vant';
import { Image } from 'vant';
import { NoticeBar } from 'vant';
import { Tab, Tabs } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { NumberKeyboard } from 'vant';
import { Uploader } from 'vant';
import { Picker } from 'vant';
import http from './utils/http'
import vueAxios from 'vue-axios'
import { Loading } from 'vant';

Vue.use(Loading);
Vue.use(vueAxios, http)
Vue.use(Picker);

Vue.use(Uploader);

Vue.use(NumberKeyboard);

Vue.use(IndexBar).use(IndexAnchor);

Vue.use(Tab).use(Tabs);

Vue.use(NoticeBar);

Vue.use(Image);

Vue.use(Toast);

Vue.use(Button);
Vue.use(Field);
// 全局注册
Vue.use(Dialog);
Vue.use(Panel);
Vue.use(Icon);
Vue.use(Row).use(Col);
Vue.use(Cell).use(CellGroup);
Vue.use(List);
Vue.use(NavBar);
import 'vant/lib/index.css';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/less/reset.less'
import './assets/icon/font_inoi7rxcu4j/iconfont.css'
import './assets/icon/font_alszihkajvj/iconfont.css'
import './assets/icon/font_zl3of1q20f/iconfont.css'
import './assets/icon/font_04z09p6rmi9h/iconfont.css'
import './assets/icon/font_nxgamldks/iconfont.css'
import 'vant/lib/icon/local.css';
// import crypto from 'crypto'

import VueRouter from 'vue-router'

import {Row, Col} from 'vant';
import { Icon } from 'vant';
import { NavBar } from 'vant';

import { NumberKeyboard } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Search } from 'vant';
import { Grid, GridItem } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(vueAxios, http)
Vue.use(VueRouter);
Vue.use(Row).use(Col);
Vue.use(Icon);
Vue.use(NavBar);

Vue.use(Field).use(NumberKeyboard);
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(Search);
Vue.use(Grid).use(GridItem);
Vue.use(Tab).use(Tabs);


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
