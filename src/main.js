import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import VCharts from 'v-charts';
import './plugins/ant-design-vue';
import '@/assets/css/reset.less';

Vue.config.productionTip = false;
// Vue.use(VCharts);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
