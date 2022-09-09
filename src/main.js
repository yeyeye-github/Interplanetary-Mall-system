import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import './assets/css/common.css'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
