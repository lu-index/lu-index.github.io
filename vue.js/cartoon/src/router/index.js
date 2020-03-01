import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeSearch from '../views/HomeSearch.vue'
import Search from '../views/Search.vue'
import Searching from '../views/Searching.vue'
import SearchList from '../views/SearchList.vue'
import MenuClassify from '../views/MenuClassify.vue'
import HomeList from '../views/HomeList.vue'
import HomeNew from '../views/HomeNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/search',
    name:'search',
    component:Search,
    children:[
      {
        path:'/',
        comments:SearchList
      },
      {
        path:'searching',
        comments:Searching
      }
    ]
  },
  {
    path: '/menuclassify',
    name: 'menuclassify',
    component: MenuClassify
  },
  {
    path: '/homesearch',
    name: 'homesearch',
    component:HomeSearch
  },
  {
    path: '/homelist',
    name: 'homelist',
    component:HomeList
  },
  {
    path: '/homenew',
    name: 'homenew',
    component:HomeNew
  },
  {
    path: '/Particulars',
    name: 'Particulars',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Particulars.vue')
  },
  {
    path: '/Lookbooke',
    name: 'Lookbooke',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Lookbooke.vue')
  },
  {
    path: '/SerializeList',
    name: 'SerializeList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SerializeList.vue')
  },
  {
    path: '/FinishList',
    name: 'FinishList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FinishList.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
