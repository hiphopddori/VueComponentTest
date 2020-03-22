import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/'
import Vuefire from 'vuefire'
import VModal from 'vue-js-modal'
import axios from 'axios'

//Vue.use(Vuetify)
import '@fortawesome/fontawesome-free/css/all.css'
import 'swiper/dist/css/swiper.css'

Vue.use(Vuefire)
Vue.use(VModal,{dynamic:true})
Vue.use(VueCompositionApi)
Vue.use(VueAwesomeSwiper, /* { default global options } */)





Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

