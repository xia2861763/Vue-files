// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入vue-resource
import  VueResource  from 'vue-resource'
//引入全局css
import './assets/css/base.css'
import './assets/css/reset.css'
import './assets/css/checkout.css'
import './assets/css/modal.css'


Vue.use(VueResource) 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

