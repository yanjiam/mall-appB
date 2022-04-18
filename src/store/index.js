import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getBusinessCookie, removeBusinessCookie } from '@/utils/businessCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 导航的收放状态 false为展开  true为收起来
    collapsed: false,
    // 用户信息
    business: getBusinessCookie(),
    // 存储菜单的路由
    menuRoutes: [],
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setBusinessInfo(state, businessInfo) {
      state.business = businessInfo;
    },
    logout(state) {
      state.business = {
        b_name: '',
        pin: '',
        power: '',
      };
    },
    changeMenuRoutes(state, routes) {
      state.menuRoutes = routes;
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setBusinessInfo({ commit }, businessInfo) {
      commit('setBusinessInfo', businessInfo);
      const { pin, power } = businessInfo;
      setCookie({ pin, power });
    },
    logout({ commit }) {
      commit('logout');
      removeBusinessCookie();
    },
    changeMenuRoutes({ commit }, routes) {
      commit('changeMenuRoutes', routes);
    },
  },
  modules: {
  },
});
