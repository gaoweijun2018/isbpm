import Vue from 'vue';
import App from '@/App.vue';
import SvgIcon from 'vue-svgicon';

import '@/commons/vant';
import 'normalize.css';
import '@/assets/style.css';
import '@/styles/global.less';
import '@/styles/theme.less';
import '@/commons/utils/ui';
import '@/icons/components';
import '@/commons/filters';
import '@/router/permission';

import router from '@/router';
import store from '@/store';

import '@/router/permission';


Vue.use(SvgIcon, {
    tagName: 'svg-icon',
    defaultWidth: '1em',
    defaultHeight: '1em',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
