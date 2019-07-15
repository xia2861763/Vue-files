import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/HelloWorld'
import Axios from 'axios'
import VueAxios from 'vue-axios'
// Vue.use({ Axios, VueAxios});
Vue.prototype.$axios = axios

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
