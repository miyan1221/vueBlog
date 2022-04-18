import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui'  //01

import axios from 'axios' //04
import mavonEditor from 'mavon-editor'
import "element-ui/lib/theme-chalk/index.css" //02
import 'mavon-editor/dist/css/index.css'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

Vue.use(Element)  //03全局
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.prototype.$axios = axios //05全局

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
