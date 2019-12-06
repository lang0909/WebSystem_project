import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'
import Show from '../components/ShowComment.vue'
import About from '../views/About.vue'
import Result from '../components/resultChart.vue'

Vue.prototype.$http = axios

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/top_record/:spid',
    name: 'result',
    component: Result
  },
  {
    path: '/top_record/:id/comment',
    name: 'show',
    component: Show
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
