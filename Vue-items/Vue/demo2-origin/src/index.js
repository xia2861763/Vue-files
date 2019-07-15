import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {
          path:'list',
          name:'list',
          component:() => import(/* webpackChunkName: "list" */ './views/List.vue')
          //component:List
        },
        {
          path:'user',
          name:'user',
          component:()=>import(/* webpackChunkName:"user" */ './views/User.vue')
         //component:User
        }
      ]
    },
    {
      path:'/add',
      name:'add',
      component:()=>import(/* webpackChunkName:"add" */ './views/Add.vue')
    }
  ]
})
