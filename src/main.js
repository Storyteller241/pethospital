import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import api from "./api"
import './assets/css/common.css'
import './router/permission.js'
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './utils/init'
import 'element-ui/lib/theme-chalk/index.css';


Vue.prototype.$api = api;
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
