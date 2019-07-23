import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'List',
          name:'List',
          component: () => import( /* webpackChunkName: "List" */ '@/components/List.vue')
        },
        {
          path:'User',
          name:'User',
          component: () => import( /* webpackChunkName: "List" */ '@/components/User.vue')
        }
      ]
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
  ]
})
