import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/layout'
import Index from '@/components/index/index'
import Cockpit from '@/components/cockpit/cockpit'
import NewsCenter from '@/components/newsCenter/newsCenter'
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path:'/',
          redirect: '/layout'
      },
      {
          path: '/layout',
          component: Layout,
          redirect:'/layout/index',
          // meta: {
          //     requireAuth: true,
          // },
        children:[
          {
              path:'index',
              component:Index
          },
          {
            path:'cockpit',
            component:Cockpit
          },
          {
            path:'newsCenter',
            component:NewsCenter
          },
        ]
      },
      {
        path:'/login',
        component:Login
      }
  ]
})
