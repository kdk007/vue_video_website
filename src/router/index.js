import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/Index'
import Allcourse from '@/components/views/Allcourse'
import Courseinfo from '@/components/views/Courseinfo'
import Login from '@/components/views/Login'
import Registe from '@/components/views/Registe'
import Userinfo from '@/components/views/Userinfo'
import Show from '@/components/views/Show'


import Test from '@/components/views/Test'
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/allcourse',
      name: 'Allcourse',
      component: Allcourse
    },
    {
      path:'/courseinfo',
      name:'Courseinfo',
      component: Courseinfo
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/registe',
      name: 'Registe',
      component: Registe
    },
    {
      path:'/userinfo',
      name: 'Userinfo',
      meta: {
        requireAuth: true,  // 该路由项需要权限校验
      },
      component: Userinfo
    },
    {
      path:'/test',
      name: 'Test',
      component: Test
    },
    {
      path:'/show',
      name: 'Show',
      meta: {
        requireAuth: true,  // 该路由项需要权限校验
      },
      component: Show
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
