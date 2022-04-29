import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import getMenuRoutes from '@/utils/permission';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

Vue.use(VueRouter);
const ayncRouterMap = [
  {
    path: '/product',
    name: 'Product',
    meta: {
      title: '商品',
      icon: 'inbox',
      hidden: false,
    },
    component: Home,
    children: [
      {
        path: 'list',
        name: 'ProductList',
        meta: {
          title: '商品列表',
          icon: 'unordered-list',
          hidden: false,
        },
        component: () => import('@/views/page/productList.vue'),
      }, {
        path: 'add',
        name: 'ProductAdd',
        meta: {
          title: '添加商品',
          icon: 'file-add',
          hidden: false,
        },
        component: () => import('@/views/page/productAdd.vue'),
      }, {
        path: 'edit/:id',
        name: 'ProductEdit',
        meta: {
          title: '编辑商品',
          icon: 'file-add',
          hidden: true,
        },
        component: () => import('@/views/page/productAdd.vue'),
      }, {
        path: 'category',
        name: 'Category',
        meta: {
          title: '类目管理',
          icon: 'project',
          hidden: false,
        },
        component: () => import('@/views/page/category.vue'),
      }, {
        path: 'categoryAdd',
        name: 'CategoryAdd',
        meta: {
          title: '添加类目',
          icon: 'file-add',
          hidden: true,
        },
        component: () => import('@/views/page/categoryAdd.vue'),
      }, {
        path: 'edit/:id',
        name: 'CategoryEdit',
        meta: {
          title: '编辑商品',
          icon: 'file-add',
          hidden: true,
        },
        component: () => import('@/views/page/categoryAdd.vue'),
      }],
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      title: '用户管理',
      icon: 'inbox',
      hidden: false,
    },
    component: Home,
    children: [
      {
        path: 'list',
        name: 'UserList',
        meta: {
          title: '用户列表',
          icon: 'unordered-list',
          hidden: false,
        },
        component: () => import('@/views/page/userList.vue'),
      },
      {
        path: 'add',
        name: 'UserAdd',
        meta: {
          title: '新增用户',
          icon: 'file-add',
          hidden: false,
        },
        component: () => import('@/views/page/userAdd.vue'),
      },
      {
        path: 'edit/:pin',
        name: 'UserEdit',
        meta: {
          title: '编辑用户',
          icon: 'file-add',
          hidden: true,
        },
        component: () => import('@/views/page/userAdd.vue'),
      },
    ],
  },
  {
    path: '/business',
    name: 'Business',
    meta: {
      title: '商家管理',
      icon: 'inbox',
      hidden: false,
    },
    component: Home,
    children: [
      {
        path: 'list',
        name: 'BusinessList',
        meta: {
          title: '商家列表',
          icon: 'unordered-list',
          hidden: false,
        },
        component: () => import('@/views/page/businessList.vue'),
      },
      {
        path: 'add',
        name: 'BusinessAdd',
        meta: {
          title: '新增商家',
          icon: 'file-add',
          hidden: false,
        },
        component: () => import('@/views/page/businessAdd.vue'),
      },
      {
        path: 'edit/:pin',
        name: 'BusinessEdit',
        meta: {
          title: '编辑商家',
          icon: 'file-add',
          hidden: true,
        },
        component: () => import('@/views/page/businessAdd.vue'),
      },
    ],
  },
  {
    path: '/order',
    name: 'Order',
    meta: {
      title: '订单管理',
      icon: 'inbox',
      hidden: false,
    },
    component: Home,
    children: [
      {
        path: 'list',
        name: 'OrderList',
        meta: {
          title: '订单列表',
          icon: 'unordered-list',
          hidden: false,
        },
        component: () => import('@/views/page/orderList.vue'),
      },
    ],
  },
];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    meta: {
      title: '首页',
      hidden: false,
      icon: 'home',
    },
    children: [{
      path: 'index',
      name: 'Index',
      meta: {
        title: '统计',
        icon: 'number',
        hidden: false,
      },
      component: () => import('../views/page/index.vue'),
    }],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
      hidden: true,
    },
  },
];

const router = new VueRouter({
  routes,
});
let isAddRoutes = false;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.business.pin && store.state.business.bname && store.state.business.power) {
      if (!isAddRoutes) {
        const menuRoutes = getMenuRoutes(store.state.business.power, ayncRouterMap);
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes)).then(() => {
          router.addRoutes(menuRoutes);
          next();
        });
        isAddRoutes = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});
export default router;
