import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

//https://github.com/vuejs/vue-router/issues/1234
//https://codepen.io/anon/pen/gKNYwO?editors=1010

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/TabsGuide.vue')
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
      path: '/datagrid',
      name: 'Data Grid',
      component: () => import(/* webpackChunkName: "about" */ './views/TuiDataGrid.vue')
    },
    {
      path: '/vue-grid',
      name: 'vue-good-table',
      component: () => import(/* webpackChunkName: "about" */ './views/VueGoodTableGuide.vue')
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
      path: '/grid',
      name: 'grid layout',
      component: () => import(/* webpackChunkName: "about" */ './views/GridLayout.vue')
    },
    {
      path: '/layer',
      name: 'multi layout',
      component: () => import(/* webpackChunkName: "about" */ './views/Layout/MultiModal.vue')
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
    ,{
      path: '/websocket',
      name: 'Websocket Test',
      component: () => import('./views/WebsocketGuide.vue')
    }
    ,{path: '/monitor',
        name: '종합 감시',
        component: () => import(/* webpackChunkName: "about" */ './views/MonitorTotal.vue')
    }
  ]
  ,addRouterTest:function(){
       console.log(this.routes);
  }
})
