import Vue from 'vue'
import Vuex from 'vuex'
import login from "./modules/login"
// import contentInfoModule from "./modules/contentInfoModule"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    login
  }
})
