import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import JoinIn from '@/pages/joinIn/joinIn'
import Mall from '@/pages/mall/mall'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:"/home",name:"Home",component:Home},
    {path:"/joinIn",name:"JoinIn",component:JoinIn},
    {path:"/Mall",name:"Mall",component:Mall}
    
  ]
})
