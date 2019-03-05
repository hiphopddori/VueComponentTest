import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuefire from 'vuefire'
import VModal from 'vue-js-modal'
import axios from 'axios'

//Vue.use(Vuetify)
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuefire)
Vue.use(VModal,{dynamic:true})
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


function eventTest(){
  alert('11');
}   