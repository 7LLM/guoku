import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/home'
import JoinIn from '@/pages/joinIn/joinIn'
import Mall from '@/pages/mall/mall'
import Shoppcar from '@/pages/mall/shoppcar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:"/home",component:Home},
    {path:"/joinIn",component:JoinIn},
    {path:"/Mall",component:Mall},
    {path:"/shoppcar",component:Shoppcar}
    
  ]
})
