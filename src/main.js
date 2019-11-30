import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
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
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
