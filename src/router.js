import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import TuiDataGrid from './views/TuiDataGrid.vue'
//import MonitorTotal from './views/MonitorTotal.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/monitor',
      name: '종합 감시',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/MonitorTotal.vue')
    },
    {
      path: '/datagrid',
      name: 'Data Grid',
      component: () => import(/* webpackChunkName: "about" */ './views/TuiDataGrid.vue')
    },
    {
      path: '/selectbox',
      name: 'Select Box',
      component: () => import(/* webpackChunkName: "about" */ './views/SelectBoxGuide.vue')
    },
    {
      path: '/tab',
      name: 'tab',
      component: () => import(/* webpackChunkName: "about" */ './views/TabsGuide.vue')
    },
    {
      path: '/firebase',
      name: 'FireBase',
      component: () => import(/* webpackChunkName: "about" */ './views/FirebaseGuide.vue')
    },
    {
      path: '/modal',
      name: 'Modal',
      component: () => import(/* webpackChunkName: "about" */ './views/ModalGuide.vue')
    },
    {
      path: '/map',
      name: 'Kakao Map',
      component: () => import('./views/KakaoMapGuide.vue')
    }
    ,{
      path: '/security',
      name: 'Security Test',
      component: () => import('./views/SecurityTest.vue')
    }
  ]
})
