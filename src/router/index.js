import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../components/List.vue'
import Home from '../components/Home.vue'
import NewsList from '../components/NewsList.vue'
import ShopList from '../components/ShopList.vue'
import NewsInfo from '../components/NewsInfo.vue'
import ShopInfo from '../components/ShopInfo.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {path:'/List',component:List},
  {path:'/NewsList',component:NewsList},
  {path:'/ShopList',component:ShopList},
  {path:'/NewsInfo',component:NewsInfo},
  {path:'/ShopInfo',component:ShopInfo}

]

const router = new VueRouter({
  routes
})

export default router
